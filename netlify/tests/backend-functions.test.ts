import { afterEach, describe, expect, it, vi } from 'vitest'
import { handler as battlepassHandler } from '../functions/battlepass'
import { handler as mentionsHandler } from '../functions/mcrt-mentions'
import { handler as statusHandler } from '../functions/status'
import { handler as grantsHandler } from '../functions/submit-grants'

function mockResponse(
  body: unknown,
  status = 200,
  responseHeaders: Record<string, string> = {}
): Response {
  const text = typeof body === 'string' ? body : JSON.stringify(body)
  return {
    ok: status >= 200 && status < 300,
    status,
    headers: new Headers(responseHeaders),
    text: vi.fn().mockResolvedValue(text),
    json: vi.fn().mockResolvedValue(typeof body === 'string' ? {} : body),
  } as unknown as Response
}

function grantBody(overrides: Record<string, string> = {}) {
  return new URLSearchParams({
    teamName: 'Example Team',
    email: 'team@example.com',
    projectName: 'Example Project',
    url: 'https://example.com/demo',
    category: 'game',
    amountUsd: '1000',
    amountMcrt: '',
    mcrtPlan: 'Use MCRT for optional rewards.',
    wallet: '',
    description: 'A working example build.',
    links: 'https://example.com/repo',
    hasBuild: 'on',
    ...overrides,
  }).toString()
}

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
})

describe('submit-grants fail-closed intake', () => {
  it('rejects invalid input without calling the intake service', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    const response = await grantsHandler(
      { httpMethod: 'POST', body: grantBody({ email: 'invalid' }) } as never,
      {} as never
    )

    expect(response?.statusCode).toBe(400)
    expect(JSON.parse(response?.body || '{}')).toMatchObject({
      error: 'invalid_submission',
      fields: ['email'],
    })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('does not redirect when Netlify Forms rejects the submission', async () => {
    vi.stubEnv('URL', 'https://example.netlify.app')
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse('', 503)))
    vi.spyOn(console, 'error').mockImplementation(() => undefined)

    const response = await grantsHandler(
      { httpMethod: 'POST', body: grantBody() } as never,
      {} as never
    )

    expect(response?.statusCode).toBe(502)
    expect(response?.headers?.Location).toBeUndefined()
    expect(JSON.parse(response?.body || '{}')).toMatchObject({
      error: 'submission_not_accepted',
      code: 'submission_service_rejected',
    })
  })

  it('redirects only after the form intake accepts the request', async () => {
    vi.stubEnv('URL', 'https://example.netlify.app')
    const fetchMock = vi.fn().mockResolvedValue(mockResponse('', 200))
    vi.stubGlobal('fetch', fetchMock)

    const response = await grantsHandler(
      { httpMethod: 'POST', body: grantBody() } as never,
      {} as never
    )

    expect(response?.statusCode).toBe(303)
    expect(response?.headers?.Location).toBe('/grants/success?accepted=1')
    expect(fetchMock).toHaveBeenCalledWith(
      'https://example.netlify.app/',
      expect.objectContaining({
        method: 'POST',
        redirect: 'manual',
        body: expect.stringContaining('form-name=grants'),
      })
    )
  })
})

describe('battle-pass proxy', () => {
  it('honors the configured game-server base URL', async () => {
    vi.stubEnv('GAMESERVER_API_URL', 'https://game.example/api/')
    vi.stubEnv('GAMESERVER_API_KEY', 'test-key')
    const fetchMock = vi
      .fn()
      .mockResolvedValue(mockResponse({ name: 'Current season' }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await battlepassHandler(
      { httpMethod: 'GET', queryStringParameters: { region: 'asia' } } as never,
      {} as never
    )

    expect(response?.statusCode).toBe(200)
    expect(fetchMock).toHaveBeenCalledWith(
      'https://game.example/api/battlepass/active',
      expect.objectContaining({
        headers: expect.objectContaining({ 'X-API-Key': 'test-key' }),
        signal: expect.any(AbortSignal),
      })
    )
  })

  it('returns a bounded public error without leaking a network exception', async () => {
    vi.stubEnv('GAMESERVER_API_URL', 'https://game.example')
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new Error('connect ECONNREFUSED 10.0.0.1'))
    )

    const response = await battlepassHandler(
      { httpMethod: 'GET', queryStringParameters: {} } as never,
      {} as never
    )
    const body = JSON.parse(response?.body || '{}')

    expect(response?.statusCode).toBe(502)
    expect(body).toEqual({
      error: 'Proxy failed',
      code: 'upstream_unreachable',
    })
    expect(response?.body).not.toContain('10.0.0.1')
  })
})

