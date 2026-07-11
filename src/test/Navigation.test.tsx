import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

vi.mock('@/lib/googleTranslate', () => ({
  LANGUAGES: [{ code: 'en', name: 'English', flag: '🇺🇸' }],
  setGoogTransCookie: vi.fn(),
  triggerGoogleTranslate: vi.fn(),
}))

vi.mock('@/lib/gameActions', () => ({
  openGameByDevice: vi.fn(),
  openMetaMaskMcrt: vi.fn(),
}))

vi.mock('@/lib/analytics', () => ({
  trackCta: vi.fn(),
}))

vi.mock('@/components/Header/StatusIndicator', () => ({
  default: () => <span>Status</span>,
}))

import Header from '@/components/Header/Header'
import MobileBottomBar from '@/components/Home/MobileBottomBar'
import { openGameByDevice } from '@/lib/gameActions'
import { trackCta } from '@/lib/analytics'

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
  vi.unstubAllGlobals()
  document.body.style.overflow = ''
  document.getElementById('home')?.remove()
})

describe('Header navigation', () => {
  it('uses the same xl breakpoint for the full navigation and hamburger', async () => {
    renderHeader()

    const menuToggle = screen.getByRole('button', { name: 'Open menu' })
    expect(menuToggle).toHaveClass('xl:hidden')
    expect(menuToggle).not.toHaveClass('md:hidden')

    const gamesMenu = screen.getByRole('button', { name: 'Games' })
    expect(gamesMenu.parentElement?.parentElement).toHaveClass(
      'hidden',
      'xl:flex'
    )

    const desktopPlay = screen.getByRole('button', {
      name: 'Play MagicCraft',
    })
    expect(desktopPlay.parentElement).toHaveClass('hidden', 'xl:flex')
    expect(await screen.findByText('Status')).toBeInTheDocument()
  })

  it('mounts an accessible dialog only while open and closes it on Escape', () => {
    renderHeader()

    const menuToggle = screen.getByRole('button', { name: 'Open menu' })
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    fireEvent.click(menuToggle)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAccessibleName('MagicCraft navigation')
    expect(menuToggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBe(menuToggle)
    expect(
      within(dialog).getByRole('button', { name: 'Close navigation menu' })
    ).toHaveFocus()
    expect(document.body.style.overflow).toBe('hidden')

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(menuToggle).toHaveAccessibleName('Open menu')
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false')
    expect(menuToggle).toHaveFocus()
    expect(document.body.style.overflow).toBe('')
  })

  it('keeps Play primary and exposes lobbies, shop, and MCRT as secondary paths', async () => {
    renderHeader()
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const dialog = screen.getByRole('dialog')
    const drawer = within(dialog)
    const playButton = drawer.getByRole('button', { name: 'Play MagicCraft' })
    const lobbiesLink = drawer.getByRole('link', { name: 'Live Lobbies' })
    const shopLink = drawer.getByRole('link', { name: 'Shop' })
    const tokenMenu = await drawer.findByRole('button', { name: '$MCRT' })

    expect(playButton).toHaveClass('min-h-12')
    expect(lobbiesLink).toHaveClass('min-h-11')
    expect(shopLink).toHaveClass('min-h-11')
    expect(tokenMenu).toHaveAttribute('aria-expanded', 'false')
    expect(drawer.queryByRole('link', { name: 'Buy $MCRT' })).toBeNull()

    fireEvent.click(tokenMenu)
    expect(tokenMenu).toHaveAttribute('aria-expanded', 'true')
    expect(
      await drawer.findByRole('link', { name: 'PancakeSwap DEX' })
    ).toBeInTheDocument()
  })

  it('traps reverse tab navigation inside the open drawer', async () => {
    renderHeader()
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const dialog = screen.getByRole('dialog')
    const drawer = within(dialog)
    const closeButton = drawer.getByRole('button', {
      name: 'Close navigation menu',
    })
    const finalLink = drawer.getByRole('link', { name: 'FAQ' })

    await drawer.findByRole('button', { name: 'Games' })
    expect(closeButton).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(finalLink).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Tab' })
    expect(closeButton).toHaveFocus()
  })
})

describe('MobileBottomBar', () => {
  it('offers two 48px game actions without chat or token squeeze', () => {
    render(<MobileBottomBar />)

    const playButton = screen.getByRole('button', {
      name: 'Play MagicCraft',
      hidden: true,
    })
    const lobbiesLink = screen.getByRole('link', {
      name: 'Live Lobbies',
      hidden: true,
    })

    expect(playButton).toHaveClass('h-12')
    expect(lobbiesLink).toHaveClass('h-12')
    expect(screen.queryByText('Buy $MCRT')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Open Live Support chat' })
    ).not.toBeInTheDocument()

    fireEvent.click(playButton)
    expect(openGameByDevice).toHaveBeenCalledTimes(1)

    fireEvent.click(lobbiesLink)
    expect(trackCta).toHaveBeenCalledWith({
      cta: 'play_now',
      location: 'mobile_bottom_bar',
      label: 'live_lobbies',
    })
  })

  it('stays hidden over the hero and reveals after the hero leaves view', () => {
    const hero = document.createElement('section')
    hero.id = 'home'
    document.body.appendChild(hero)

    let intersectionCallback: IntersectionObserverCallback | undefined
    const observe = vi.fn()
    const disconnect = vi.fn()
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn((callback: IntersectionObserverCallback) => {
        intersectionCallback = callback
        return {
          observe,
          disconnect,
          unobserve: vi.fn(),
          takeRecords: vi.fn(),
        }
      })
    )

    const { container } = render(<MobileBottomBar />)
    const bar = container.querySelector('[data-mobile-bottom-bar]')
    const playButton = screen.getByRole('button', {
      name: 'Play MagicCraft',
      hidden: true,
    })
    const lobbiesLink = screen.getByRole('link', {
      name: 'Live Lobbies',
      hidden: true,
    })

    expect(observe).toHaveBeenCalledWith(hero)
    expect(bar).toHaveAttribute('aria-hidden', 'true')
    expect(bar).toHaveClass('translate-y-full', 'motion-reduce:transition-none')
    expect(playButton).toHaveAttribute('tabindex', '-1')
    expect(lobbiesLink).toHaveAttribute('tabindex', '-1')

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })

    expect(bar).toHaveAttribute('aria-hidden', 'false')
    expect(bar).toHaveClass('translate-y-0', 'opacity-100')
    expect(playButton).not.toHaveAttribute('tabindex')
    expect(lobbiesLink).not.toHaveAttribute('tabindex')

    cleanup()
    expect(disconnect).toHaveBeenCalledTimes(1)
  })
})
