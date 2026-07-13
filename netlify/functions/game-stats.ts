/// <reference types="node" />

type HandlerEvent = {
  queryStringParameters?: Record<string, string | undefined> | null
}

type HandlerResponse = {
  statusCode: number
  headers: Record<string, string>
  body: string
}

type Region = 'europe' | 'asia' | 'america'
type SourceStatus = 'live' | 'offline' | 'unavailable'
type ResponseStatus = 'live' | 'partial' | 'offline' | 'unavailable'

type SourceState = {
  status: SourceStatus
  checkedAt: string
  httpStatus: number | null
  error: string | null
}

type JsonRecord = Record<string, unknown>

type LobbyStats = {
  finishedLobbies: number
  totalEntryFeesStaked: number
  totalLobbies: number | null
  totalUsers: number | null
}

const REGION_IPS: Record<Region, string> = {
  europe: '5.9.111.150',
  asia: '51.79.230.134',
  america: '51.222.44.25',
}

const TIMEOUT_MS = 6000
const LOBBY_STATS_URL = 'https://lobby-api-prod.magiccraft.io/stats'
const MAX_LOBBY_RESPONSE_BYTES = 600_000

class UpstreamError extends Error {
  status: number | null

  constructor(message: string, status: number | null = null) {
    super(message)
    this.name = 'UpstreamError'
    this.status = status
  }
}

function configuredTimeout(name: string) {
  const configured = Number(process.env[name])
  if (!Number.isFinite(configured)) return TIMEOUT_MS
  return Math.max(250, Math.min(10_000, configured))
}

async function fetchWithTimeout(
  input: string,
  init: RequestInit,
  ms: number
): Promise<Response> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), ms)
  try {
    return await fetch(input, { ...init, signal: controller.signal })
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new UpstreamError('timeout')
    }
    throw error
  } finally {
    clearTimeout(timeout)
  }
}

function gameServerBase(region: Region, port: string) {
  const override = process.env.GAMESERVER_API_URL?.trim()
  if (!override) return `http://${REGION_IPS[region]}:${port}`

  try {
    const parsed = new URL(override)
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      throw new Error('unsupported protocol')
    }
    return override.replace(/\/$/, '')
  } catch {
    throw new UpstreamError('invalid_gameserver_url')
  }
}

async function fetchBattlepass(
  region: Region,
  port: string,
  apiKey: string
): Promise<JsonRecord> {
  const base = gameServerBase(region, port)
  const response = await fetchWithTimeout(
    `${base}/battlepass/active`,
    {
      headers: { 'X-API-Key': apiKey, 'Content-Type': 'application/json' },
    },
    configuredTimeout('GAMESERVER_API_TIMEOUT_MS')
  )

  if (!response.ok) {
    throw new UpstreamError('game_server_http_error', response.status)
  }

  const payload: unknown = await response.json()
  if (!isRecord(payload)) {
    throw new UpstreamError('invalid_game_server_response', response.status)
  }
  return payload
}

async function fetchLobbyStats(): Promise<LobbyStats> {
  const controller = new AbortController()
  const timeout = setTimeout(
    () => controller.abort(),
    configuredTimeout('LOBBY_API_TIMEOUT_MS')
  )

  try {
    const response = await fetch(
      process.env.LOBBY_STATS_URL || LOBBY_STATS_URL,
      {
        signal: controller.signal,
        headers: { accept: 'application/json' },
      }
    )

    if (!response.ok) {
      throw new UpstreamError('lobby_http_error', response.status)
    }

    const contentLength = Number(response.headers.get('content-length'))
    if (
      Number.isFinite(contentLength) &&
      contentLength > MAX_LOBBY_RESPONSE_BYTES
    ) {
      throw new UpstreamError('lobby_response_too_large', response.status)
    }

    const raw = await response.text()
    if (raw.length > MAX_LOBBY_RESPONSE_BYTES) {
      throw new UpstreamError('lobby_response_too_large', response.status)
    }

    let payload: unknown
    try {
      payload = JSON.parse(raw)
    } catch {
      throw new UpstreamError('invalid_lobby_response', response.status)
    }

    if (!isRecord(payload) || !isRecord(payload.lobbyStats)) {
      throw new UpstreamError('invalid_lobby_response', response.status)
    }

    const finishedLobbies = nonNegativeNumberOrNull(payload.lobbyStats.finished)
    const totalEntryFeesStaked = nonNegativeNumberOrNull(
      payload.totalEntryFeesStaked
    )
    if (finishedLobbies === null || totalEntryFeesStaked === null) {
      throw new UpstreamError('invalid_lobby_response', response.status)
    }

    return {
      finishedLobbies,
      totalEntryFeesStaked,
      totalLobbies: nonNegativeNumberOrNull(payload.totalLobbies),
      totalUsers: nonNegativeNumberOrNull(payload.totalUsers),
    }
  } catch (error) {
    if (error instanceof UpstreamError) throw error
    if (error instanceof Error && error.name === 'AbortError') {
      throw new UpstreamError('timeout')
    }
    throw error
  } finally {
    clearTimeout(timeout)
  }
}

