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
  it('traps focus, locks the page and restores the launcher on Escape', async () => {
    const { container } = render(createElement(LiveSupportWidget))
    container.id = 'root'
    const launcher = screen.getByRole('button', {
      name: 'Open Live Support chat',
    })
    launcher.focus()

    fireEvent.click(launcher)

    const dialog = screen.getByRole('dialog', {
      name: 'MagicCraft Live Support',
    })
    const input = screen.getByRole('textbox', {
      name: 'Message MagicCraft Live Support',
    })
    await waitFor(() => expect(input).toHaveFocus())
    expect(document.body.style.overflow).toBe('hidden')
    expect(launcher).toHaveAttribute('aria-hidden', 'true')
    expect(launcher.inert).toBe(true)

    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'button:not([disabled]), textarea:not([disabled])'
      )
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    lastElement.focus()
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(firstElement).toHaveFocus()

    firstElement.focus()
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(lastElement).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(launcher).toHaveFocus()
    expect(document.body.style.overflow).toBe('')
    expect(launcher).not.toHaveAttribute('aria-hidden')
    expect(launcher.inert).toBe(false)
  })

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
