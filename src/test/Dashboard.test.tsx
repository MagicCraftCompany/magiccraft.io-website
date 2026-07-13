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

  it('renders validated lobby totals without graph dependencies', () => {
    mockUseGameStats.mockReturnValue({
      data: {
        ts: '2026-07-13T12:00:00.000Z',
        meta: {
          status: 'partial',
          sources: {
            gameServer: { status: 'unavailable' },
            lobby: { status: 'live' },
            market: { status: 'live' },
          },
        },
        season: {
          name: null,
          active: null,
          daysRemaining: null,
          totalPrizeMcrt: null,
          prizesDistributed: null,
        },
        allTime: {
          matchesPlayed: null,
          finishedLobbies: 100_642,
          mcrtInGame: null,
          mcrtPledged: 145_827_252.72,
          totalLobbies: 322_766,
          totalUsers: 28_166,
          topPlayers: [],
          recentWinners: [],
        },
        price: {
          usd: 0.001,
          change24h: null,
          marketCap: null,
          volume24h: null,
        },
        live: { serverOnline: null },
      },
      loading: false,
      error: null,
      status: 'partial',
      refresh: vi.fn(),
    })

    render(
      <HelmetProvider>
        <Dashboard />
      </HelmetProvider>
    )

    expect(
      screen.getByRole('heading', { name: 'Game Stats' })
    ).toBeInTheDocument()
    expect(screen.getAllByText('322,766')).toHaveLength(2)
    expect(screen.getAllByText('28,166')).toHaveLength(2)
    expect(screen.getAllByText('100,642')).toHaveLength(2)
    expect(screen.getAllByText('145.83M MCRT')).toHaveLength(2)
    expect(screen.getByText('Lobby stats source')).toBeInTheDocument()
    expect(screen.getAllByText('Live')).toHaveLength(2)
  })
})
