import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import PortableText, {
  type SanityBlock,
} from '@/components/Editorial/PortableText'
import {
  clampEditorialDescription,
  normalizeEditorialCategory,
  normalizeEditorialType,
  toNewsArticle,
  validEditorialDate,
} from '@/lib/editorial'
import {
  getSafeSanityImageUrl,
  getSafePortableTextLink,
  sanityImageUrlFromReference,
} from '@/lib/sanity/portableText'
import { sanityConfig } from '@/lib/sanity/config'

describe('editorial mapping', () => {
  it('normalizes legacy patch categories and requires a real title and slug', () => {
    expect(normalizeEditorialType('patch update')).toBe('Patch Notes')
    expect(normalizeEditorialCategory('patch update')).toBe('Patch Notes')
    expect(normalizeEditorialType('News')).toBe('News')

    expect(
      toNewsArticle({
        _id: 'missing-slug',
        title: 'No route',
        slug: null,
      })
    ).toBeNull()
  })

  it('prefers a valid published date and safely falls back to creation time', () => {
    expect(
      validEditorialDate(
        'invalid-date',
        '2025-04-02T00:00:00.000Z'
      )?.toISOString()
    ).toBe('2025-04-02T00:00:00.000Z')

    const article = toNewsArticle({
      _id: 'post-1',
      title: 'MagicCraft update',
      slug: 'magiccraft-update',
      category: 'News',
      image: null,
      description: 'A useful official update.',
      publishedAt: '2025-04-02T00:00:00.000Z',
    })

    expect(article).toMatchObject({
      readMoreLink: '/blog/magiccraft-update',
      dateLabel: '2 Apr 2025',
      image: '/magiccraft-social-preview.webp',
      sourceLabel: 'MagicCraft editorial',
    })
  })

  it('turns long CMS body text into a concise card description', () => {
    const result = clampEditorialDescription('word '.repeat(80))
    expect(result.length).toBeLessThanOrEqual(181)
    expect(result).toMatch(/…$/)
  })
})

describe('safe Portable Text rendering', () => {
  it('preserves headings, nested lists, emphasis, and safe links', () => {
    const blocks: SanityBlock[] = [
      {
        _key: 'heading',
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Lobby guide' }],
      },
      {
        _key: 'paragraph',
        _type: 'block',
        style: 'normal',
        markDefs: [
          {
            _key: 'external',
            _type: 'link',
            href: 'https://lobby.magiccraft.io',
          },
          { _key: 'unsafe', _type: 'link', href: 'javascript:alert(1)' },
        ],
        children: [
          { _type: 'span', text: 'Choose ', marks: [] },
          { _type: 'span', text: 'carefully', marks: ['strong'] },
          { _type: 'span', text: ' in the lobby', marks: ['external'] },
          { _type: 'span', text: ' and never here', marks: ['unsafe'] },
        ],
      },
      {
        _key: 'item-1',
        _type: 'block',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', text: 'First step' }],
      },
      {
        _key: 'item-2',
        _type: 'block',
        listItem: 'bullet',
        level: 2,
        children: [{ _type: 'span', text: 'Nested detail' }],
      },
    ]

    render(
      <MemoryRouter>
        <PortableText blocks={blocks} />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { level: 2, name: 'Lobby guide' })
    ).toBeInTheDocument()
    expect(screen.getByText('carefully').tagName).toBe('STRONG')

    const external = screen.getByRole('link', { name: /in the lobby/i })
    expect(external).toHaveAttribute('href', 'https://lobby.magiccraft.io/')
    expect(external).toHaveAttribute('target', '_blank')
    expect(external).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.queryByRole('link', { name: /never here/i })).toBeNull()

    const rootList = screen.getAllByRole('list')[0]
    expect(within(rootList).getByText('First step')).toBeInTheDocument()
    expect(within(rootList).getByText('Nested detail')).toBeInTheDocument()
  })

  it('keeps same-site links in the router and validates Sanity image refs', () => {
    expect(
      getSafePortableTextLink('https://magiccraft.io/news?from=post')
    ).toEqual({ kind: 'internal', href: '/news?from=post' })
    expect(getSafePortableTextLink('http://magiccraft.io/news')).toBeNull()
    expect(getSafePortableTextLink('data:text/html,bad')).toBeNull()
    expect(sanityImageUrlFromReference('image-abc123-800x600-webp')).toContain(
      '/abc123-800x600.webp'
    )
    expect(sanityImageUrlFromReference('not-an-image-ref')).toBeNull()
  })

  it('renders only images hosted in the configured Sanity dataset', () => {
    const safeImage = `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/abc123-800x600.webp`
    const unsafeImage = 'https://attacker.example/tracking.webp'

    expect(getSafeSanityImageUrl(safeImage)).toBe(safeImage)
    expect(getSafeSanityImageUrl(unsafeImage)).toBeNull()
    expect(getSafeSanityImageUrl('data:image/svg+xml,bad')).toBeNull()

    render(
      <MemoryRouter>
        <PortableText
          blocks={[
            {
              _key: 'safe-image',
              _type: 'image',
              alt: 'Official article artwork',
              asset: { url: safeImage },
            },
            {
              _key: 'unsafe-image',
              _type: 'image',
              alt: 'Untrusted article artwork',
              asset: { url: unsafeImage },
            },
          ]}
        />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('img', { name: 'Official article artwork' })
    ).toHaveAttribute('src', safeImage)
    expect(
      screen.queryByRole('img', { name: 'Untrusted article artwork' })
    ).toBeNull()
  })
})
