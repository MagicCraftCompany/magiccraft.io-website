import { render, screen } from '@testing-library/react'
import { Sparkles } from 'lucide-react'
import { describe, expect, it } from 'vitest'
import {
  homePrimaryActionClass,
  homeSecondaryActionClass,
} from '@/components/Home/homeStyles'
import HomeSectionIntro from '@/components/Home/ui/HomeSectionIntro'

describe('homepage design guardrails', () => {
  it('keeps shared actions calm, rounded and keyboard visible', () => {
    for (const actionClass of [
      homePrimaryActionClass,
      homeSecondaryActionClass,
    ]) {
      expect(actionClass).toContain('rounded-full')
      expect(actionClass).toContain('focus-visible:ring-2')
      expect(actionClass).toContain('motion-reduce:transition-none')
      expect(actionClass).not.toContain('transition-all')
    }
  })

  it('uses the shared product-led section hierarchy', () => {
    render(
      <HomeSectionIntro
        icon={Sparkles}
        eyebrow="Product family"
        title="A clear product promise."
        description="A concise explanation."
      />
    )

    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'A clear product promise.',
    })
    expect(heading).toHaveClass('font-sans', 'font-semibold', 'text-balance')
    expect(heading).not.toHaveClass('font-serif', 'font-black')
  })
})
