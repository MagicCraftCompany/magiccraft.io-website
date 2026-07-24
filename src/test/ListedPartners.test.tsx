import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ListedPartners } from '@/components/Partners/Partners'

describe('MCRT listed partners', () => {
  it('prioritizes Bybit and PancakeSwap and keeps only active HTX as secondary', () => {
    render(<ListedPartners />)

    expect(
      screen.getByRole('link', { name: /Open Bybit MCRT\/USDT spot market/i })
    ).toHaveAttribute('data-listed-priority', 'primary')
    expect(
      screen.getByRole('link', {
        name: /Open PancakeSwap MCRT\/WBNB pool on BNB Chain/i,
      })
    ).toHaveAttribute('data-listed-priority', 'primary')
    expect(
      screen.getByRole('link', { name: /Open HTX MCRT\/USDT spot market/i })
    ).toHaveAttribute('data-listed-priority', 'secondary')

    for (const removedVenue of [
      'MEXC',
      'Gate.io',
      'Biconomy',
      'WEEX',
      'Bitunix',
    ]) {
      expect(screen.queryByText(removedVenue)).not.toBeInTheDocument()
    }
  })
})
