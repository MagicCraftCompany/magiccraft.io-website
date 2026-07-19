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
vi.mock('@/lib/gameActions', () => ({
  openMetaMaskMcrt: vi.fn(),
}))

import Pricing from '@/pages/Pricing'

describe('MCRT buyer guide', () => {
  it('uses one comparison surface for the three provider routes', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Pricing />
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(
      screen.getByRole('link', { name: 'Compare buy routes' })
    ).toHaveAttribute('href', '#buy-mcrt')
    expect(screen.getByRole('link', { name: 'Open Lobby' })).toHaveAttribute(
      'href',
      'https://lobby.magiccraft.io/'
    )

    const comparison = screen
      .getByRole('heading', { name: 'Three clean ways to get MCRT' })
      .closest('section')
    expect(comparison).not.toBeNull()
    const comparisonView = within(comparison as HTMLElement)
    expect(
      comparisonView.getByRole('link', { name: /PancakeSwap/i })
    ).toBeInTheDocument()
    expect(
      comparisonView.getByRole('button', { name: /MetaMask/i })
    ).toBeInTheDocument()
    expect(
      comparisonView.getByRole('link', { name: /Bybit/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'Fund the Lobby' })
    ).not.toBeInTheDocument()
  })
})
