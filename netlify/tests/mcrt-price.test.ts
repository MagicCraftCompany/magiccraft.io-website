import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

function jsonResponse(body: unknown, status = 200): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: vi.fn().mockResolvedValue(body),
  } as unknown as Response
}

async function loadHandler() {
  vi.resetModules()
  return (await import('../functions/mcrt-price')).handler
}

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2026-07-19T08:00:00.000Z'))
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

describe('MCRT price freshness contract', () => {
  it('labels a current upstream response as live', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        jsonResponse({
          magiccraft: { usd: 0.000065, usd_24h_change: 1.25 },
        })
      )
    )
    const handler = await loadHandler()

    const response = await handler({} as never, {} as never)
    const body = JSON.parse(response?.body || '{}')

    expect(response?.statusCode).toBe(200)
    expect(response?.headers?.['x-cache']).toBe('MISS')
    expect(body.meta).toMatchObject({
      status: 'live',
      fetchedAt: '2026-07-19T08:00:00.000Z',
      ageMs: 0,
    })
  })

  it('marks a bounded fallback as stale instead of presenting it as live', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({ magiccraft: { usd: 0.000065 } }))
      .mockResolvedValue(jsonResponse({}, 503))
    vi.stubGlobal('fetch', fetchMock)
    const handler = await loadHandler()

    await handler({} as never, {} as never)
    vi.setSystemTime(new Date('2026-07-19T08:02:00.000Z'))
    const response = await handler({} as never, {} as never)
    const body = JSON.parse(response?.body || '{}')

    expect(response?.statusCode).toBe(200)
    expect(response?.headers?.['x-cache']).toBe('STALE')
    expect(body.meta).toMatchObject({ status: 'stale', ageMs: 120_000 })
    expect(body.magiccraft.usd).toBe(0.000065)
  })

  it('expires old warm-instance data instead of serving it forever', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({ magiccraft: { usd: 0.000065 } }))
      .mockResolvedValue(jsonResponse({}, 503))
    vi.stubGlobal('fetch', fetchMock)
    const handler = await loadHandler()

    await handler({} as never, {} as never)
    vi.setSystemTime(new Date('2026-07-19T08:16:00.000Z'))
    const response = await handler({} as never, {} as never)

    expect(response?.statusCode).toBe(503)
    expect(JSON.parse(response?.body || '{}')).toEqual({
      error: 'price_unavailable',
    })
  })

  it('bounds hanging upstreams instead of waiting for the platform timeout', async () => {
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
    const handler = await loadHandler()

    const responsePromise = handler({} as never, {} as never)
    await vi.advanceTimersByTimeAsync(6_100)
    const response = await responsePromise

    expect(response?.statusCode).toBe(503)
    expect(fetch).toHaveBeenCalledTimes(2)
  })
})
