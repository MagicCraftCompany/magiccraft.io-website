import { render, screen, within } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/components/Header/Header', () => ({
  default: () => <header data-testid="shared-header" />,
}))

vi.mock('@/components/Footer/Footer', () => ({
  default: () => <footer data-testid="shared-footer" />,
}))

vi.mock('@/lib/gameActions', () => ({
  openGameByDevice: vi.fn(),
}))

import Whitepaper from '@/pages/Whitepaper'

const renderWhitepaper = () =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={['/whitepaper']}>
        <Whitepaper />
      </MemoryRouter>
    </HelmetProvider>
  )

describe('Whitepaper v3.3', () => {
  it('presents a navigable product and function guide', () => {
    renderWhitepaper()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /living guide to MagicCraft products/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByText('Whitepaper v3.3')).toBeInTheDocument()
    expect(screen.queryByText(/Verified 13 July 2026/i)).not.toBeInTheDocument()

    const toc = screen.getByRole('navigation', {
      name: 'Whitepaper sections',
    })
    expect(
      within(toc).getByRole('link', { name: 'Functions' })
    ).toHaveAttribute('href', '#functions')
    expect(toc.parentElement).not.toHaveClass('hidden')
  })

  it('uses the shared AI catalog and public product stages', () => {
    renderWhitepaper()

    for (const cta of [
      'Open Merlin',
      'Open Akyn',
      'Open MagicAds',
      'Open MAGAS7',
      'Open DragonList',
      'Open DocAI',
    ]) {
      expect(
        screen.getByRole('link', { name: new RegExp('^' + cta) })
      ).toBeInTheDocument()
    }

    expect(screen.getByText(/own focused workflow/i)).toBeInTheDocument()
    expect(
      screen.getByText(/does not claim that Merlin, Akyn, MAGAS7/i)
    ).toBeInTheDocument()
    expect(screen.queryByText('Polybilities')).not.toBeInTheDocument()
    expect(screen.queryByText('SocialMM')).not.toBeInTheDocument()
  })

  it('explains public functions without internal diagnostics', () => {
    renderWhitepaper()

    expect(screen.getByText('MCRT Game Maker')).toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /Open function/i }).length
    ).toBeGreaterThan(1)
    expect(screen.getByText('Leaderboard')).toBeInTheDocument()
    expect(screen.getByText('Game stats')).toBeInTheDocument()
    expect(screen.queryByText('Rent testnet')).not.toBeInTheDocument()
    expect(
      within(
        screen
          .getByRole('heading', { level: 3, name: 'MagicCraft game' })
          .closest('article')!
      ).getByRole('link', { name: /Open function/i })
    ).toHaveAttribute('href', '/magiccraft')
    expect(
      within(screen.getByText('Game stats').closest('article')!).getByText(
        'Live data'
      )
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/external DNS configuration is broken/i)
    ).not.toBeInTheDocument()
    expect(document.body.textContent).not.toMatch(
      /degraded|returns 404|preloading reports|source times out|not exercised|needs correction/i
    )
  })

  it('removes unsupported financial and product claims', () => {
    const { container } = renderWhitepaper()
    const text = container.textContent ?? ''

    for (const unsupportedClaim of [
      /price appreciation/i,
      /buy pressure/i,
      /own a piece/i,
      /unlimited AI/i,
      /1% ARR/i,
      /fee burns/i,
      /17,800/i,
      /one Merlin account/i,
    ]) {
      expect(text).not.toMatch(unsupportedClaim)
    }

    expect(text).toMatch(/does not represent ownership/i)
    expect(text).toMatch(/no burn mechanism/i)
    expect(text).toMatch(/fixed return is not promised/i)
    expect(text).toMatch(/BNB Chain-pegged versions/i)
  })

  it('exposes the official source ledger and risk boundaries', () => {
    renderWhitepaper()

    expect(
      screen.getByRole('heading', {
        name: 'Official product references',
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /MCRT tokenomics/i })
    ).toHaveAttribute(
      'href',
      'https://docs.magiccraft.io/usdmcrt-token/tokenomics'
    )
    expect(
      screen.getByRole('heading', {
        name: 'Utility is not an investment promise',
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/total loss is possible/i)).toBeInTheDocument()
  })
})
