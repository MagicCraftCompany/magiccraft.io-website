import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import {
  configuredGameServerTargets,
  GameServerConfigurationError,
  resolveGameServerBase,
} from '../../netlify/lib/game-server'

const ENV_NAMES = [
  'GAMESERVER_API_URL',
  'GAMESERVER_API_URL_EUROPE',
  'GAMESERVER_API_URL_ASIA',
  'GAMESERVER_API_URL_AMERICA',
] as const

const originalValues = Object.fromEntries(
  ENV_NAMES.map((name) => [name, process.env[name]])
) as Record<(typeof ENV_NAMES)[number], string | undefined>

function clearGameServerEnvironment() {
  ENV_NAMES.forEach((name) => delete process.env[name])
}

describe('game-server HTTPS configuration', () => {
  beforeEach(clearGameServerEnvironment)

  afterEach(() => {
    ENV_NAMES.forEach((name) => {
      const original = originalValues[name]
      if (original === undefined) delete process.env[name]
      else process.env[name] = original
    })
  })

  it('prefers the selected regional endpoint and uses the global HTTPS fallback', () => {
    process.env.GAMESERVER_API_URL = 'https://games.magiccraft.example'
    process.env.GAMESERVER_API_URL_ASIA =
      'https://asia.games.magiccraft.example/'

    expect(resolveGameServerBase('asia')).toBe(
      'https://asia.games.magiccraft.example'
    )
    expect(resolveGameServerBase('europe')).toBe(
      'https://games.magiccraft.example'
    )
  })

  it('orders configured regional health targets by the requested region', () => {
    process.env.GAMESERVER_API_URL_EUROPE =
      'https://europe.games.magiccraft.example'
    process.env.GAMESERVER_API_URL_ASIA =
      'https://asia.games.magiccraft.example'
    process.env.GAMESERVER_API_URL_AMERICA =
      'https://america.games.magiccraft.example'

    expect(configuredGameServerTargets('america')).toEqual([
      {
        base: 'https://america.games.magiccraft.example',
        region: 'america',
      },
      {
        base: 'https://europe.games.magiccraft.example',
        region: 'europe',
      },
      {
        base: 'https://asia.games.magiccraft.example',
        region: 'asia',
      },
    ])
  })

  it('uses one custom target when only the global endpoint is configured', () => {
    process.env.GAMESERVER_API_URL = 'https://games.magiccraft.example'

    expect(configuredGameServerTargets('europe')).toEqual([
      { base: 'https://games.magiccraft.example', region: 'custom' },
    ])
  })

  it('fails closed when no endpoint is configured', () => {
    expect(() => resolveGameServerBase('europe')).toThrowError(
      new GameServerConfigurationError('gameserver_not_configured')
    )
  })

  it.each([
    'http://games.magiccraft.example',
    'https://games.magiccraft.example:8903',
    'https://user:password@games.magiccraft.example',
    'https://games.magiccraft.example?target=other',
  ])('rejects an unsafe endpoint: %s', (endpoint) => {
    process.env.GAMESERVER_API_URL = endpoint

    expect(() => resolveGameServerBase('europe')).toThrowError(
      new GameServerConfigurationError('invalid_gameserver_url')
    )
  })
})
