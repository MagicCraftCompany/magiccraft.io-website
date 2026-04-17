import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'

// Mock heavy components to avoid loading real assets in tests
vi.mock('@/components/Home/HeroSection', () => ({
  default: () => <div data-testid="hero-section">Hero</div>,
}))
vi.mock('@/components/LiveSupport/LiveSupportWidget', () => ({
  default: () => null,
}))

describe('App routing', () => {
  it('renders without crashing at root route', async () => {
    const { default: App } = await import('../App')
    const { container } = render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    )
    expect(container).toBeTruthy()
  })
})
