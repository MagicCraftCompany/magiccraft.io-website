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

const DEFAULT_TIMEOUT_MS = 8000

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => reject(new Error('timeout')), ms)
    promise
      .then((val) => { clearTimeout(id); resolve(val) })
      .catch((err) => { clearTimeout(id); reject(err) })
  })
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

type Region = 'europe' | 'asia' | 'america'

const REGION_IPS: Record<Region, string> = {
  europe: '5.9.111.150',
  asia: '51.79.230.134',
  america: '51.222.44.25',
}

export const handler: Handler = async (event) => {
  try {
    const deep = event.queryStringParameters?.deep === '1'
    const region = (event.queryStringParameters?.region as Region) || 'europe'
    const port = process.env.GAMESERVER_API_PORT || '8913'
    const baseGameserverOverride = process.env.GAMESERVER_API_URL
    const baseGameserver = baseGameserverOverride
      ? baseGameserverOverride.replace(/\/$/, '')
      : (`http://${REGION_IPS[region]}:${port}`).replace(/\/$/, '')
    const gameserverKey = process.env.GAMESERVER_API_KEY || ''
    const sanityProjectId = process.env.VITE_SANITY_PROJECT_ID
    const sanityDataset = process.env.VITE_SANITY_DATASET || 'production'
    const sanityVersion = process.env.VITE_SANITY_API_VERSION || '2023-05-03'

    const targets: ServiceTarget[] = [
      // Core surfaces
      { key: 'lobby-root', label: 'Lobby', type: 'core', url: 'https://lobby.magiccraft.io/' },
      { key: 'app-market', label: 'Marketplace', type: 'core', url: 'https://app.magiccraft.io/marketplace/explorer' },
      { 
        key: 'gameserver', 
        label: 'GameServer API', 
        type: 'core', 
        customCheck: async () => {
          const candidates = baseGameserverOverride
            ? [{ base: baseGameserverOverride.replace(/\/$/, ''), region: 'custom' }]
            : (Object.entries(REGION_IPS).map(([r, ip]) => ({
                base: `http://${ip}:${port}`,
                region: r,
              })))

          for (const target of candidates) {
            try {
              const res = await withTimeout(
                fetch(`${target.base.replace(/\/$/, '')}/battlepass/active`, {
                  headers: { 'X-API-Key': gameserverKey, 'Content-Type': 'application/json' }
                }),
                DEFAULT_TIMEOUT_MS
              )
              // Even 401/403 means server is up, just bad key
              const ok = res.status >= 200 && res.status < 500
              if (ok) return { ok: true, status: res.status, note: `online (${target.region})` }
            } catch {
              // try next region
            }
          }

          return { ok: false, status: 0, note: 'timeout (all regions)' }
        }
      },

      // Lobby pages (deps)
      { key: 'lobby-leaderboard', label: 'Leaderboard', type: 'dep', url: 'https://lobby.magiccraft.io/leaderboard' },
      { key: 'lobby-stats', label: 'Stats', type: 'dep', url: 'https://lobby.magiccraft.io/stats' },
      { key: 'lobby-referral', label: 'Referral', type: 'dep', url: 'https://lobby.magiccraft.io/referral' },

      // Ecosystem
      { key: 'pledging', label: 'Pledging', type: 'dep', url: 'https://app.magiccraft.io/pledging' },
      { key: 'rent', label: 'Rent', type: 'dep', url: 'https://rent.magiccraft.io/' },
      { key: 'games', label: 'Ecosystem Games', type: 'dep', url: 'https://games.magiccraft.io/' },
      { key: 'docs', label: 'Docs', type: 'dep', url: 'https://docs.magiccraft.io/' },

      // Exchanges
      { key: 'bybit', label: 'Bybit', type: 'dep', url: 'https://www.bybit.com/' },
      { key: 'pancake', label: 'PancakeSwap', type: 'dep', url: 'https://pancakeswap.finance/' },
      { key: 'htx', label: 'HTX', type: 'dep', url: 'https://www.htx.com/' },

      // Token links
      { key: 'bscscan-mcrt', label: 'BscScan MCRT', type: 'dep', url: 'https://bscscan.com/token/0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f' },
      { key: 'cmc-mcrt', label: 'CoinMarketCap', type: 'dep', url: 'https://coinmarketcap.com/currencies/magiccraft/' },
      { key: 'coingecko', label: 'CoinGecko', type: 'dep', url: 'https://www.coingecko.com/en/coins/magiccraft' },

      // AI Products
      { key: 'merlin', label: 'Merlin AI', type: 'dep', url: 'https://merlintheai.com/' },
      { key: 'docai', label: 'DocAI', type: 'dep', url: 'https://docai.live/' },
      { key: 'polibilities', label: 'Polibilities', type: 'dep', url: 'https://polibilities.com/' },

      // Community
      { key: 'telegram', label: 'Telegram', type: 'dep', url: 'https://t.me/magiccraftgamechat' },

      // App stores
      { key: 'ios-store', label: 'Apple App Store', type: 'dep', url: 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525' },
      { key: 'android-store', label: 'Google Play', type: 'dep', url: 'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en' },
      { key: 'steam', label: 'Steam', type: 'dep', url: 'https://store.steampowered.com/app/2395760/MagicCraft/' },

      // CDN
      { key: 'cloudinary', label: 'Cloudinary CDN', type: 'dep', url: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/f_auto,q_auto/v1717331155/mcrt-icon_oewidv.webp' },

      // Sanity CMS
      {
        key: 'sanity',
        label: 'Sanity CMS',
        type: 'dep',
        note: sanityProjectId ? '' : 'not configured',
        customCheck: async () => {
          if (!sanityProjectId) return { ok: false, status: 0, note: 'not configured' }
          const url = `https://${sanityProjectId}.apicdn.sanity.io/${encodeURIComponent(sanityVersion)}/data/query/${encodeURIComponent(sanityDataset)}?query=${encodeURIComponent('*[_type == "post"][0...1]')}`
          try {
            const res = await withTimeout(fetch(url, { headers: { 'User-Agent': 'MagicCraftStatusBot/1.0' } }), 4000)
            const ok = res.status >= 200 && res.status < 400
            return { ok, status: res.status }
          } catch {
            return { ok: false, status: 0 }
          }
        },
      },
    ]

    // Deep checks for extended diagnostics
    if (deep) {
      const deepTargets: ServiceTarget[] = [
        {
          key: 'lobby-register',
          label: 'Lobby Register',
          type: 'dep',
          note: 'form check',
          customCheck: async () => {
            try {
              const res = await withTimeout(fetch('https://lobby.magiccraft.io/register', { headers: { 'User-Agent': 'MagicCraftStatusBot/1.0' } }), 6000)
              const html = await res.text()
              const hasForm = /<form[\s\S]*?>[\s\S]*?<\/form>/i.test(html)
              return { ok: res.status >= 200 && res.status < 400 && hasForm, status: res.status, note: hasForm ? 'form ok' : 'no form' }
            } catch {
              return { ok: false, status: 0 }
            }
          },
        },
      ]
      targets.push(...deepTargets)
    }

    const apiKeys = new Set([
      'lobby-root',
      'app-market',
      'gameserver',
      'lobby-leaderboard',
      'lobby-stats',
      'lobby-referral',
      'pledging',
      'rent',
    ])

    // Execute all checks in parallel
    const results = await Promise.all(targets.map((t) => httpCheck(t)))

    const coreOk = results.filter((r) => r.type === 'core').every((r) => r.ok)
    const apiResults = results.filter((r) => apiKeys.has(r.key))
    const apiOk = apiResults.filter((r) => r.ok).length
    const apiTotal = apiResults.length
    const apiHealthy = apiTotal === 0 ? coreOk : apiOk >= Math.max(1, apiTotal - 1)
    const overallOk = coreOk || apiHealthy

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        ts: new Date().toISOString(),
        ok: overallOk,
        coreOk,
        apiOk,
        apiTotal,
        services: results,
      }),
    }
  } catch (err: any) {
    // Catch-all error handler
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        ts: new Date().toISOString(), 
        ok: false, 
        coreOk: false, 
        error: err?.message || 'Unknown error',
        services: [] 
      }),
    }
  }
}

export default {}


