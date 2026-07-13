import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import EcosystemSystemsSection from '@/components/Home/EcosystemSystemsSection'
import { ECOSYSTEM_SYSTEM_GROUPS } from '@/data/ecosystemSystems'

describe('ecosystem system map', () => {
  it('renders every current system once with its truthful status and path', () => {
    render(
      <MemoryRouter>
        <EcosystemSystemsSection />
      </MemoryRouter>
    )

    const expectedSystems = ECOSYSTEM_SYSTEM_GROUPS.flatMap(
      (group) => group.systems
    )

    for (const system of expectedSystems) {
      const heading = screen.getByRole('heading', { name: system.name })
      const destination = heading.closest('a')
      expect(destination).not.toBeNull()
      expect(destination).toHaveAttribute('href', system.href)
      expect(
        within(destination as HTMLElement).getByText(system.status)
      ).toBeInTheDocument()
    }

    expect(screen.queryByText('Rent (Testnet)')).not.toBeInTheDocument()
    expect(screen.queryByText('SocialMM')).not.toBeInTheDocument()
    expect(screen.queryByText('Polybilities')).not.toBeInTheDocument()
  })

  it('marks incomplete data and broken public metrics as degraded', () => {
    render(
      <MemoryRouter>
        <EcosystemSystemsSection />
      </MemoryRouter>
    )

    const statsLink = screen
      .getByRole('heading', { name: 'Game Stats' })
      .closest('a')
    const pledgingLink = screen
      .getByRole('heading', { name: 'Pledging' })
      .closest('a')
    const lobbiesLink = screen
      .getByRole('heading', { name: 'Web3 Lobbies' })
      .closest('a')

    expect(
      within(statsLink as HTMLElement).getByText('Partial data')
    ).toBeInTheDocument()
    expect(
      within(pledgingLink as HTMLElement).getByText('Degraded')
    ).toBeInTheDocument()
    expect(
      within(lobbiesLink as HTMLElement).getByText('Degraded')
    ).toBeInTheDocument()
  })
})
