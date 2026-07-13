import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
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
import { openGameByDevice } from '@/lib/gameActions'

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
  document.getElementById('hero-primary-actions')?.remove()
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

    const desktopGameCta = screen.getByRole('button', {
      name: 'Play MagicCraft',
    })
    expect(desktopGameCta.parentElement).toHaveClass('hidden', 'xl:flex')

    const menuButtons = within(fullNavigation as HTMLElement).getAllByRole(
      'button'
    )
    expect(menuButtons[0]).toHaveAccessibleName('Game')
    expect(menuButtons[1]).toHaveAccessibleName('AI Products')
    expect(menuButtons.at(-1)).toHaveAccessibleName('$MCRT')
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
    expect(menuToggle).toHaveAccessibleName('Close menu')
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

  it('gives game and AI equal primary drawer actions', async () => {
    renderHeader()
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const dialog = screen.getByRole('dialog')
    const drawer = within(dialog)
    const suiteLink = drawer.getByRole('link', { name: 'Explore AI Suite' })
    const playButton = drawer.getByRole('button', { name: 'Play MagicCraft' })
    const merlinLink = drawer.getByRole('link', { name: 'Open Merlin' })
    const akynLink = drawer.getByRole('link', { name: 'Akyn Studio' })
    const aiProductsMenu = await drawer.findByRole('button', {
      name: 'AI Products',
    })
    const tokenMenu = await drawer.findByRole('button', { name: '$MCRT' })
    const gameMenu = await drawer.findByRole('button', { name: 'Game' })

    expect(suiteLink).toHaveClass('min-h-12')
    expect(suiteLink).toHaveAttribute('href', '/#ai-products')
    expect(playButton).toHaveClass('min-h-12')
    expect(merlinLink).toHaveClass('min-h-11')
    expect(merlinLink).toHaveAttribute('href', 'https://merlintheai.com')
    expect(akynLink).toHaveClass('min-h-11')
    expect(aiProductsMenu).toHaveAttribute('aria-expanded', 'false')
    expect(tokenMenu).toHaveAttribute('aria-expanded', 'false')
    expect(gameMenu).toHaveAttribute('aria-expanded', 'false')
    expect(drawer.queryByRole('link', { name: 'Buy $MCRT' })).toBeNull()

    fireEvent.click(playButton)
    expect(openGameByDevice).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopenedDrawer = within(screen.getByRole('dialog'))
    const reopenedAiProductsMenu = reopenedDrawer.getByRole('button', {
      name: 'AI Products',
    })

    fireEvent.click(reopenedAiProductsMenu)
    expect(reopenedAiProductsMenu).toHaveAttribute('aria-expanded', 'true')
    expect(
      await reopenedDrawer.findByRole('link', { name: 'Merlin AI' })
    ).toBeInTheDocument()
  })

  it('keeps one purposeful section open and routes Game Maker to the real editor', async () => {
    renderHeader()
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const drawer = within(screen.getByRole('dialog'))
    const aiProductsMenu = drawer.getByRole('button', { name: 'AI Products' })
    const web3Menu = drawer.getByRole('button', { name: 'Web3' })
    const gameMenu = drawer.getByRole('button', { name: 'Game' })

    fireEvent.click(aiProductsMenu)
    expect(aiProductsMenu).toHaveAttribute('aria-expanded', 'true')
    expect(drawer.getByText('Assistant and operations')).toBeInTheDocument()

    fireEvent.click(web3Menu)
    expect(web3Menu).toHaveAttribute('aria-expanded', 'true')
    expect(aiProductsMenu).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() =>
      expect(drawer.queryByRole('link', { name: 'Merlin AI' })).toBeNull()
    )
    expect(drawer.queryByRole('link', { name: 'Rent (Testnet)' })).toBeNull()
    expect(
      within(drawer.getByRole('link', { name: 'Web3 Lobbies' })).getByText(
        'Degraded'
      )
    ).toBeInTheDocument()
    expect(
      within(drawer.getByRole('link', { name: 'Marketplace' })).getByText(
        'Live'
      )
    ).toBeInTheDocument()
    expect(
      within(drawer.getByRole('link', { name: 'Pledging' })).getByText(
        'Degraded'
      )
    ).toBeInTheDocument()
    expect(
      within(drawer.getByRole('link', { name: 'Referral System' })).getByText(
        'Gated'
      )
    ).toBeInTheDocument()

    fireEvent.click(gameMenu)
    const gameMaker = await drawer.findByRole('link', { name: 'Game Maker' })
    expect(gameMaker).toHaveAttribute(
      'href',
      'https://store.steampowered.com/app/3478810/MCRT_Game_Maker/'
    )
    expect(gameMaker).toHaveAttribute('target', '_blank')
    expect(drawer.getByRole('link', { name: 'Leaderboard' })).toHaveAttribute(
      'href',
      'https://lobby.magiccraft.io/leaderboard'
    )
    expect(drawer.getByRole('link', { name: 'Game stats' })).toHaveAttribute(
      'href',
      '/stats'
    )
    expect(within(gameMaker).getByText('Live')).toBeInTheDocument()
    expect(
      within(drawer.getByRole('link', { name: 'Ecosystem Games' })).getByText(
        'Degraded'
      )
    ).toBeInTheDocument()
    expect(
      within(drawer.getByRole('link', { name: 'Game stats' })).getByText(
        'Partial data'
      )
    ).toBeInTheDocument()
  })

  it('uses client-side links for internal destinations', () => {
    renderHeader()
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const drawer = within(screen.getByRole('dialog'))
    fireEvent.click(drawer.getByRole('button', { name: 'About' }))

    expect(drawer.getByRole('link', { name: 'Careers' })).toHaveAttribute(
      'href',
      '/careers'
    )
    expect(
      drawer.getByRole('link', { name: 'Whitepaper' })
    ).not.toHaveAttribute('target')
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

  it('removes the background page from interaction while the drawer is open', () => {
    render(
      <MemoryRouter>
        <Header />
        <main data-testid="background-page">
          <button type="button">Background action</button>
        </main>
      </MemoryRouter>
    )

    const background = screen.getByTestId('background-page')
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    expect(background).toHaveAttribute('aria-hidden', 'true')
    expect(background.inert).toBe(true)

    fireEvent.click(
      within(screen.getByRole('dialog')).getByRole('button', {
        name: 'Close navigation menu',
      })
    )

    expect(background).not.toHaveAttribute('aria-hidden')
    expect(background.inert).not.toBe(true)
  })
})