async function fetchMcrtPrice(): Promise<{
  usd: number
  usd_24h_change?: number
  usd_market_cap?: number
  usd_24h_vol?: number
}> {
  const response = await fetchWithTimeout(
    'https://api.coingecko.com/api/v3/simple/price?ids=magiccraft&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true',
    { headers: { accept: 'application/json' } },
    configuredTimeout('MARKET_API_TIMEOUT_MS')
  )

  if (!response.ok) {
    throw new UpstreamError('market_http_error', response.status)
  }

  const payload: unknown = await response.json()
  if (!isRecord(payload) || !isRecord(payload.magiccraft)) {
    throw new UpstreamError('invalid_market_response', response.status)
  }

  const price = payload.magiccraft
  const usd = numberOrNull(price.usd)
  if (usd === null) {
    throw new UpstreamError('invalid_market_response', response.status)
  }

  return {
    usd,
    ...(numberOrNull(price.usd_24h_change) !== null
      ? { usd_24h_change: numberOrNull(price.usd_24h_change)! }
      : {}),
    ...(numberOrNull(price.usd_market_cap) !== null
      ? { usd_market_cap: numberOrNull(price.usd_market_cap)! }
      : {}),
    ...(numberOrNull(price.usd_24h_vol) !== null
      ? { usd_24h_vol: numberOrNull(price.usd_24h_vol)! }
      : {}),
  }
}

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function numberOrNull(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

function nonNegativeNumberOrNull(value: unknown): number | null {
  const number = numberOrNull(value)
  return number !== null && number >= 0 ? number : null
}

function booleanOrNull(value: unknown): boolean | null {
  return typeof value === 'boolean' ? value : null
}

function stringOrNull(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function publicErrorCode(error: unknown): string {
  if (error instanceof UpstreamError) {
    if (error.message === 'timeout') return 'timeout'
    if (error.status !== null) return `http_${error.status}`
    return error.message
  }
  return 'request_failed'
}

function sourceFromFailure(error: unknown, checkedAt: string): SourceState {
  const httpStatus = error instanceof UpstreamError ? error.status : null
  return {
    status:
      httpStatus !== null && httpStatus >= 500 ? 'offline' : 'unavailable',
    checkedAt,
    httpStatus,
    error: publicErrorCode(error),
  }
}

function sourceLive(checkedAt: string): SourceState {
  return {
    status: 'live',
    checkedAt,
    httpStatus: 200,
    error: null,
  }
}

function responseStatus(
  gameServer: SourceState,
  lobby: SourceState,
  market: SourceState
): ResponseStatus {
  if (
    gameServer.status === 'live' &&
    lobby.status === 'live' &&
    market.status === 'live'
  ) {
    return 'live'
  }
  if (
    gameServer.status === 'live' ||
    lobby.status === 'live' ||
    market.status === 'live'
  ) {
    return 'partial'
  }
  if (gameServer.status === 'offline' || lobby.status === 'offline') {
    return 'offline'
  }
  return 'unavailable'
}

function participantRows(payload: JsonRecord | null) {
  if (!payload || !Array.isArray(payload.topParticipants)) return []
  return payload.topParticipants.flatMap((value, index) => {
    if (!isRecord(value)) return []
    const playerName = stringOrNull(value.playerName)
    const currentRank = numberOrNull(value.currentRank)
    const score =
      numberOrNull(value.currentScore) ??
      numberOrNull(value.score) ??
      numberOrNull(value.totalScore)
    if (!playerName || score === null) return []
    const normalizedName = playerName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const playerId =
      stringOrNull(value.playerId) ??
      `participant-${currentRank ?? index + 1}-${normalizedName}`
    return [{ playerId, playerName, score }]
  })
}

function winnerRows(payload: JsonRecord | null) {
  if (!payload || !Array.isArray(payload.winners)) return []
  return payload.winners.flatMap((value) => {
    if (!isRecord(value)) return []
    const playerName = stringOrNull(value.playerName)
    const finalRank = numberOrNull(value.finalRank)
    const prizeAmount = numberOrNull(value.prizeAmount)
    if (!playerName || finalRank === null || prizeAmount === null) return []
    return [{ playerName, finalRank, prizeAmount }]
  })
}

export const handler = async (
  event: HandlerEvent
): Promise<HandlerResponse> => {
  const regionCandidate = event.queryStringParameters?.region
  const region: Region =
    regionCandidate === 'asia' || regionCandidate === 'america'
      ? regionCandidate
      : 'europe'
  const port = process.env.GAMESERVER_API_PORT || '8903'
  const apiKey = process.env.GAMESERVER_API_KEY || ''
  const checkedAt = new Date().toISOString()

  const [battlepassResult, lobbyResult, priceResult] = await Promise.allSettled(
    [fetchBattlepass(region, port, apiKey), fetchLobbyStats(), fetchMcrtPrice()]
  )

  const battlepass =
    battlepassResult.status === 'fulfilled' ? battlepassResult.value : null
  const lobby = lobbyResult.status === 'fulfilled' ? lobbyResult.value : null
  const price = priceResult.status === 'fulfilled' ? priceResult.value : null
  const gameServerSource =
    battlepassResult.status === 'fulfilled'
      ? sourceLive(checkedAt)
      : sourceFromFailure(battlepassResult.reason, checkedAt)
  const lobbySource =
    lobbyResult.status === 'fulfilled'
      ? sourceLive(checkedAt)
      : sourceFromFailure(lobbyResult.reason, checkedAt)
  const marketSource =
    priceResult.status === 'fulfilled'
      ? sourceLive(checkedAt)
      : sourceFromFailure(priceResult.reason, checkedAt)

  const prizeSettings =
    battlepass && isRecord(battlepass.prizeSettings)
      ? battlepass.prizeSettings
      : null
  const topParticipants = participantRows(battlepass)
  const winners = winnerRows(battlepass)

  const stats = {
    ts: checkedAt,
    meta: {
      status: responseStatus(gameServerSource, lobbySource, marketSource),
      sources: {
        gameServer: gameServerSource,
        lobby: lobbySource,
        market: marketSource,
      },
    },
    season: {
      name: battlepass ? stringOrNull(battlepass.name) : null,
      active: battlepass ? booleanOrNull(battlepass.isActive) : null,
      daysRemaining: battlepass ? numberOrNull(battlepass.daysRemaining) : null,
      totalPrizeMcrt: prizeSettings
        ? numberOrNull(prizeSettings.totalPrizeAmount)
        : null,
      prizesDistributed: battlepass
        ? booleanOrNull(battlepass.prizesDistributed)
        : null,
    },
    allTime: {
      matchesPlayed: battlepass ? numberOrNull(battlepass.matchesPlayed) : null,
      finishedLobbies:
        lobby?.finishedLobbies ??
        (battlepass ? numberOrNull(battlepass.finishedLobbies) : null),
      mcrtInGame: battlepass ? numberOrNull(battlepass.mcrtInGame) : null,
      mcrtPledged:
        lobby?.totalEntryFeesStaked ??
        (battlepass ? numberOrNull(battlepass.totalPledges) : null),
      ...(lobby?.totalLobbies !== null && lobby?.totalLobbies !== undefined
        ? { totalLobbies: lobby.totalLobbies }
        : {}),
      ...(lobby?.totalUsers !== null && lobby?.totalUsers !== undefined
        ? { totalUsers: lobby.totalUsers }
        : {}),
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
      serverOnline:
        gameServerSource.status === 'live'
          ? true
          : gameServerSource.status === 'offline'
            ? false
            : null,
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
