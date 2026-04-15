/// <reference types="node" />
import type { Handler } from '@netlify/functions'

type Region = 'europe' | 'asia' | 'america'

const REGION_IPS: Record<Region, string> = {
  europe: '5.9.111.150',
  asia: '51.79.230.134',
  america: '51.222.44.25',
}

const TIMEOUT_MS = 6000

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => reject(new Error('timeout')), ms)
    promise
      .then((v) => { clearTimeout(id); resolve(v) })
      .catch((e) => { clearTimeout(id); reject(e) })
  })
}

async function fetchBattlepass(region: Region, port: string, apiKey: string) {
  const base = `http://${REGION_IPS[region]}:${port}`
  const res = await withTimeout(
    fetch(`${base}/battlepass/active`, {
      headers: { 'X-API-Key': apiKey, 'Content-Type': 'application/json' },
    }),
    TIMEOUT_MS,
  )
  if (!res.ok) throw new Error(`battlepass ${res.status}`)
  return res.json()
}

async function fetchMcrtPrice() {
  const res = await withTimeout(
    fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=magiccraft&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true',
      { headers: { accept: 'application/json' } },
    ),
    TIMEOUT_MS,
  )
  if (!res.ok) throw new Error(`coingecko ${res.status}`)
  const json = await res.json()
  return json?.magiccraft as {
    usd: number
    usd_24h_change?: number
    usd_market_cap?: number
    usd_24h_vol?: number
  } | undefined
}

export const handler: Handler = async (event) => {
  const region = ((event.queryStringParameters?.region as Region) || 'europe')
  const port = process.env.GAMESERVER_API_PORT || '8913'
  const apiKey = process.env.GAMESERVER_API_KEY || ''

  const [bpResult, priceResult] = await Promise.allSettled([
    fetchBattlepass(region, port, apiKey),
    fetchMcrtPrice(),
  ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bp: any = bpResult.status === 'fulfilled' ? bpResult.value : null
  const price = priceResult.status === 'fulfilled' ? priceResult.value : null

  // Derive stats from battlepass data
  const topParticipants: Array<{ playerId: string; playerName: string; score: number }> =
    (bp?.topParticipants || []).map((p: { playerId: string; playerName: string; score?: number; totalScore?: number }) => ({
      playerId: p.playerId,
      playerName: p.playerName,
      score: p.score ?? p.totalScore ?? 0,
    }))

  const winners: Array<{ playerName: string; finalRank: number; prizeAmount: number }> =
    (bp?.winners || []).map((w: { playerName: string; finalRank: number; prizeAmount: number }) => ({
      playerName: w.playerName,
      finalRank: w.finalRank,
      prizeAmount: w.prizeAmount,
    }))

  const totalPrizesMcrt: number = bp?.prizeSettings?.totalPrizeAmount ?? 0
  const seasonName: string = bp?.name ?? 'Current Season'
  const seasonActive: boolean = bp?.isActive ?? false
  const daysRemaining: number = bp?.daysRemaining ?? 0

  // Known all-time totals from historical data (updated with last real numbers)
  // These are the last-known values; live data adds on top
  const allTimeMatchesBase = 14299 + 986  // finishedLobbies + failedLobbies
  const allTimeMcrtBase = 2697880  // totalPledges historical base

  const stats = {
    ts: new Date().toISOString(),
    season: {
      name: seasonName,
      active: seasonActive,
      daysRemaining,
      totalPrizeMcrt: totalPrizesMcrt,
      prizesDistributed: bp?.prizesDistributed ?? false,
    },
    allTime: {
      matchesPlayed: allTimeMatchesBase,
      mcrtInGame: allTimeMcrtBase,
      topPlayers: topParticipants.slice(0, 5),
      recentWinners: winners.slice(0, 3),
    },
    price: price
      ? {
          usd: price.usd,
          change24h: price.usd_24h_change ?? null,
          marketCap: price.usd_market_cap ?? null,
          volume24h: price.usd_24h_vol ?? null,
        }
      : null,
    live: {
      serverOnline: bp !== null,
    },
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=120',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(stats),
  }
}

export default {}
