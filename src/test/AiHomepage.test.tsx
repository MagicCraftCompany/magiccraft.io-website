import { render, screen, within } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

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
    <section aria-label="Live ecosystem stats">
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
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Play the game. Put AI to work.',
      })
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('button', { name: 'Play MagicCraft' }).length
    ).toBeGreaterThan(0)
    expect(
      screen.getByRole('link', { name: 'Explore 6 AI products' })
    ).toHaveAttribute('href', '#ai-products')

    expect(
      screen.getByRole('heading', { name: 'Established PvP. New PvE.' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Live ecosystem stats' })
    ).toBeInTheDocument()

    const suiteHeading = screen.getByRole('heading', {
      name: 'Six focused AI products. Pick the one built for the job.',
    })
    const suite = suiteHeading.closest('section')
    expect(suite).not.toBeNull()
    const suiteView = within(suite as HTMLElement)

    for (const product of [
      'Merlin AI',
      'Akyn',
      'MagicAds',
      'MAGAS7',
      'DragonList',
      'DocAI',
    ]) {
      expect(
        suiteView.getByRole('link', { name: new RegExp(product) })
      ).toBeInTheDocument()
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
  })
})
