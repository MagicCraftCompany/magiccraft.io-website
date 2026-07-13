import type { ComponentType } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { MCRT_CONTRACT_CHECKSUM } from '@/constants'

vi.mock('@/components/Header/Header', () => ({
  default: () => <header data-testid="shared-header">MagicCraft header</header>,
}))

vi.mock('@/components/Footer/Footer', () => ({
  default: () => <footer data-testid="shared-footer">MagicCraft footer</footer>,
}))

import LeaderboardPage from '@/pages/LeaderBoard'
import Server from '@/pages/serverStatus'
import HoldersPage from '@/pages/TopHolders'
import Verify from '@/pages/Verify'

const renderPage = (Page: ComponentType, path: string) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Page />
      </MemoryRouter>
    </HelmetProvider>
  )

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

describe('truthful data routes', () => {
  it('labels server telemetry unavailable and links to the real public services', () => {
    renderPage(Server, '/server')

    expect(
      screen.getByRole('heading', { name: 'MagicCraft service status' })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Public uptime telemetry is not available/i)
    ).toBeInTheDocument()
    expect(screen.getAllByText('Not monitored here')).toHaveLength(3)
    expect(screen.getByText('Source-backed')).toBeInTheDocument()
    expect(
      screen.queryByText(/Failed to connect to the database/i)
    ).not.toBeInTheDocument()
    expect(screen.queryByText(/High latency detected/i)).not.toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Game lobby/i })).toHaveAttribute(
      'href',
      'https://lobby.magiccraft.io/'
    )
    expect(screen.getByRole('link', { name: /Marketplace/i })).toHaveAttribute(
      'href',
      'https://app.magiccraft.io/marketplace/explorer'
    )
    expect(
      screen.getByRole('link', { name: 'View source-backed stats' })
    ).toHaveAttribute('href', '/stats')
    expect(
      screen.getByRole('link', { name: /Game statistics/i })
    ).toHaveAttribute('href', '/stats')
  })

  it('hands the retired internal leaderboard off to the live lobby leaderboard', () => {
    renderPage(LeaderboardPage, '/leaderboard')

    expect(
      screen.getByRole('heading', { name: 'MagicCraft Leaderboard' })
    ).toBeInTheDocument()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    expect(screen.queryByText('MagicCraft Verify')).not.toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Open Live Leaderboard' })
    ).toHaveAttribute('href', 'https://lobby.magiccraft.io/leaderboard')
    expect(
      screen.getByRole('link', { name: 'View Game Stats' })
    ).toHaveAttribute('href', '/stats')
  })

  it('removes placeholder holder rows and uses the attributable chain explorer', () => {
    renderPage(HoldersPage, '/topholders')

    expect(
      screen.getByRole('heading', { name: 'MCRT holder distribution' })
    ).toBeInTheDocument()
    expect(screen.getByText(MCRT_CONTRACT_CHECKSUM)).toBeInTheDocument()
    expect(screen.queryByText(/Load next 10 holders/i)).not.toBeInTheDocument()
    expect(
      screen.queryByText('0xe03629571a6cc91c5c69758f310d9341a2932d53')
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'View On-Chain Holder Data' })
    ).toHaveAttribute(
      'href',
      `https://bscscan.com/token/${MCRT_CONTRACT_CHECKSUM}#balances`
    )
  })

  it('limits Verify to its supported directory and rejects the broken Rent domain', () => {
    renderPage(Verify, '/verify')

    fireEvent.change(screen.getByLabelText('Choose the platform:'), {
      target: { value: 'website' },
    })
    fireEvent.change(screen.getByLabelText('Entry Query'), {
      target: { value: 'https://rent.magiccraft.io/' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Check' }))

    expect(
      screen.getByText(
        'This entry is not in the current official MagicCraft list.'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(/no phone-number or WeChat verification is offered/i)
    ).toBeInTheDocument()
    expect(
      screen.queryByText(
        /Website link, email address, phone number, WeChat ID/i
      )
    ).not.toBeInTheDocument()
  })
})
