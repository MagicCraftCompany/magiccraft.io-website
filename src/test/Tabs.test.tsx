import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Tab, Tabs } from '@/components/tabs'

afterEach(() => {
  cleanup()
  window.history.replaceState({}, '', '/')
})

describe('Tabs', () => {
  it('opens the real contact tab from legacy contact deep links', () => {
    window.history.replaceState({}, '', '/faq?contact=1')

    render(
      <Tabs>
        <Tab id="FAQ" label="FAQ">
          FAQ content
        </Tab>
        <Tab id="contact" label="Contact Team">
          Contact content
        </Tab>
      </Tabs>
    )

    expect(screen.getByRole('tab', { name: 'Contact Team' })).toHaveAttribute(
      'aria-selected',
      'true'
    )
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Contact content')
  })

  it('falls back safely and switches between the tabs it actually receives', () => {
    window.history.replaceState({}, '', '/faq?contact=')

    render(
      <Tabs>
        <Tab id="FAQ" label="FAQ">
          FAQ content
        </Tab>
        <Tab id="contact" label="Contact Team">
          Contact content
        </Tab>
      </Tabs>
    )

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Contact content')
    fireEvent.click(screen.getByRole('tab', { name: 'FAQ' }))
    expect(screen.getByRole('tabpanel')).toHaveTextContent('FAQ content')
  })
})
