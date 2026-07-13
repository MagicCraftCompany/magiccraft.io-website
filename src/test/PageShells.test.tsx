import type { ComponentType } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

vi.mock('@/components/Header/Header', () => ({
  default: () => <header data-testid="shared-header">MagicCraft header</header>,
}))

vi.mock('@/components/Footer/Footer', () => ({
  default: () => <footer data-testid="shared-footer">MagicCraft footer</footer>,
}))

import Bounties from '@/pages/Bounties'
import Careers from '@/pages/Careers'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsAndConditions from '@/pages/TermsAndCondition'

type PageCase = {
  name: string
  path: string
  Page: ComponentType
  heading: string
  backName: RegExp
}

const pages: PageCase[] = [
  {
    name: 'Careers',
    path: '/careers',
    Page: Careers,
    heading: 'Careers at MagicCraft',
    backName: /Back to Home/,
  },
  {
    name: 'Bounties',
    path: '/bounties',
    Page: Bounties,
    heading: 'MagicCraft Bounties',
    backName: /Back to MagicCraft/,
  },
  {
    name: 'Privacy Policy',
    path: '/privacypolicy',
    Page: PrivacyPolicy,
    heading: 'MAGICCRAFT PRIVACY POLICY',
    backName: /Back to MagicCraft/,
  },
  {
    name: 'Terms and Conditions',
    path: '/terms',
    Page: TermsAndConditions,
    heading: 'MAGICCRAFT LOBBY SYSTEM TERMS AND CONDITIONS',
    backName: /Back to MagicCraft/,
  },
]

const renderPage = (Page: ComponentType, path: string) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Page />
      </MemoryRouter>
    </HelmetProvider>
  )

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({}),
    })
  )
})

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
  vi.unstubAllGlobals()
})

describe('shared page shells', () => {
  it.each(pages)(
    '$name keeps global navigation and a router-backed home path',
    ({ Page, path, heading, backName }) => {
      renderPage(Page, path)

      expect(screen.getByTestId('shared-header')).toBeInTheDocument()
      expect(screen.getByRole('main')).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { level: 1, name: heading })
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: backName })).toHaveAttribute(
        'href',
        '/'
      )
      expect(screen.getByTestId('shared-footer')).toBeInTheDocument()
    }
  )
})
