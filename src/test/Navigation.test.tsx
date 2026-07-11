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

import Header from '@/components/Header/Header'
import MobileBottomBar from '@/components/Home/MobileBottomBar'
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

    const aiProductsMenu = screen.getByRole('button', { name: 'AI Products' })
    const fullNavigation = aiProductsMenu.parentElement?.parentElement
    expect(fullNavigation).toHaveClass('hidden', 'xl:flex')

    const desktopSuiteCta = screen.getByRole('link', {
      name: 'Explore AI Suite',
    })
    expect(desktopSuiteCta.parentElement).toHaveClass('hidden', 'xl:flex')
    expect(desktopSuiteCta).toHaveAttribute('href', '/#ai-products')

    const menuButtons = within(fullNavigation as HTMLElement).getAllByRole(
      'button'
    )
    expect(menuButtons[0]).toHaveAccessibleName('AI Products')
    expect(menuButtons.at(-1)).toHaveAccessibleName('Game')
    expect(screen.queryByText('Status')).not.toBeInTheDocument()
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

  it('keeps the AI suite primary and puts game destinations in the final menu', async () => {
    renderHeader()
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const dialog = screen.getByRole('dialog')
    const drawer = within(dialog)
    const suiteLink = drawer.getByRole('link', { name: 'Explore AI Suite' })
    const merlinLink = drawer.getByRole('link', { name: 'Open Merlin' })
    const akynLink = drawer.getByRole('link', { name: 'Akyn Studio' })
    const aiProductsMenu = await drawer.findByRole('button', {
      name: 'AI Products',
    })
    const tokenMenu = await drawer.findByRole('button', { name: '$MCRT' })
    const gameMenu = await drawer.findByRole('button', { name: 'Game' })

    expect(suiteLink).toHaveClass('min-h-12')
    expect(suiteLink).toHaveAttribute('href', '/#ai-products')
    expect(merlinLink).toHaveClass('min-h-11')
    expect(merlinLink).toHaveAttribute('href', 'https://merlintheai.com')
    expect(akynLink).toHaveClass('min-h-11')
    expect(aiProductsMenu).toHaveAttribute('aria-expanded', 'false')
    expect(tokenMenu).toHaveAttribute('aria-expanded', 'false')
    expect(gameMenu).toHaveAttribute('aria-expanded', 'false')
    expect(drawer.queryByRole('button', { name: 'Play MagicCraft' })).toBeNull()
    expect(drawer.queryByRole('link', { name: 'Buy $MCRT' })).toBeNull()

    fireEvent.click(aiProductsMenu)
    expect(aiProductsMenu).toHaveAttribute('aria-expanded', 'true')
    expect(
      await drawer.findByRole('link', { name: 'Merlin AI' })
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

    await drawer.findByRole('button', { name: 'AI Products' })
    expect(closeButton).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(finalLink).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Tab' })
    expect(closeButton).toHaveFocus()
  })
})

describe('MobileBottomBar', () => {
  it('offers two 48px AI product actions without game or token squeeze', () => {
    render(<MobileBottomBar />)

    const aiProductsLink = screen.getByRole('link', {
      name: 'AI Products',
      hidden: true,
    })
    const merlinLink = screen.getByRole('link', {
      name: 'Open Merlin',
      hidden: true,
    })

    expect(aiProductsLink).toHaveClass('h-12')
    expect(aiProductsLink).toHaveAttribute('href', '/#ai-products')
    expect(merlinLink).toHaveClass('h-12')
    expect(merlinLink).toHaveAttribute('href', 'https://merlintheai.com')
    expect(screen.queryByText('Buy $MCRT')).not.toBeInTheDocument()
    expect(screen.queryByText('Play Game')).not.toBeInTheDocument()

    fireEvent.click(aiProductsLink)
    expect(trackCta).toHaveBeenCalledWith({
      cta: 'explore_ai_suite',
      location: 'mobile_bottom_bar',
      label: 'ai_products',
    })

    fireEvent.click(merlinLink)
    expect(trackCta).toHaveBeenCalledWith({
      cta: 'open_ai_product',
      location: 'mobile_bottom_bar',
      label: 'open_merlin',
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
    const aiProductsLink = screen.getByRole('link', {
      name: 'AI Products',
      hidden: true,
    })
    const merlinLink = screen.getByRole('link', {
      name: 'Open Merlin',
      hidden: true,
    })

    expect(observe).toHaveBeenCalledWith(hero)
    expect(bar).toHaveAttribute('aria-hidden', 'true')
    expect(bar).toHaveClass('translate-y-full', 'motion-reduce:transition-none')
    expect(aiProductsLink).toHaveAttribute('tabindex', '-1')
    expect(merlinLink).toHaveAttribute('tabindex', '-1')

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })

    expect(bar).toHaveAttribute('aria-hidden', 'false')
    expect(bar).toHaveClass('translate-y-0', 'opacity-100')
    expect(aiProductsLink).not.toHaveAttribute('tabindex')
    expect(merlinLink).not.toHaveAttribute('tabindex')

    cleanup()
    expect(disconnect).toHaveBeenCalledTimes(1)
  })
})
