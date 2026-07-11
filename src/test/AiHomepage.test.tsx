import { render, screen, within } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/components/Header/Header', () => ({
  default: () => <div data-testid="header" />,
}))
vi.mock('@/components/Footer/Footer', () => ({
  default: () => <div data-testid="footer" />,
}))
vi.mock('@/components/Home/MobileBottomBar', () => ({
  default: () => null,
}))

import Homepagemcrt from '@/pages/Homepagemcrt'

describe('AI-first homepage', () => {
  it('leads with the AI suite and keeps the game as an in-development track', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Homepagemcrt />
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'AI products that create, operate and grow.',
      })
    ).toBeInTheDocument()
    const suiteHeading = screen.getByRole('heading', {
      name: 'Start with the job you want done.',
    })
    expect(suiteHeading).toBeInTheDocument()
    const suite = suiteHeading.closest('section')
    expect(suite).not.toBeNull()
    const suiteView = within(suite as HTMLElement)

    for (const product of [
      'Merlin AI',
      'Akyn',
      'MagicAds',
      'MAGAS7',
      'DragonList',
      'DocAI',
    ]) {
      expect(
        suiteView.getByRole('link', { name: new RegExp(product) })
      ).toBeInTheDocument()
    }

    expect(screen.queryByText('SocialMM')).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'The game is still building.' })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/current shipping focus is the AI suite/i)
    ).toBeInTheDocument()
  })
})
