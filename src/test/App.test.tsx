import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'

// Mock heavy route surfaces to keep the routing smoke test focused and stable.
vi.mock('../pages/Homepagemcrt', () => ({
  default: () => <main data-testid="home-page">Home</main>,
}))
vi.mock('../components/LiveSupport/LiveSupportWidget', () => ({
  default: () => null,
}))

describe('App routing', () => {
  it('renders without crashing at root route', async () => {
    const { default: App } = await import('../App')
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    )
    expect(await screen.findByTestId('home-page')).toBeInTheDocument()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })
})
