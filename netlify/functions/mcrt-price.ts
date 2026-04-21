import type { Handler } from '@netlify/functions'

const MCRT_CONTRACT = '0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f'

type CachedPrice = {
  body: string
  fetchedAt: number
}

let memoryCache: CachedPrice | null = null
const CACHE_TTL_MS = 60_000

type SimpleResponse = {
  magiccraft: {
    usd: number
    usd_24h_change?: number
  }
  source: string
}

async function fetchFromCoinGecko(): Promise<SimpleResponse | null> {
  try {
    const url =
      'https://api.coingecko.com/api/v3/simple/price?ids=magiccraft&vs_currencies=usd&include_24hr_change=true'
    const res = await fetch(url, { headers: { accept: 'application/json' } })
    if (!res.ok) return null
    const json = (await res.json()) as Record<string, { usd?: number; usd_24h_change?: number }>
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
    const res = await fetch(url, { headers: { accept: 'application/json' } })
    if (!res.ok) return null
    type DSPair = { priceUsd?: string; priceChange?: { h24?: number }; liquidity?: { usd?: number } }
    const json = (await res.json()) as { pairs?: DSPair[] }
    const pairs = json?.pairs ?? []
    if (pairs.length === 0) return null
    const sorted = [...pairs].sort(
      (a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0),
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
      body: memoryCache.body,
    }
  }

  const data = (await fetchFromCoinGecko()) ?? (await fetchFromDexScreener())

  if (data) {
    const body = JSON.stringify(data)
    memoryCache = { body, fetchedAt: now }
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=60, s-maxage=60',
        'x-cache': 'MISS',
      },
      body,
    }
  }

  if (memoryCache) {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=30, s-maxage=30',
        'x-cache': 'STALE',
      },
      body: memoryCache.body,
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
