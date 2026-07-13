import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

vi.mock('../components/ScrollToTop', () => ({
  default: () => null,
}))

vi.mock('../components/LiveSupport/LiveSupportWidget', () => ({
  default: () => null,
}))

vi.mock('../pages/Hero', () => ({
  default: () => <main data-testid="hero-detail">Hero detail</main>,
}))

vi.mock('../pages/ChooseYourHero', () => ({
  default: () => <main data-testid="hero-directory">Hero directory</main>,
}))

import App from '@/App'

afterEach(() => {
  cleanup()
  window.history.replaceState({}, '', '/')
  vi.clearAllMocks()
})

describe('hero route recovery', () => {
  it('redirects the bare hero path to the roster', async () => {
    window.history.replaceState({}, '', '/hero')

    render(<App />)

    expect(await screen.findByTestId('hero-directory')).toBeInTheDocument()
    expect(window.location.pathname).toBe('/chooseyourhero')
  })

  it('preserves dynamic hero detail routes', async () => {
    window.history.replaceState({}, '', '/hero/aurora')

    render(<App />)

    expect(await screen.findByTestId('hero-detail')).toBeInTheDocument()
    expect(window.location.pathname).toBe('/hero/aurora')
  })
})
