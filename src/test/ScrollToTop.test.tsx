import { act, cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'

describe('ScrollToTop hash navigation', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
    vi.restoreAllMocks()
    Reflect.deleteProperty(HTMLElement.prototype, 'scrollIntoView')
    document.getElementById('gameplay')?.remove()
  })

  it('retries until a lazy route hash target has mounted', () => {
    vi.useFakeTimers()
    const scrollIntoView = vi.fn()
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    })

    render(
      <MemoryRouter initialEntries={['/#gameplay']}>
        <ScrollToTop />
      </MemoryRouter>
    )

    expect(scrollIntoView).not.toHaveBeenCalled()

    const target = document.createElement('section')
    target.id = 'gameplay'
    document.body.appendChild(target)

    act(() => vi.advanceTimersByTime(100))

    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    })
  })
})
