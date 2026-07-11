import { useCallback, useEffect, useRef, useState } from 'react'

export type GameStatsSourceStatus = 'live' | 'offline' | 'unavailable'
export type GameStatsResponseStatus =
  | 'live'
  | 'partial'
  | 'offline'
  | 'unavailable'
export type GameStatsStatus = 'loading' | GameStatsResponseStatus | 'stale'

export type GameStatsSource = {
  status: GameStatsSourceStatus
  checkedAt: string
  httpStatus: number | null
  error: string | null
}

export type GameStatsData = {
  ts: string
  meta?: {
    status: GameStatsResponseStatus
    sources: {
      gameServer: GameStatsSource
      market: GameStatsSource
    }
  }
  season: {
    name: string | null
    active: boolean | null
    daysRemaining: number | null
    totalPrizeMcrt: number | null
    prizesDistributed: boolean | null
  }
  allTime: {
    matchesPlayed: number | null
    finishedLobbies: number | null
    mcrtInGame: number | null
    mcrtPledged: number | null
    topPlayers: Array<{ playerId: string; playerName: string; score: number }>
    recentWinners: Array<{
      playerName: string
      finalRank: number
      prizeAmount: number
    }>
  }
  price: {
    usd: number
    change24h: number | null
    marketCap: number | null
    volume24h: number | null
  } | null
  live: {
    serverOnline: boolean | null
  }
}

export const GAME_STATS_STALE_AFTER_MS = 2 * 60_000

function isResponseStatus(value: unknown): value is GameStatsResponseStatus {
  return (
    value === 'live' ||
    value === 'partial' ||
    value === 'offline' ||
    value === 'unavailable'
  )
}

export function deriveGameStatsStatus(
  data: GameStatsData,
  now = Date.now()
): GameStatsStatus {
  const generatedAt = Date.parse(data.ts)
  if (
    Number.isFinite(generatedAt) &&
    now - generatedAt > GAME_STATS_STALE_AFTER_MS
  ) {
    return 'stale'
  }

  if (isResponseStatus(data.meta?.status)) return data.meta.status

  // Backward-compatible inference for responses created before source metadata.
  if (data.live.serverOnline === true) {
    return data.price ? 'live' : 'partial'
  }
  if (data.live.serverOnline === false) {
    return data.price ? 'partial' : 'offline'
  }
  return data.price ? 'partial' : 'unavailable'
}

export function useGameStats(refreshMs = 60_000) {
  const [data, setData] = useState<GameStatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<GameStatsStatus>('loading')
  const dataRef = useRef<GameStatsData | null>(null)
  const inFlightRef = useRef(false)

  const fetchStats = useCallback(async () => {
    if (inFlightRef.current) return
    inFlightRef.current = true
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/game-stats', { cache: 'no-store' })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const json = (await response.json()) as GameStatsData
      dataRef.current = json
      setData(json)
      setStatus(deriveGameStatsStatus(json))
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : String(caught)
      setError(message)
      setStatus(dataRef.current ? 'stale' : 'unavailable')
    } finally {
      setLoading(false)
      inFlightRef.current = false
    }
  }, [])

  useEffect(() => {
    void fetchStats()
    const id = window.setInterval(() => void fetchStats(), refreshMs)
    return () => window.clearInterval(id)
  }, [fetchStats, refreshMs])

  return {
    data,
    loading,
    error,
    status,
    refresh: fetchStats,
  }
}
