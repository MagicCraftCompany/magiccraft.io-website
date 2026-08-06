import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/components/Header/Header', () => ({
  default: () => <header>MagicCraft header</header>,
}))

vi.mock('@/components/Footer/Footer', () => ({
  default: () => <footer>MagicCraft footer</footer>,
}))

vi.mock('@/lib/sanity/client', () => ({
  fetchBlogPostBySlug: vi.fn(),
}))

import { fetchBlogPostBySlug } from '@/lib/sanity/client'
import BlogPost from '@/pages/BlogPost'

afterEach(() => {
  cleanup()
  vi.resetAllMocks()
})

describe('blog post truth and date handling', () => {
  it('falls back to the creation date and labels historical reward claims', async () => {
    vi.mocked(fetchBlogPostBySlug).mockResolvedValue({
      _id: 'post-1',
      title: 'Historical MagicCraft update',
      description: 'An archived update.',
      category: 'Updates',
      type: 'Updates',
      image: '',
      publishedAt: null,
      _createdAt: '2025-03-27T12:00:00.000Z',
      body: [
        {
          _type: 'block',
          children: [{ _type: 'span', text: 'A play-to-earn update.' }],
        },
      ],
    } as never)

    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/blog/historical-update']}>
          <Routes>
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(
      await screen.findByRole('heading', {
        name: 'Historical MagicCraft update',
      })
    ).toBeInTheDocument()
    expect(screen.getByText('March 27, 2025')).toBeInTheDocument()
    expect(screen.queryByText(/January 1, 1970/i)).not.toBeInTheDocument()
    expect(screen.getByRole('note')).toHaveTextContent(
      /no reward or income is guaranteed/i
    )
  })

  it('prefers a valid publication date and renders rich article structure', async () => {
    vi.mocked(fetchBlogPostBySlug).mockResolvedValue({
      _id: 'post-2',
      title: 'Structured update',
      description: null,
      category: 'patch update',
      type: 'patch update',
      image: '',
      publishedAt: '2025-04-02T08:00:00.000Z',
      _createdAt: '2025-03-27T12:00:00.000Z',
      body: [
        {
          _key: 'heading',
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'What changed' }],
        },
        {
          _key: 'item',
          _type: 'block',
          listItem: 'bullet',
          level: 1,
          children: [
            { _type: 'span', text: 'Improved combat', marks: ['strong'] },
          ],
        },
      ],
    } as never)

    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/blog/structured-update']}>
          <Routes>
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(
      await screen.findByRole('heading', { name: 'Structured update' })
    ).toBeInTheDocument()
    expect(screen.getByText('April 2, 2025')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What changed' })
    ).toBeInTheDocument()
    expect(screen.getByText('Improved combat').tagName).toBe('STRONG')
    expect(screen.getByText('Patch Notes')).toBeInTheDocument()
  })

  it('shows a calm generic state without exposing a CMS error', async () => {
    vi.mocked(fetchBlogPostBySlug).mockRejectedValue(
      new Error('private upstream diagnostic')
    )

    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/blog/unavailable']}>
          <Routes>
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    )

    expect(
      await screen.findByRole('heading', { name: 'Article unavailable' })
    ).toBeInTheDocument()
    expect(screen.queryByText(/private upstream diagnostic/i)).toBeNull()
    expect(screen.getByRole('link', { name: 'Browse News' })).toHaveAttribute(
      'href',
      '/news'
    )
    await waitFor(() => {
      expect(
        document.head.querySelector('meta[name="robots"]')
      ).toHaveAttribute('content', 'noindex,nofollow')
    })
  })
})
