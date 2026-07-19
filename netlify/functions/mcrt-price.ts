import type { Handler } from '@netlify/functions'

const MCRT_CONTRACT = '0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f'

type CachedPrice = {
  data: SimpleResponse
  fetchedAt: number
}

let memoryCache: CachedPrice | null = null
const CACHE_TTL_MS = 60_000
const MAX_STALE_MS = 15 * 60_000
const UPSTREAM_TIMEOUT_MS = 3_000

type SimpleResponse = {
  magiccraft: {
    usd: number
    usd_24h_change?: number
  }
  source: string
}

function responseBody(
  data: SimpleResponse,
  fetchedAt: number,
  status: 'live' | 'stale',
  now: number
) {
  return JSON.stringify({
    ...data,
    meta: {
      status,
      fetchedAt: new Date(fetchedAt).toISOString(),
      ageMs: Math.max(0, now - fetchedAt),
    },
  })
}

async function fetchJsonWithTimeout(url: string) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      headers: { accept: 'application/json' },
      signal: controller.signal,
    })
    const json: unknown = response.ok ? await response.json() : null
    return { response, json }
  } finally {
    clearTimeout(timeoutId)
  }
}

async function fetchFromCoinGecko(): Promise<SimpleResponse | null> {
  try {
    const url =
      'https://api.coingecko.com/api/v3/simple/price?ids=magiccraft&vs_currencies=usd&include_24hr_change=true'
    const { response, json: rawJson } = await fetchJsonWithTimeout(url)
    if (!response.ok) return null
    const json = rawJson as Record<
      string,
      { usd?: number; usd_24h_change?: number }
    >
    const p = json?.magiccraft
    if (!p || typeof p.usd !== 'number') return null
    return {
      magiccraft: { usd: p.usd, usd_24h_change: p.usd_24h_change },
      source: 'coingecko',
    }
  } catch {
    return null
  }
}

async function fetchFromDexScreener(): Promise<SimpleResponse | null> {
  try {
    const url = `https://api.dexscreener.com/latest/dex/tokens/${MCRT_CONTRACT}`
    const { response, json: rawJson } = await fetchJsonWithTimeout(url)
    if (!response.ok) return null
    type DSPair = {
      priceUsd?: string
      priceChange?: { h24?: number }
      liquidity?: { usd?: number }
    }
    const json = rawJson as { pairs?: DSPair[] }
    const pairs = json?.pairs ?? []
    if (pairs.length === 0) return null
    const sorted = [...pairs].sort(
      (a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0)
    )
    const top = sorted[0]
    const usd = Number(top.priceUsd)
    if (!Number.isFinite(usd)) return null
    return {
      magiccraft: { usd, usd_24h_change: top.priceChange?.h24 },
      source: 'dexscreener',
    }
  } catch {
    return null
  }
}

export const handler: Handler = async () => {
  const now = Date.now()

  if (memoryCache && now - memoryCache.fetchedAt < CACHE_TTL_MS) {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=60, s-maxage=60',
        'x-cache': 'HIT',
      },
      body: responseBody(memoryCache.data, memoryCache.fetchedAt, 'live', now),
    }
  }

  const data = (await fetchFromCoinGecko()) ?? (await fetchFromDexScreener())

  if (data) {
    memoryCache = { data, fetchedAt: now }
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=60, s-maxage=60',
        'x-cache': 'MISS',
      },
      body: responseBody(data, now, 'live', now),
    }
  }

  if (memoryCache && now - memoryCache.fetchedAt <= MAX_STALE_MS) {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=30, s-maxage=30',
        'x-cache': 'STALE',
      },
      body: responseBody(memoryCache.data, memoryCache.fetchedAt, 'stale', now),
    }
  }

  return {
    statusCode: 503,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
    body: JSON.stringify({ error: 'price_unavailable' }),
  }
}
