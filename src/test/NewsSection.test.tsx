import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/sanity/config', () => ({
  isSanityConfigured: true,
}))

vi.mock('@/lib/sanity/client', () => ({
  fetchBlogPosts: vi.fn(),
}))

import { NewsSection } from '@/components/Cards/NewsSection'
import { fetchBlogPosts } from '@/lib/sanity/client'

afterEach(() => {
  cleanup()
  vi.resetAllMocks()
})

const cmsPosts = [
  {
    _id: 'news-1',
    title: 'A current MagicCraft story',
    description: 'The full official story.',
    category: 'News',
    type: 'News',
    image: 'https://cdn.sanity.io/story.webp',
    slug: 'current-story',
    publishedAt: '2025-04-02T00:00:00.000Z',
    _createdAt: '2025-04-01T00:00:00.000Z',
  },
  {
    _id: 'patch-1',
    title: 'MagicCraft build update',
    description: 'Patch details.',
    category: 'patch update',
    type: 'patch update',
    image: '',
    slug: 'build-update',
    publishedAt: null,
    _createdAt: '2025-03-27T00:00:00.000Z',
  },
]

function renderSection() {
  return render(
    <MemoryRouter>
      <NewsSection />
    </MemoryRouter>
  )
}

describe('MagicCraft News feed', () => {
  it('renders CMS posts as safe internal article links with original dates', async () => {
    vi.mocked(fetchBlogPosts).mockResolvedValue(cmsPosts as never)
    renderSection()

    const article = await screen.findByRole('link', {
      name: /A current MagicCraft story/i,
    })
    expect(article).toHaveAttribute('href', '/blog/current-story')
    expect(article).not.toHaveAttribute('target')
    expect(screen.getByText('2 Apr 2025')).toHaveAttribute(
      'datetime',
      '2025-04-02T00:00:00.000Z'
    )
    expect(screen.getAllByText('MagicCraft editorial')).toHaveLength(2)
  })

  it('normalizes legacy patch categories and exposes filter state', async () => {
    vi.mocked(fetchBlogPosts).mockResolvedValue(cmsPosts as never)
    renderSection()

    await screen.findByText('A current MagicCraft story')
    const patchFilter = screen.getByRole('button', { name: 'Patch notes' })
    expect(patchFilter).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(patchFilter)
    expect(patchFilter).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('MagicCraft build update')).toBeInTheDocument()
    expect(screen.queryByText('A current MagicCraft story')).toBeNull()
  })

  it('uses clearly labeled, safe official fallbacks when CMS fails', async () => {
    vi.mocked(fetchBlogPosts).mockRejectedValue(new Error('CMS offline'))
    renderSection()

    expect(
      await screen.findByText(/editorial archive is temporarily unavailable/i)
    ).toBeInTheDocument()
    const source = screen.getByRole('link', {
      name: /MagicCraft Website Gets Major Upgrade/i,
    })
    expect(source).toHaveAttribute('target', '_blank')
    expect(source).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('never fabricates a blog route for a CMS post without a slug', async () => {
    vi.mocked(fetchBlogPosts).mockResolvedValue([
      { ...cmsPosts[0], _id: 'invalid', slug: null },
    ] as never)
    renderSection()

    await screen.findByText(/editorial archive is temporarily unavailable/i)
    expect(document.querySelector('a[href="/blog/test-blog-post"]')).toBeNull()
  })
})
