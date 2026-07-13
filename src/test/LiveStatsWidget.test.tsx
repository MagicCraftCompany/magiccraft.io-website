import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import type { GameStatsData } from '../lib/useGameStats'

const mockUseGameStats = vi.hoisted(() => vi.fn())

vi.mock('../lib/useGameStats', () => ({
  useGameStats: mockUseGameStats,
}))

import LiveStatsWidget from '../components/LiveStats/LiveStatsWidget'

const renderWidget = () =>
  render(
    <MemoryRouter>
      <LiveStatsWidget />
    </MemoryRouter>
  )

function verifiedData(): GameStatsData {
  const checkedAt = new Date().toISOString()
  return {
    ts: checkedAt,
    meta: {
      status: 'live',
      sources: {
        gameServer: {
          status: 'live',
          checkedAt,
          httpStatus: 200,
          error: null,
        },
        lobby: {
          status: 'live',
          checkedAt,
          httpStatus: 200,
          error: null,
        },
        market: {
          status: 'live',
          checkedAt,
          httpStatus: 200,
          error: null,
        },
      },
    },
    season: {
      name: 'Season A',
      active: true,
      daysRemaining: 3,
      totalPrizeMcrt: 500,
      prizesDistributed: false,
    },
    allTime: {
      matchesPlayed: null,
      finishedLobbies: 12,
      mcrtInGame: null,
      mcrtPledged: 1_234,
      topPlayers: [],
      recentWinners: [],
    },
    price: {
      usd: 0.00123,
      change24h: 2.5,
      marketCap: null,
      volume24h: null,
    },
    live: { serverOnline: true },
  }
}

describe('LiveStatsWidget', () => {
  afterEach(() => {
    cleanup()
    mockUseGameStats.mockReset()
  })

  it('uses a calm empty state without exposing backend errors', () => {
    mockUseGameStats.mockReturnValue({
      data: null,
      loading: false,
      error: 'network down',
      status: 'unavailable',
      refresh: vi.fn(),
    })

    renderWidget()

    expect(screen.getByTestId('live-stats-widget')).toHaveAttribute(
      'data-status',
      'unavailable'
    )
    expect(
      screen.getByText(/Statistics are refreshing. Please check again shortly/i)
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/network down|fallback|source/i)
    ).not.toBeInTheDocument()
    expect(screen.queryByText('15,285')).not.toBeInTheDocument()
    expect(screen.queryByText('2.7M')).not.toBeInTheDocument()
    expect(screen.queryByText('250K MCRT')).not.toBeInTheDocument()
  })

  it('renders current values with customer-facing labels', () => {
    mockUseGameStats.mockReturnValue({
      data: verifiedData(),
      loading: false,
      error: null,
      status: 'live',
      refresh: vi.fn(),
    })

    renderWidget()

    expect(screen.getByTestId('live-stats-widget')).toHaveAttribute(
      'data-status',
      'live'
    )
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('1,234')).toBeInTheDocument()
    expect(screen.getByText('500 MCRT')).toBeInTheDocument()
    expect(screen.getByText('$0.00123')).toBeInTheDocument()
    expect(screen.getByText('MCRT Entry Fees')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Full stats/i })).toHaveAttribute(
      'href',
      '/stats'
    )
  })
})
