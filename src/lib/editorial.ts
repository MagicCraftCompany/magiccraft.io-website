import type { NewsArticle } from '@/data/newsData'

export interface SanityBlogPostSummary {
  _id: string
  title?: string | null
  description?: string | null
  category?: string | null
  type?: string | null
  image?: string | null
  slug?: string | null
  publishedAt?: string | null
  _createdAt?: string | null
}

const FALLBACK_EDITORIAL_IMAGE = '/magiccraft-social-preview.webp'
const MAX_CARD_DESCRIPTION_LENGTH = 180

export function normalizeEditorialType(
  category?: string | null
): NewsArticle['type'] {
  return category?.toLowerCase().includes('patch') ? 'Patch Notes' : 'News'
}

export function normalizeEditorialCategory(category?: string | null) {
  const value = category?.trim()
  if (!value) return 'MagicCraft update'
  if (value.toLowerCase().includes('patch')) return 'Patch Notes'
  return value
}

export function validEditorialDate(
  publishedAt?: string | null,
  createdAt?: string | null
) {
  for (const candidate of [publishedAt, createdAt]) {
    if (!candidate) continue
    const date = new Date(candidate)
    if (!Number.isNaN(date.getTime())) return date
  }
  return null
}

export function formatEditorialDate(date: Date | null) {
  if (!date) return undefined
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function clampEditorialDescription(value?: string | null) {
  const description = value?.replace(/\s+/g, ' ').trim()
  if (!description) return 'Read this update from the MagicCraft archive.'
  if (description.length <= MAX_CARD_DESCRIPTION_LENGTH) return description

  const shortened = description.slice(0, MAX_CARD_DESCRIPTION_LENGTH + 1)
  const finalSpace = shortened.lastIndexOf(' ')
  const safeEnd = finalSpace > 120 ? finalSpace : MAX_CARD_DESCRIPTION_LENGTH
  return `${shortened.slice(0, safeEnd).trimEnd()}…`
}

export function toNewsArticle(post: SanityBlogPostSummary): NewsArticle | null {
  const slug = post.slug?.trim()
  const title = post.title?.trim()
  if (!slug || !title) return null

  const publishDate = validEditorialDate(post.publishedAt, post._createdAt)
  const category = normalizeEditorialCategory(post.category || post.type)

  return {
    id: post._id,
    type: normalizeEditorialType(post.type || post.category),
    category,
    title,
    description: clampEditorialDescription(post.description),
    image: post.image?.trim() || FALLBACK_EDITORIAL_IMAGE,
    dateLabel: formatEditorialDate(publishDate),
    dateTime: publishDate?.toISOString(),
    sourceLabel: 'MagicCraft editorial',
    readMoreLink: `/blog/${encodeURIComponent(slug)}`,
  }
}

export function isInternalEditorialLink(href: string) {
  return href.startsWith('/') && !href.startsWith('//')
}

export { FALLBACK_EDITORIAL_IMAGE }
