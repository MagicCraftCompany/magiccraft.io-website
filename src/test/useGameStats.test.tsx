import { act, cleanup, renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  deriveGameStatsStatus,
  GAME_STATS_STALE_AFTER_MS,
  useGameStats,
  type GameStatsData,
} from '../lib/useGameStats'

function response(body: unknown): Response {
  return {
    ok: true,
    status: 200,
    json: vi.fn().mockResolvedValue(body),
  } as unknown as Response
}

function gameStats(overrides: Partial<GameStatsData> = {}): GameStatsData {
  return {
    ts: new Date().toISOString(),
    meta: {
      status: 'live',
      sources: {
        gameServer: {
          status: 'live',
          checkedAt: new Date().toISOString(),
          httpStatus: 200,
          error: null,
        },
        market: {
          status: 'live',
          checkedAt: new Date().toISOString(),
          httpStatus: 200,
          error: null,
        },
      },
    },
    season: {
      name: 'Season',
      active: true,
      daysRemaining: 2,
      totalPrizeMcrt: 100,
      prizesDistributed: false,
    },
    allTime: {
      matchesPlayed: 12,
      finishedLobbies: 10,
      mcrtInGame: 345,
      mcrtPledged: 300,
      topPlayers: [],
      recentWinners: [],
    },
    price: {
      usd: 0.001,
      change24h: 1,
      marketCap: null,
      volume24h: null,
    },
    live: { serverOnline: true },
    ...overrides,
  }
}

describe('useGameStats', () => {
  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('reports a current successful response as live', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response(gameStats())))
    const { result } = renderHook(() => useGameStats(999_999))

    await waitFor(() => expect(result.current.status).toBe('live'))

    expect(result.current.data?.allTime.matchesPlayed).toBe(12)
    expect(result.current.error).toBeNull()
  })

  it('reports unavailable when the first request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))
    const { result } = renderHook(() => useGameStats(999_999))

    await waitFor(() => expect(result.current.status).toBe('unavailable'))

    expect(result.current.data).toBeNull()
    expect(result.current.error).toBe('offline')
  })

  it('retains a previous verified response as stale after refresh failure', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(response(gameStats()))
      .mockRejectedValueOnce(new Error('refresh failed'))
    vi.stubGlobal('fetch', fetchMock)
    const { result } = renderHook(() => useGameStats(999_999))

    await waitFor(() => expect(result.current.status).toBe('live'))
    await act(async () => {
      await result.current.refresh()
    })

    expect(result.current.status).toBe('stale')
    expect(result.current.data?.allTime.matchesPlayed).toBe(12)
    expect(result.current.error).toBe('refresh failed')
  })

  it('recognizes an old cached response as stale', () => {
    const now = Date.now()
    const old = gameStats({
      ts: new Date(now - GAME_STATS_STALE_AFTER_MS - 1).toISOString(),
    })

    expect(deriveGameStatsStatus(old, now)).toBe('stale')
  })
})
