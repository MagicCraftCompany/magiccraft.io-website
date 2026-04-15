import { useEffect, useState } from 'react'

export type GameStatsData = {
  ts: string
  season: {
    name: string
    active: boolean
    daysRemaining: number
    totalPrizeMcrt: number
    prizesDistributed: boolean
  }
  allTime: {
    matchesPlayed: number
    mcrtInGame: number
    topPlayers: Array<{ playerId: string; playerName: string; score: number }>
    recentWinners: Array<{ playerName: string; finalRank: number; prizeAmount: number }>
  }
  price: {
    usd: number
    change24h: number | null
    marketCap: number | null
    volume24h: number | null
  } | null
  live: {
    serverOnline: boolean
  }
}

export function useGameStats(refreshMs = 60_000) {
  const [data, setData] = useState<GameStatsData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchStats() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/game-stats', { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      setData(json as GameStatsData)
    } catch (e: unknown) {
      setError(String(e instanceof Error ? e.message : e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
    const id = setInterval(fetchStats, refreshMs)
    return () => clearInterval(id)
  }, [refreshMs])

  return { data, loading, error, refresh: fetchStats }
}
