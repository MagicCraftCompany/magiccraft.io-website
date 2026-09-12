import { fireEvent, render, screen, within } from '@testing-library/react'
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
vi.mock('@/lib/analytics', () => ({
  trackCta: vi.fn(),
}))
import Pricing from '@/pages/Pricing'
import { trackCta } from '@/lib/analytics'

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

  it('uses safe, tracked handoffs for product and builder utility', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Pricing />
        </MemoryRouter>
      </HelmetProvider>
    )

    const destinations = [
      ['MagicAds', 'https://magicads.dev/pricing', 'open_ai_product'],
      ['DocAI', 'https://docai.live/pricing', 'open_ai_product'],
      ['MCRTPay', 'https://mcrtpay.com/docs', 'open_mcrt_integration'],
    ] as const

    for (const [label, href, cta] of destinations) {
      const handoff = screen.getByText(label, { exact: true }).closest('a')
      expect(handoff).not.toBeNull()
      expect(handoff).toHaveAttribute('href', href)
      expect(handoff).toHaveAttribute('target', '_blank')
      expect(handoff).toHaveAttribute('rel', expect.stringContaining('noopener'))
      expect(handoff).toHaveAttribute(
        'rel',
        expect.stringContaining('noreferrer')
      )
      fireEvent.click(handoff as HTMLAnchorElement)
      expect(trackCta).toHaveBeenCalledWith({
        cta,
        location: 'mcrt_product_guide',
        label: label.toLowerCase(),
      })
    }

    expect(
      screen.getByText(/Buying MCRT does not activate a plan/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Check the selected plan, final quote, network fees/i)
    ).toBeInTheDocument()
  })
})
