import { render, screen, within } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { AI_PRODUCTS } from '@/data/aiProducts'

vi.mock('@/components/Header/Header', () => ({
  default: () => <div data-testid="header" />,
}))
vi.mock('@/components/Footer/Footer', () => ({
  default: () => <div data-testid="footer" />,
}))
vi.mock('@/components/Home/MobileBottomBar', () => ({
  default: () => null,
}))
vi.mock('@/components/LiveStats/LiveStatsWidget', () => ({
  default: () => (
    <section aria-label="Live ecosystem stats" className="mc-home-section">
      <h2>Live ecosystem stats</h2>
    </section>
  ),
}))
vi.mock('@/lib/gameActions', () => ({
  openGameByDevice: vi.fn(),
}))

import Homepagemcrt from '@/pages/Homepagemcrt'

describe('balanced game and AI homepage', () => {
  it('gives the live game and six-product AI suite clear primary paths', () => {
    const { container } = render(
      <HelmetProvider>
        <MemoryRouter>
          <Homepagemcrt />
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const heroHeading = screen.getByRole('heading', {
      level: 1,
      name: 'Play the game. Put AI to work.',
    })
    expect(heroHeading).toHaveClass('font-sans', 'font-semibold')
    expect(heroHeading).not.toHaveClass('font-serif', 'font-black')
    expect(
      screen.getAllByRole('button', { name: 'Play MagicCraft' }).length
    ).toBeGreaterThan(0)
    expect(
      screen.getByRole('button', {
        name: /live game.*PvP and PvE across mobile and PC.*choose your platform/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Explore 6 AI products' })
    ).toHaveAttribute('href', '#ai-products')
    expect(
      screen.getByRole('link', {
        name: /AI product suite.*Merlin AI.*Akyn.*MagicAds.*MAGAS7.*DragonList.*DocAI.*Find your product/i,
      })
    ).toHaveAttribute('href', '#ai-products')

    expect(
      screen.getByRole('heading', { name: 'Established PvP. New PvE.' })
    ).toBeInTheDocument()
    const gameplayVideo = screen.getByLabelText(
      'Official MagicCraft gameplay video'
    )
    expect(gameplayVideo).toHaveAttribute(
      'poster',
      '/gameplay/magiccraft-triple-kill.webp'
    )
    expect(gameplayVideo.querySelector('source')).toHaveAttribute(
      'src',
      expect.stringContaining('video_gokp2f.mp4')
    )
    expect(
      screen.getByRole('heading', { name: 'Live ecosystem stats' })
    ).toBeInTheDocument()

    const suiteHeading = screen.getByRole('heading', {
      name: 'AI for the work in front of you.',
    })
    expect(suiteHeading).toHaveClass('font-sans', 'font-semibold')
    expect(suiteHeading).not.toHaveClass('font-serif', 'font-black')
    const suite = suiteHeading.closest('section')
    expect(suite).not.toBeNull()
    const suiteSection = suite as HTMLElement
    const suiteView = within(suiteSection)
    const liveStats = screen.getByRole('region', {
      name: 'Live ecosystem stats',
    })
    expect(
      suiteSection.compareDocumentPosition(liveStats) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()

    for (const product of AI_PRODUCTS) {
      const productLink = suiteView.getByRole('link', {
        name: new RegExp(
          `Opens ${product.name} as a separate product in a new tab`,
          'i'
        ),
      })
      expect(productLink).toHaveAttribute('href', product.href)
      expect(productLink).toHaveAttribute('target', '_blank')
      expect(productLink).toHaveAttribute(
        'rel',
        expect.stringContaining('noopener')
      )
      expect(
        suiteView.getByRole('img', { name: `${product.name} logo` })
      ).toBeInTheDocument()
      expect(suiteView.getByText(product.safetyNote!)).toBeInTheDocument()
    }

    expect(
      screen.getByRole('heading', {
        name: 'Every system has a clear job and a direct path.',
      })
    ).toBeInTheDocument()
    expect(screen.getByText('Pledging')).toBeInTheDocument()
    expect(screen.queryByText('SocialMM')).not.toBeInTheDocument()
    expect(screen.queryByText(/still building/i)).not.toBeInTheDocument()

    const publicCopy = container.textContent ?? ''
    expect(publicCopy).not.toMatch(
      /degraded|controlled authenticated testing|horizontal overflow|returns 404|fallback values|public surfaces checked|checked 13 july/i
    )

    const main = container.querySelector('main')
    expect(main).not.toBeNull()
    const sections = Array.from(main!.children).filter(
      (element) => element.tagName === 'SECTION'
    )
    expect(
      sections.map(
        (section) =>
          section.id ||
          section.getAttribute('aria-label') ||
          section.querySelector('h2')?.textContent
      )
    ).toEqual([
      'home',
      'game',
      'ai-products',
      'Live ecosystem stats',
      'systems',
      'Enter the game or open the tool you need.',
    ])
    expect(sections[0]).not.toHaveClass('mc-home-section')
    for (const section of sections.slice(1)) {
      expect(section).toHaveClass('mc-home-section')
    }
  })
})
