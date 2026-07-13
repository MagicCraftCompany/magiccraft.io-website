import { afterEach, describe, expect, it, vi } from 'vitest'
import { handler } from '../../netlify/functions/game-stats'

function jsonResponse(body: unknown, status = 200): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    headers: new Headers(),
    json: vi.fn().mockResolvedValue(body),
    text: vi.fn().mockResolvedValue(JSON.stringify(body)),
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
      if (url.includes('lobby-api-prod')) {
        return Promise.resolve(
          jsonResponse({
            lobbyStats: { finished: 42 },
            totalEntryFeesStaked: 9_876.5,
            totalLobbies: 100,
            totalUsers: 25,
            graphs: { ignored: ['large payload is not forwarded'] },
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
    expect(body.allTime.finishedLobbies).toBe(42)
    expect(body.allTime.mcrtInGame).toBeNull()
    expect(body.allTime.mcrtPledged).toBe(9_876.5)
    expect(body.allTime.totalLobbies).toBe(100)
    expect(body.allTime.totalUsers).toBe(25)
    expect(body.allTime.topPlayers).toEqual([
      {
        playerId: 'participant-1-player-one',
        playerName: 'Player One',
        score: 99,
      },
    ])
    expect(body.season.totalPrizeMcrt).toBe(500)
    expect(body.price.usd).toBe(0.00123)
    expect(body.meta.sources.lobby.status).toBe('live')
    expect(body).not.toHaveProperty('graphs')
    expect(body.allTime).not.toHaveProperty('graphs')
    expect(body.allTime.matchesPlayed).not.toBe(15_285)
    expect(body.allTime.mcrtInGame).not.toBe(2_697_880)
  })

  it('leaves values null when both upstream sources are unavailable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')))

    const body = await callHandler()

    expect(body.meta.status).toBe('unavailable')
    expect(body.meta.sources.gameServer.status).toBe('unavailable')
    expect(body.meta.sources.lobby.status).toBe('unavailable')
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

  it('falls back to battle-pass totals when the lobby payload is empty', async () => {
    const fetchMock = vi.fn((input: string | URL | Request) => {
      const url = String(input)
      if (url.includes('coingecko')) {
        return Promise.resolve(jsonResponse({ magiccraft: { usd: 0.0042 } }))
      }
      if (url.includes('lobby-api-prod')) {
        return Promise.resolve(jsonResponse({ lobbyStats: {} }))
      }
      return Promise.resolve(
        jsonResponse({
          name: 'Battle-pass season',
          isActive: true,
          finishedLobbies: 11,
          totalPledges: 222,
          prizeSettings: { totalPrizeAmount: 333 },
        })
      )
    })
    vi.stubGlobal('fetch', fetchMock)

    const body = await callHandler()

    expect(body.meta.status).toBe('partial')
    expect(body.meta.sources.gameServer.status).toBe('live')
    expect(body.meta.sources.lobby.status).toBe('unavailable')
    expect(body.season.name).toBe('Battle-pass season')
    expect(body.season.totalPrizeMcrt).toBe(333)
    expect(body.allTime.finishedLobbies).toBe(11)
    expect(body.allTime.mcrtPledged).toBe(222)
    expect(body.allTime).not.toHaveProperty('totalLobbies')
    expect(body.allTime).not.toHaveProperty('totalUsers')
  })

  it('keeps battle-pass data when the public lobby request fails', async () => {
    const fetchMock = vi.fn((input: string | URL | Request) => {
      const url = String(input)
      if (url.includes('coingecko')) {
        return Promise.resolve(jsonResponse({ magiccraft: { usd: 0.0042 } }))
      }
      if (url.includes('lobby-api-prod')) {
        return Promise.reject(new Error('lobby unavailable'))
      }
      return Promise.resolve(
        jsonResponse({
          name: 'Preserved season',
          finishedLobbies: 12,
          totalPledges: 345,
        })
      )
    })
    vi.stubGlobal('fetch', fetchMock)

    const body = await callHandler()

    expect(body.meta.status).toBe('partial')
    expect(body.meta.sources.gameServer.status).toBe('live')
    expect(body.meta.sources.lobby.status).toBe('unavailable')
    expect(body.season.name).toBe('Preserved season')
    expect(body.allTime.finishedLobbies).toBe(12)
    expect(body.allTime.mcrtPledged).toBe(345)
  })
})
