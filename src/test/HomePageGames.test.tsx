import { fireEvent, render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/components/Header/Header', () => ({
  default: () => <header data-testid="header" />,
}))
vi.mock('@/components/Footer/Footer', () => ({
  default: () => <footer data-testid="footer" />,
}))
vi.mock('@/components/Home/GameExperienceSection', () => ({
  default: () => <section id="game">Gameplay</section>,
}))
vi.mock('@/lib/analytics', () => ({
  trackCta: vi.fn(),
}))

import HomePageGames from '@/pages/HomePageGames'
import { trackCta } from '@/lib/analytics'

describe('MagicCraft player page', () => {
  it('offers official stores without requiring MCRT, an NFT or a wallet', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <HomePageGames />
        </MemoryRouter>
      </HelmetProvider>
    )

    const stores = [
      [
        'Steam',
        'https://store.steampowered.com/app/2395760/MagicCraft/',
        'download_steam',
      ],
      [
        'App Store',
        'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525',
        'download_ios',
      ],
      [
        'Google Play',
        'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en',
        'download_android',
      ],
    ] as const

    for (const [name, href, cta] of stores) {
      const store = screen.getByRole('link', { name: new RegExp(`^${name}`) })
      expect(store).toHaveAttribute('href', href)
      expect(store).toHaveAttribute('target', '_blank')
      expect(store).toHaveAttribute('rel', expect.stringContaining('noopener'))
      fireEvent.click(store)
      expect(trackCta).toHaveBeenCalledWith({
        cta,
        location: 'game_platforms',
        label: name,
      })
    }

    expect(
      screen.getByText('Start playing without MCRT, an NFT or a wallet.')
    ).toBeInTheDocument()
  })

  it('keeps player support and optional Web3 routes separate from gameplay', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <HomePageGames />
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(screen.getByRole('link', { name: /Explore the heroes/i })).toHaveAttribute(
      'href',
      '/chooseyourhero/'
    )
    expect(screen.getByRole('link', { name: /Latest game updates/i })).toHaveAttribute(
      'href',
      '/patch/'
    )
    expect(screen.getByRole('link', { name: /Game help and FAQs/i })).toHaveAttribute(
      'href',
      '/faq/'
    )
    expect(
      screen.getByRole('link', { name: /Explore optional Web3 lobbies/i })
    ).toHaveAttribute('href', '/lobbies/')
    expect(
      screen.getByText(/Web3 features are separate from free gameplay/i)
    ).toBeInTheDocument()
  })
})
