import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Footer from '@/components/Footer/Footer'

describe('Footer product truth', () => {
  it('links the current whitepaper version', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('link', { name: 'Whitepaper v3.1' })
    ).toHaveAttribute('href', '/whitepaper')
    expect(screen.queryByText('Whitepaper v3.0')).not.toBeInTheDocument()
  })
})
