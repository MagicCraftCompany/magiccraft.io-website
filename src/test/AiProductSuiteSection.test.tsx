import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/analytics', () => ({
  trackCta: vi.fn(),
}))

import AiProductSuiteSection from '@/components/Home/AiProductSuiteSection'
import { trackCta } from '@/lib/analytics'

describe('AI product suite tracking', () => {
  it('attributes a product-card click once with its catalog id', () => {
    render(<AiProductSuiteSection />)

    fireEvent.click(
      screen.getByRole('link', {
        name: /opens merlin ai as a separate product in a new tab/i,
      })
    )

    expect(trackCta).toHaveBeenCalledTimes(1)
    expect(trackCta).toHaveBeenCalledWith({
      cta: 'open_ai_product',
      location: 'ai_product_suite',
      label: 'merlin',
    })
  })
})