describe('MobileBottomBar', () => {
  it('offers balanced 48px game and AI actions', () => {
    render(<MobileBottomBar />)

    const playButton = screen.getByRole('button', {
      name: 'Play Game',
      hidden: true,
    })
    const aiProductsLink = screen.getByRole('link', {
      name: 'AI Suite',
      hidden: true,
    })

    expect(playButton).toHaveClass('h-12')
    expect(aiProductsLink).toHaveClass('h-12')
    expect(aiProductsLink).toHaveAttribute('href', '/#ai-products')
    expect(screen.queryByText('Buy $MCRT')).not.toBeInTheDocument()

    fireEvent.click(playButton)
    expect(openGameByDevice).toHaveBeenCalledTimes(1)

    fireEvent.click(aiProductsLink)
    expect(trackCta).toHaveBeenCalledWith({
      cta: 'explore_ai_suite',
      location: 'mobile_bottom_bar',
      label: 'ai_products',
    })

    expect(screen.queryByText('Open Merlin')).not.toBeInTheDocument()
  })

  it('reveals after the primary hero actions leave view', () => {
    const heroActions = document.createElement('div')
    heroActions.id = 'hero-primary-actions'
    document.body.appendChild(heroActions)

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
      name: 'Play Game',
      hidden: true,
    })
    const aiProductsLink = screen.getByRole('link', {
      name: 'AI Suite',
      hidden: true,
    })

    expect(observe).toHaveBeenCalledWith(heroActions)
    expect(bar).toHaveAttribute('aria-hidden', 'true')
    expect(bar).toHaveClass('translate-y-full', 'motion-reduce:transition-none')
    expect(playButton).toHaveAttribute('tabindex', '-1')
    expect(aiProductsLink).toHaveAttribute('tabindex', '-1')

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })

    expect(bar).toHaveAttribute('aria-hidden', 'false')
    expect(bar).toHaveClass('translate-y-0', 'opacity-100')
    expect(playButton).not.toHaveAttribute('tabindex')
    expect(aiProductsLink).not.toHaveAttribute('tabindex')

    cleanup()
    expect(disconnect).toHaveBeenCalledTimes(1)
  })
})
