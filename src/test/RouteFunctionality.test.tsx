import type { ComponentType } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

vi.mock('@/components/Header/Header', () => ({
  default: () => <header data-testid="shared-header">MagicCraft header</header>,
}))

vi.mock('@/components/Footer/Footer', () => ({
  default: () => <footer data-testid="shared-footer">MagicCraft footer</footer>,
}))

vi.mock('@/components/ui/gamedevelopercard', () => ({
  default: () => <div data-testid="developer-features" />,
}))

vi.mock('@/components/Cards/NewsSection', () => ({
  NewsSection: () => <div data-testid="news-section">Latest news</div>,
}))

import GameDeveloper from '@/pages/GameDeveloper'
import Grants from '@/pages/Grants'
import GrantsSuccess from '@/pages/GrantsSuccess'
import Guilds from '@/pages/Guilds'
import NewsPage from '@/pages/McNews'
import SanityStudio from '@/pages/SanityStudio'
import Support from '@/pages/Support'

const APPLICATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdLmfHGXcXaguZynLSIlk7cSjlvBF9etB50SQc6yDCeayeHYw/viewform'

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

describe('destination route functionality', () => {
  it('keeps the grants form actionable and accessible', () => {
    const { container } = renderPage(Grants, '/grants')

    expect(screen.getByLabelText('Team / Company Name')).toBeRequired()
    expect(screen.getByLabelText('Contact Email')).toHaveAttribute(
      'type',
      'email'
    )
    expect(screen.getByLabelText('Brief Description')).toBeRequired()
    expect(screen.getAllByText(/funding is not guaranteed/i)).not.toHaveLength(
      0
    )

    const cryptoCategory = screen.getByRole('button', { name: 'Crypto' })
    expect(cryptoCategory).toHaveAttribute('aria-pressed', 'false')
    fireEvent.click(cryptoCategory)
    expect(cryptoCategory).toHaveAttribute('aria-pressed', 'true')
    expect(
      container.querySelector<HTMLInputElement>('input[name="category"]')
    ).toHaveValue('crypto')

    expect(container.querySelector('form[name="grants"]')).toHaveAttribute(
      'action',
      '/.netlify/functions/submit-grants'
    )
  })

  it('does not claim a direct success-page visit submitted an application', () => {
    renderPage(GrantsSuccess, '/grants/success')

    expect(
      screen.getByRole('heading', { name: 'No submission confirmed' })
    ).toBeInTheDocument()
    expect(screen.getByText(/does not confirm/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Open Grants Form' })
    ).toHaveAttribute('href', '/grants')
  })

  it('shows acceptance only after the intake redirect marker', () => {
    renderPage(GrantsSuccess, '/grants/success?accepted=1')

    expect(
      screen.getByRole('heading', { name: 'Submission accepted' })
    ).toBeInTheDocument()
    expect(screen.getByText(/does not guarantee funding/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to Home' })).toHaveAttribute(
      'href',
      '/'
    )
  })

  it('does not redirect an unconfigured admin route to a placeholder studio', () => {
    renderPage(SanityStudio, '/admin')

    expect(
      screen.getByRole('heading', { name: 'Content studio unavailable' })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/No Sanity project is configured/i)
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to News' })).toHaveAttribute(
      'href',
      '/news'
    )
  })

  it('exposes the verified developer application as direct external links', () => {
    renderPage(GameDeveloper, '/build-on-magiccraft')

    expect(
      screen.getByRole('heading', { level: 1, name: 'Build on MagicCraft' })
    ).toBeInTheDocument()
    expect(screen.getByText(/rewards depend on review/i)).toBeInTheDocument()

    const applyLinks = screen.getAllByRole('link', { name: /Apply/i })
    expect(applyLinks).toHaveLength(2)
    applyLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', APPLICATION_URL)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('labels guild resources according to their real destinations', () => {
    renderPage(Guilds, '/guilds')

    expect(screen.getByText('Player Leaderboard')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Whitepaper/i })).toHaveAttribute(
      'href',
      '/whitepaper'
    )
    expect(
      screen.getByRole('link', { name: /Share in Telegram/i })
    ).toHaveAttribute('href', 'https://t.me/magiccraftgamechat')
  })

  it('makes FAQ search and the email-draft contact flow explicit', () => {
    renderPage(Support, '/faq')

    const search = screen.getByRole('searchbox', {
      name: 'Search support questions',
    })
    fireEvent.change(search, { target: { value: 'no-match-zzzz' } })
    expect(screen.getByRole('status')).toHaveTextContent(
      'No matching questions'
    )

    fireEvent.click(screen.getByRole('tab', { name: /Contact Team/i }))
    expect(screen.getByLabelText('Your email')).toBeRequired()
    expect(screen.getByLabelText('How can we help?')).toBeRequired()
    expect(
      screen.getByRole('button', { name: 'Open Email Draft' })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Nothing is sent until you send it/i)
    ).toBeInTheDocument()
  })

  it('uses a native hash link to reach the latest news feed', () => {
    const { container } = renderPage(NewsPage, '/news')

    expect(
      screen.getByText(/official MagicCraft announcements/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Read the latest MagicCraft news' })
    ).toHaveAttribute('href', '#latest-news')
    expect(container.querySelector('#latest-news')).toContainElement(
      screen.getByTestId('news-section')
    )
  })
})
