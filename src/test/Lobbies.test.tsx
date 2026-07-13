import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/components/Header/Header', () => ({
  default: () => <header>MagicCraft header</header>,
}))

vi.mock('@/components/Footer/Footer', () => ({
  default: () => <footer>MagicCraft footer</footer>,
}))

import Lobbies from '@/pages/Lobbies'

const lobbyFeed = [
  {
    id: '100',
    name: 'Weekly BTC VIP battle',
    status: 0,
    max_players: 20,
    players_count: 3,
    game_mode_id: 8,
    map_id: 56,
    region: 'Europe',
    type: 'AUTOMATIC_VIP',
    scheduled_at_open: '2030-01-01T12:00:00.000Z',
    coin_themed_map_type: 'BTC',
  },
  {
    id: '101',
    name: 'Hourly free 10 player war',
    status: 0,
    max_players: 10,
    players_count: 0,
    game_mode_id: 5,
    map_id: 40,
    region: 'Asia',
    type: 'AUTOMATIC_PUBLIC',
    scheduled_at_open: '2030-01-01T13:00:00.000Z',
    coin_themed_map_type: 'MCRT',
  },
]

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('lobby discovery page', () => {
  it('renders the live schedule without invented reward balances', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: true, json: async () => lobbyFeed })
    )

    render(
      <HelmetProvider>
        <MemoryRouter>
          <Lobbies />
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(
      screen.getByRole('heading', { name: 'Find your next MagicCraft match.' })
    ).toBeInTheDocument()
    expect(await screen.findByText('Weekly BTC VIP battle')).toBeInTheDocument()
    expect(screen.getByText('Hourly free 10 player war')).toBeInTheDocument()
    expect(document.body.textContent).not.toMatch(
      /1,001 MCRT|0\.00048 BTC|0\.019 ETH|22\.6 XRP|degraded|fallback/i
    )
    expect(
      screen.getAllByRole('link', { name: /Review and join/i })[0]
    ).toHaveAttribute('href', 'https://lobby.magiccraft.io/?crypto=btc')
  })

  it('filters by token and search without leaving empty lobby groups', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: true, json: async () => lobbyFeed })
    )

    render(
      <HelmetProvider>
        <MemoryRouter>
          <Lobbies />
        </MemoryRouter>
      </HelmetProvider>
    )

    await screen.findByText('Weekly BTC VIP battle')
    fireEvent.click(screen.getByRole('button', { name: 'BTC' }))
    expect(screen.getByText('Weekly BTC VIP battle')).toBeInTheDocument()
    expect(
      screen.queryByText('Hourly free 10 player war')
    ).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Search matches'), {
      target: { value: 'no match' },
    })
    expect(
      screen.getByRole('heading', { name: 'No matching lobbies' })
    ).toBeInTheDocument()
  })

  it('shows an honest retry state when the schedule cannot load', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))

    render(
      <HelmetProvider>
        <MemoryRouter>
          <Lobbies />
        </MemoryRouter>
      </HelmetProvider>
    )

    await waitFor(() =>
      expect(
        screen.getByRole('heading', {
          name: 'Schedule temporarily unavailable',
        })
      ).toBeInTheDocument()
    )
    expect(
      screen.getByRole('button', { name: 'Try again' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Open official lobby' })
    ).toHaveAttribute('href', 'https://lobby.magiccraft.io/')
  })
})
