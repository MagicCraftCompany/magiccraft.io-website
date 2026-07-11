import { afterEach, describe, expect, it, vi } from 'vitest'
import { handler } from '../../netlify/functions/game-stats'

function jsonResponse(body: unknown, status = 200): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: vi.fn().mockResolvedValue(body),
  } as unknown as Response
}

async function callHandler() {
  const response = await handler({ queryStringParameters: {} })
  return JSON.parse(response.body)
}

describe('game-stats function trust states', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns only values present in current upstream responses', async () => {
    const fetchMock = vi.fn((input: string | URL | Request) => {
      const url = String(input)
      if (url.includes('coingecko')) {
        return Promise.resolve(
          jsonResponse({
            magiccraft: {
              usd: 0.00123,
              usd_24h_change: 2.5,
              usd_market_cap: 123_000,
              usd_24h_vol: 4_500,
            },
          })
        )
      }
      return Promise.resolve(
        jsonResponse({
          name: 'Verified Season',
          isActive: true,
          daysRemaining: 4,
          finishedLobbies: 10,
          failedLobbies: 2,
          totalPledges: 1_234,
          prizeSettings: { totalPrizeAmount: 500 },
          prizesDistributed: false,
          topParticipants: [
            { playerName: 'Player One', currentScore: 99, currentRank: 1 },
          ],
          winners: [{ playerName: 'Winner', finalRank: 1, prizeAmount: 250 }],
        })
      )
    })
    vi.stubGlobal('fetch', fetchMock)

    const body = await callHandler()

    expect(body.meta.status).toBe('live')
    expect(body.allTime.matchesPlayed).toBeNull()
    expect(body.allTime.finishedLobbies).toBe(10)
    expect(body.allTime.mcrtInGame).toBeNull()
    expect(body.allTime.mcrtPledged).toBe(1_234)
    expect(body.allTime.topPlayers).toEqual([
      {
        playerId: 'participant-1-player-one',
        playerName: 'Player One',
        score: 99,
      },
    ])
    expect(body.season.totalPrizeMcrt).toBe(500)
    expect(body.price.usd).toBe(0.00123)
    expect(body.allTime.matchesPlayed).not.toBe(15_285)
    expect(body.allTime.mcrtInGame).not.toBe(2_697_880)
  })

  it('leaves values null when both upstream sources are unavailable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')))

    const body = await callHandler()

    expect(body.meta.status).toBe('unavailable')
    expect(body.meta.sources.gameServer.status).toBe('unavailable')
    expect(body.meta.sources.market.status).toBe('unavailable')
    expect(body.live.serverOnline).toBeNull()
    expect(body.allTime.matchesPlayed).toBeNull()
    expect(body.allTime.finishedLobbies).toBeNull()
    expect(body.allTime.mcrtInGame).toBeNull()
    expect(body.allTime.mcrtPledged).toBeNull()
    expect(body.season.totalPrizeMcrt).toBeNull()
    expect(body.price).toBeNull()
  })

  it('marks an explicit game-server 5xx response as offline', async () => {
    const fetchMock = vi.fn((input: string | URL | Request) => {
      const url = String(input)
      return Promise.resolve(
        jsonResponse({}, url.includes('coingecko') ? 429 : 503)
      )
    })
    vi.stubGlobal('fetch', fetchMock)

    const body = await callHandler()

    expect(body.meta.status).toBe('offline')
    expect(body.meta.sources.gameServer.status).toBe('offline')
    expect(body.meta.sources.market.status).toBe('unavailable')
    expect(body.live.serverOnline).toBe(false)
  })

  it('keeps live market data while marking missing game data partial', async () => {
    const fetchMock = vi.fn((input: string | URL | Request) => {
      const url = String(input)
      if (url.includes('coingecko')) {
        return Promise.resolve(jsonResponse({ magiccraft: { usd: 0.0042 } }))
      }
      return Promise.reject(new Error('game server unreachable'))
    })
    vi.stubGlobal('fetch', fetchMock)

    const body = await callHandler()

    expect(body.meta.status).toBe('partial')
    expect(body.meta.sources.gameServer.status).toBe('unavailable')
    expect(body.meta.sources.market.status).toBe('live')
    expect(body.live.serverOnline).toBeNull()
    expect(body.allTime.matchesPlayed).toBeNull()
    expect(body.price.usd).toBe(0.0042)
  })
})
