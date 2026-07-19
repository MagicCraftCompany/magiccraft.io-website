import { createElement } from 'react'
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import LiveSupportWidget from '../components/LiveSupport/LiveSupportWidget'

beforeEach(() => {
  localStorage.clear()
  Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
    configurable: true,
    value: vi.fn(),
  })
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
})

describe('LiveSupportWidget', () => {
  it('sends the newest user message once instead of duplicating it in history', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: vi.fn().mockResolvedValue({ message: 'Verified answer' }),
    })
    vi.stubGlobal('fetch', fetchMock)

    render(createElement(LiveSupportWidget))
    fireEvent.click(
      screen.getByRole('button', { name: 'Open Live Support chat' })
    )
    fireEvent.change(screen.getByPlaceholderText('Type your message…'), {
      target: { value: 'Where can I play?' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Send' }))

    await screen.findByText('Verified answer')
    const request = fetchMock.mock.calls[0]
    const payload = JSON.parse(String(request[1]?.body))

    expect(payload).toEqual({
      message: 'Where can I play?',
      history: [],
    })
  })

  it('lets a user cancel a hanging request and close the modal', async () => {
    let requestSignal: AbortSignal | undefined
    vi.stubGlobal(
      'fetch',
      vi.fn((_input: string | URL | Request, init?: RequestInit) => {
        requestSignal = init?.signal || undefined
        return new Promise((_resolve, reject) => {
          requestSignal?.addEventListener('abort', () => {
            reject(new DOMException('aborted', 'AbortError'))
          })
        })
      })
    )

    render(createElement(LiveSupportWidget))
    fireEvent.click(
      screen.getByRole('button', { name: 'Open Live Support chat' })
    )
    fireEvent.change(screen.getByPlaceholderText('Type your message…'), {
      target: { value: 'Hello' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Send' }))

    expect(await screen.findByText('Thinking…')).toBeInTheDocument()
    const closeButton = screen.getByRole('button', {
      name: 'Close Live Support',
    })
    expect(closeButton).toBeEnabled()

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    await waitFor(() => expect(requestSignal?.aborted).toBe(true))
    await waitFor(() =>
      expect(screen.queryByText('Thinking…')).not.toBeInTheDocument()
    )

    fireEvent.click(closeButton)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
