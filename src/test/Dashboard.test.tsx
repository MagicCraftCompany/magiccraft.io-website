import { cleanup, render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { afterEach, describe, expect, it, vi } from 'vitest'

const mockUseGameStats = vi.hoisted(() => vi.fn())

vi.mock('../lib/useGameStats', () => ({
  useGameStats: mockUseGameStats,
}))
vi.mock('../components/Header/Header', () => ({
  default: () => <div data-testid="header" />,
}))
vi.mock('../components/Footer/Footer', () => ({
  default: () => <div data-testid="footer" />,
}))

import Dashboard from '../pages/Dashboard'

describe('Dashboard', () => {
  afterEach(() => {
    cleanup()
    mockUseGameStats.mockReset()
  })

  it('leaves unavailable statistics blank and removes estimated history', () => {
    mockUseGameStats.mockReturnValue({
      data: null,
      loading: false,
      error: 'network down',
      status: 'unavailable',
      refresh: vi.fn(),
    })

    render(
      <HelmetProvider>
        <Dashboard />
      </HelmetProvider>
    )

    expect(screen.getByTestId('stats-dashboard')).toHaveAttribute(
      'data-status',
      'unavailable'
    )
    expect(
      screen.getByText(/does not synthesize or estimate trends/i)
    ).toBeInTheDocument()
    expect(screen.queryByText('15,285')).not.toBeInTheDocument()
    expect(screen.queryByText('2.70M MCRT')).not.toBeInTheDocument()
    expect(screen.queryByText('250.0K MCRT')).not.toBeInTheDocument()
    expect(screen.queryByText("Q1 '26")).not.toBeInTheDocument()
  })
})
