/// <reference types="node" />
import type { Handler } from '@netlify/functions'

type ServiceType = 'core' | 'dep'

type ServiceTarget = {
  key: string
  label: string
  type: ServiceType
  url?: string
  method?: 'GET' | 'HEAD'
  headers?: Record<string, string>
  note?: string
  // Custom checker for complex cases (returns ok boolean and optional status)
  customCheck?: () => Promise<{ ok: boolean; status?: number; note?: string }>
}

type ServiceResult = {
  key: string
  label: string
  type: ServiceType
  ok: boolean
  status: number | null
  ms: number | null
  url?: string
  note?: string
  error?: string
}

const DEFAULT_TIMEOUT_MS = 5000

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort('timeout'), ms)
  return promise.finally(() => clearTimeout(id))
}

async function httpCheck(target: ServiceTarget): Promise<ServiceResult> {
  const startedAt = Date.now()
  let ok = false
  let status: number | null = null
  let error: string | undefined
  const method = target.method || 'GET'
  try {
    if (target.customCheck) {
      const r = await withTimeout(target.customCheck(), DEFAULT_TIMEOUT_MS)
      ok = r.ok
      status = typeof r.status === 'number' ? r.status : (r.ok ? 200 : null)
      return {
        key: target.key,
        label: target.label,
        type: target.type,
        ok,
        status,
        ms: Date.now() - startedAt,
        url: target.url,
        note: r.note || target.note,
      }
    }
    if (!target.url) throw new Error('Missing URL')
    const res = await withTimeout(
      fetch(target.url, {
        method,
        redirect: 'follow',
        headers: {
          'User-Agent': 'MagicCraftStatusBot/1.0 (+https://magiccraft.io)',
          ...target.headers,
        },
      }),
      DEFAULT_TIMEOUT_MS,
    )
    status = res.status
    ok = res.status >= 200 && res.status < 400
  } catch (e: any) {
    error = String(e?.message || e)
  }
  return {
    key: target.key,
    label: target.label,
    type: target.type,
    ok,
    status,
    ms: Date.now() - startedAt,
    url: target.url,
    note: target.note,
    error,
  }
}

const NITTER_HOSTS: string[] = [
  'https://nitter.net',
  'https://nitter.pufe.org',
  'https://nitter.poast.org',
  'https://nitter.hu',
  'https://n.opnxng.com',
  'https://nitter.holo.host',
  'https://nitter.fdn.fr',
  'https://nitter.esmailelbob.xyz',
]

export const handler: Handler = async () => {
  const baseGameserver = (process.env.GAMESERVER_API_URL || 'http://prod-gameserver.magiccraft.io:8903').replace(/\/$/, '')
  const gameserverKey = process.env.GAMESERVER_API_KEY || ''
  const sanityProjectId = process.env.VITE_SANITY_PROJECT_ID
  const sanityDataset = process.env.VITE_SANITY_DATASET || 'production'
  const sanityVersion = process.env.VITE_SANITY_API_VERSION || '2023-05-03'

  const targets: ServiceTarget[] = [
    // Core surfaces
    { key: 'lobby-root', label: 'Lobby', type: 'core', url: 'https://lobby.magiccraft.io/' },
    { key: 'app-market', label: 'Marketplace', type: 'core', url: 'https://app.magiccraft.io/marketplace/explorer' },
    { key: 'gameserver', label: 'GameServer API', type: 'core', url: `${baseGameserver}/battlepass/active`, headers: { 'X-API-Key': gameserverKey } },

    // Lobby pages (deps)
    { key: 'lobby-leaderboard', label: 'Leaderboard', type: 'dep', url: 'https://lobby.magiccraft.io/leaderboard' },
    { key: 'lobby-stats', label: 'Stats', type: 'dep', url: 'https://lobby.magiccraft.io/stats' },
    { key: 'lobby-referral', label: 'Referral', type: 'dep', url: 'https://lobby.magiccraft.io/referral' },

    // Ecosystem
    { key: 'pledging', label: 'Pledging', type: 'dep', url: 'https://app.magiccraft.io/pledging' },
    { key: 'rent', label: 'Rent', type: 'dep', url: 'https://rent.magiccraft.io/' },
    { key: 'games', label: 'Ecosystem Games', type: 'dep', url: 'https://games.magiccraft.io/' },
    { key: 'docs', label: 'Docs', type: 'dep', url: 'https://docs.magiccraft.io/' },

    // Wallet/fiat bridges
    { key: 'xswap', label: 'XSwap', type: 'dep', url: 'https://xswap.link/' },
    { key: 'walletconnect', label: 'WalletConnect', type: 'dep', url: 'https://walletconnect.org/' },
    { key: 'metamask', label: 'MetaMask', type: 'dep', url: 'https://metamask.io/' },
    { key: 'bybit', label: 'Bybit', type: 'dep', url: 'https://www.bybit.com/' },
    { key: 'pancake', label: 'PancakeSwap', type: 'dep', url: 'https://pancakeswap.finance/' },

    // Embeds/CDN
    { key: 'cloudinary', label: 'Cloudinary', type: 'dep', url: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717331155/mcrt-icon_oewidv.webp' },
    { key: 'twitframe', label: 'Twitframe', type: 'dep', url: 'https://twitframe.com/' },
    {
      key: 'nitter',
      label: 'Mentions upstream',
      type: 'dep',
      note: 'any mirror available',
      customCheck: async () => {
        for (const host of NITTER_HOSTS) {
          try {
            const res = await withTimeout(fetch(host, { headers: { 'User-Agent': 'MagicCraftStatusBot/1.0' } }), 4000)
            if (res.status >= 200 && res.status < 400) return { ok: true, status: res.status }
          } catch {}
        }
        return { ok: false, status: 0 }
      },
    },
    {
      key: 'sanity',
      label: 'Sanity CDN',
      type: 'dep',
      note: sanityProjectId ? '' : 'not configured',
      customCheck: async () => {
        if (!sanityProjectId) return { ok: false, status: 0, note: 'not configured' }
        const url = `https://${sanityProjectId}.apicdn.sanity.io/${encodeURIComponent(sanityVersion)}/data/query/${encodeURIComponent(sanityDataset)}?query=${encodeURIComponent('*[_type == "post"][0...1]')}`
        try {
          const res = await withTimeout(fetch(url, { headers: { 'User-Agent': 'MagicCraftStatusBot/1.0' } }), 4000)
          const ok = res.status >= 200 && res.status < 400
          return { ok, status: res.status }
        } catch (e) {
          return { ok: false, status: 0 }
        }
      },
    },
  ]

  // Execute checks in parallel, but cap concurrency if needed (small list, so all at once)
  const results = await Promise.all(targets.map((t) => httpCheck(t)))

  const coreOk = results.filter((r) => r.type === 'core').every((r) => r.ok)
  const anyFail = results.some((r) => !r.ok)
  const overallOk = coreOk && !anyFail

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ ts: new Date().toISOString(), ok: overallOk, coreOk, services: results }),
  }
}

export default {}