describe('status function source checks', () => {
  it("uses Sanity's versioned query path and current AI product set", async () => {
    vi.stubEnv('GAMESERVER_API_URL', 'https://game.example')
    vi.stubEnv('GAMESERVER_API_KEY', 'test-key')
    vi.stubEnv('VITE_SANITY_PROJECT_ID', 'abc123')
    vi.stubEnv('VITE_SANITY_DATASET', 'production')
    vi.stubEnv('VITE_SANITY_API_VERSION', '2023-05-03')
    const fetchMock = vi.fn().mockResolvedValue(mockResponse({ result: [] }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await statusHandler(
      { queryStringParameters: {} } as never,
      {} as never
    )
    const body = JSON.parse(response?.body || '{}')

    expect(response?.statusCode).toBe(200)
    expect(
      fetchMock.mock.calls.some(([input]) =>
        String(input).includes(
          'abc123.apicdn.sanity.io/v2023-05-03/data/query/production'
        )
      )
    ).toBe(true)
    expect(body.services).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ key: 'sanity', ok: true, status: 200 }),
        expect.objectContaining({ key: 'akyn' }),
        expect.objectContaining({ key: 'magicads' }),
        expect.objectContaining({ key: 'magas7' }),
        expect.objectContaining({ key: 'dragonlist' }),
      ])
    )
    expect(body.services).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ key: 'polybilities' })])
    )
  })
})

describe('MCRT mentions time and truth contract', () => {
  it('returns only real parsed status links from a successful feed', async () => {
    const xml = `
      <rss><channel><item>
        <title><![CDATA[MagicCraft $MCRT update]]></title>
        <link>https://nitter.net/MagicCraftGame/status/1234567890</link>
        <pubDate>Mon, 13 Jul 2026 12:00:00 GMT</pubDate>
      </item></channel></rss>
    `
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse(xml)))

    const response = await mentionsHandler(
      { queryStringParameters: { count: '2' } } as never,
      {} as never
    )
    const body = JSON.parse(response?.body || '{}')

    expect(response?.statusCode).toBe(200)
    expect(body.status).toBe('live')
    expect(body.tweets).toEqual([
      {
        url: 'https://x.com/MagicCraftGame/status/1234567890',
        handle: 'MagicCraftGame',
        text: 'MagicCraft $MCRT update',
      },
    ])
  })

  it('fails honestly without fabricated backup tweets', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))

    const response = await mentionsHandler(
      { queryStringParameters: {} } as never,
      {} as never
    )
    const body = JSON.parse(response?.body || '{}')

    expect(response?.statusCode).toBe(200)
    expect(body.status).toBe('unavailable')
    expect(body.tweets).toEqual([])
    expect(body.searchUrl).toContain('x.com/search')
    expect(response?.body).not.toContain('1869099999999999999')
  })

  it('returns within its configured budget when mirrors hang', async () => {
    vi.stubEnv('MCRT_MENTIONS_TOTAL_TIMEOUT_MS', '120')
    vi.stubEnv('MCRT_MENTIONS_REQUEST_TIMEOUT_MS', '50')
    vi.stubEnv('MCRT_MENTIONS_MAX_HOSTS', '1')
    vi.stubGlobal(
      'fetch',
      vi.fn(
        (_input: string | URL | Request, init?: RequestInit) =>
          new Promise<Response>((_resolve, reject) => {
            init?.signal?.addEventListener('abort', () => {
              const error = new Error('aborted')
              error.name = 'AbortError'
              reject(error)
            })
          })
      )
    )

    const startedAt = Date.now()
    const response = await mentionsHandler(
      { queryStringParameters: {} } as never,
      {} as never
    )
    const elapsedMs = Date.now() - startedAt
    const body = JSON.parse(response?.body || '{}')

    expect(elapsedMs).toBeLessThan(500)
    expect(body.status).toBe('unavailable')
    expect(body.tweets).toEqual([])
  })
})
