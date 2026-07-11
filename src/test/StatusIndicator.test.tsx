import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import StatusIndicator from '../components/Header/StatusIndicator'

function statusResponse(ok = true, coreOk = ok): Response {
  return {
    ok: true,
    status: 200,
    json: vi.fn().mockResolvedValue({
      ts: new Date().toISOString(),
      ok,
      coreOk,
      apiOk: ok ? 3 : 1,
      apiTotal: 3,
      services: [],
    }),
  } as unknown as Response
}

describe('StatusIndicator', () => {
  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('does not show green when no status response is available', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))
    render(<StatusIndicator />)

    const button = await screen.findByTestId('system-status-button')
    await waitFor(() =>
      expect(button).toHaveAttribute('data-status', 'unavailable')
    )

    fireEvent.click(button)
    expect(
      screen.getByText(/No current or previously verified status response/i)
    ).toBeInTheDocument()
  })

  it('marks retained status details stale after a failed refresh', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(statusResponse(true))
      .mockRejectedValueOnce(new Error('refresh failed'))
    vi.stubGlobal('fetch', fetchMock)
    render(<StatusIndicator />)

    const button = await screen.findByTestId('system-status-button')
    await waitFor(() =>
      expect(button).toHaveAttribute('data-status', 'healthy')
    )

    fireEvent.click(button)
    fireEvent.click(screen.getByRole('button', { name: 'Refresh' }))

    await waitFor(() => expect(button).toHaveAttribute('data-status', 'stale'))
    expect(
      screen.getByText(/details below are from the last successful check/i)
    ).toBeInTheDocument()
  })

  it('shows an issue when optional APIs respond but a core service is down', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(statusResponse(true, false)))
    render(<StatusIndicator />)

    const button = await screen.findByTestId('system-status-button')
    await waitFor(() => expect(button).toHaveAttribute('data-status', 'issues'))
    expect(button).toHaveAccessibleName(/Core issue/i)
  })
})
