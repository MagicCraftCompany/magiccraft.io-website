export type GameServerRegion = 'europe' | 'asia' | 'america'

export type GameServerTarget = {
  base: string
  region: GameServerRegion | 'custom'
}

const REGIONS: GameServerRegion[] = ['europe', 'asia', 'america']

const REGION_ENV_NAMES: Record<GameServerRegion, string> = {
  europe: 'GAMESERVER_API_URL_EUROPE',
  asia: 'GAMESERVER_API_URL_ASIA',
  america: 'GAMESERVER_API_URL_AMERICA',
}

export class GameServerConfigurationError extends Error {
  code: 'gameserver_not_configured' | 'invalid_gameserver_url'

  constructor(code: 'gameserver_not_configured' | 'invalid_gameserver_url') {
    super(code)
    this.name = 'GameServerConfigurationError'
    this.code = code
  }
}

function validatedHttpsBase(candidate: string | undefined) {
  const value = candidate?.trim()
  if (!value) return null

  try {
    const parsed = new URL(value)
    if (
      parsed.protocol !== 'https:' ||
      parsed.username ||
      parsed.password ||
      parsed.search ||
      parsed.hash ||
      parsed.port === '8903'
    ) {
      throw new Error('unsupported game-server URL')
    }
    return value.replace(/\/$/, '')
  } catch {
    throw new GameServerConfigurationError('invalid_gameserver_url')
  }
}

function regionalOverride(region: GameServerRegion) {
  return validatedHttpsBase(process.env[REGION_ENV_NAMES[region]])
}

function globalOverride() {
  return validatedHttpsBase(process.env.GAMESERVER_API_URL)
}

export function resolveGameServerBase(region: GameServerRegion) {
  const base = regionalOverride(region) || globalOverride()
  if (!base) {
    throw new GameServerConfigurationError('gameserver_not_configured')
  }
  return base
}

export function configuredGameServerTargets(
  preferredRegion: GameServerRegion
): GameServerTarget[] {
  const global = globalOverride()
  const configuredRegions = REGIONS.filter((region) =>
    Boolean(process.env[REGION_ENV_NAMES[region]]?.trim())
  )

  if (configuredRegions.length === 0) {
    if (!global) {
      throw new GameServerConfigurationError('gameserver_not_configured')
    }
    return [{ base: global, region: 'custom' }]
  }

  const orderedRegions = [
    preferredRegion,
    ...REGIONS.filter((region) => region !== preferredRegion),
  ]

  return orderedRegions.flatMap((region) => {
    const base = regionalOverride(region) || global
    return base ? [{ base, region }] : []
  })
}
