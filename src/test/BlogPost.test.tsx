import { cleanup, render, screen } from '@testing-library/react'
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
})
