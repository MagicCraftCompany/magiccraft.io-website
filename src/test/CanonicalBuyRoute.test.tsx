import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

vi.mock('../components/ScrollToTop', () => ({ default: () => null }))
vi.mock('../components/LiveSupport/LiveSupportWidget', () => ({
  default: () => null,
}))
vi.mock('../pages/Pricing', () => ({
  default: () => <main data-testid="buy-mcrt-page">Buy MCRT</main>,
}))

import App from '@/App'

afterEach(() => {
  cleanup()
  window.history.replaceState({}, '', '/')
})

describe('canonical MCRT access route', () => {
  it.each(['/pricing', '/buy', '/get-mcrt'])(
    'redirects %s to /buy-mcrt',
    async (path) => {
      window.history.replaceState({}, '', path)
      render(<App />)

      expect(await screen.findByTestId('buy-mcrt-page')).toBeInTheDocument()
      expect(window.location.pathname).toBe('/buy-mcrt')
    }
  )

  it('renders the buyer guide directly at /buy-mcrt', async () => {
    window.history.replaceState({}, '', '/buy-mcrt')
    render(<App />)

    expect(await screen.findByTestId('buy-mcrt-page')).toBeInTheDocument()
    expect(window.location.pathname).toBe('/buy-mcrt')
  })
})
