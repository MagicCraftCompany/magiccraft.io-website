import { act, renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useMcrtPrice } from '@/lib/useMcrtPrice'

function priceResponse(status: 'live' | 'stale' = 'live'): Response {
  return {
    ok: true,
    status: 200,
    json: vi.fn().mockResolvedValue({
      magiccraft: { usd: 0.000065, usd_24h_change: 1.25 },
      meta: { status },
    }),
  } as unknown as Response
}

afterEach(() => {
  localStorage.clear()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('useMcrtPrice', () => {
  it('uses the server freshness label', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(priceResponse('stale')))

    const { result, unmount } = renderHook(() => useMcrtPrice(600_000))

    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.price?.usd).toBe(0.000065)
    expect(result.current.status).toBe('stale')
    unmount()
  })

  it('retains a verified price as stale after a refresh failure', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(priceResponse('live'))
      .mockRejectedValueOnce(new Error('offline'))
    vi.stubGlobal('fetch', fetchMock)

    const { result, unmount } = renderHook(() => useMcrtPrice(600_000))

    await waitFor(() => expect(result.current.status).toBe('live'))
    await act(async () => {
      await result.current.refresh()
    })

    expect(result.current.status).toBe('stale')
    expect(result.current.price?.usd).toBe(0.000065)
    expect(result.current.error).toBe('offline')
    unmount()
  })

  it('reports unavailable when no verified price exists', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))

    const { result, unmount } = renderHook(() => useMcrtPrice(600_000))

    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.status).toBe('unavailable')
    expect(result.current.price).toBeNull()
    unmount()
  })
})
