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
vi.mock('@/lib/useMcrtPrice', () => ({
  useMcrtPrice: () => ({
    price: null,
    loading: false,
    status: 'unavailable',
  }),
}))
import Pricing from '@/pages/Pricing'

describe('MCRT buyer guide', () => {
  it('leads with current utility before the two primary market routes', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Pricing />
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(
      screen.getByRole('link', { name: 'See MCRT utility' })
    ).toHaveAttribute('href', '#mcrt-utility')
    expect(
      screen.getByRole('link', { name: 'Compare access routes' })
    ).toHaveAttribute('href', '#buy-mcrt')
    expect(screen.getByRole('link', { name: 'Open Lobby' })).toHaveAttribute(
      'href',
      'https://lobby.magiccraft.io/'
    )

    const utility = screen
      .getByRole('heading', {
        name: 'Choose what you want to do with MCRT.',
      })
      .closest('section')
    expect(utility).not.toBeNull()
    const utilityView = within(utility as HTMLElement)
    expect(
      utilityView.getByRole('link', { name: /Compete in eligible matches/i })
    ).toHaveAttribute('href', '/lobbies')
    expect(
      utilityView.getByRole('link', { name: /Collect and trade game assets/i })
    ).toHaveAttribute('href', 'https://app.magiccraft.io/marketplace/explorer')
    expect(
      utilityView.getByRole('link', { name: /Review current pledging pools/i })
    ).toHaveAttribute('href', 'https://app.magiccraft.io/pledging')
    expect(
      utilityView.getByText(/free MagicCraft game does not require MCRT/i)
    ).toBeInTheDocument()

    const comparison = screen
      .getByRole('heading', { name: 'Two direct routes to get MCRT' })
      .closest('section')
    expect(comparison).not.toBeNull()
    const comparisonView = within(comparison as HTMLElement)
    expect(
      comparisonView.getByRole('link', { name: /PancakeSwap/i })
    ).toBeInTheDocument()
    expect(
      comparisonView.getByRole('link', { name: /Bybit/i })
    ).toBeInTheDocument()
    expect(
      comparisonView.queryByRole('button', { name: /MetaMask/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'Fund the Lobby' })
    ).not.toBeInTheDocument()
  })
})
