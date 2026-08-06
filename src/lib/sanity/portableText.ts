import { sanityConfig } from './config'

export type SafePortableTextLink =
  | { kind: 'internal'; href: string }
  | { kind: 'external'; href: string }

export function getSafePortableTextLink(
  value?: string
): SafePortableTextLink | null {
  const href = value?.trim()
  if (!href) return null

  if (href.startsWith('/') && !href.startsWith('//')) {
    return { kind: 'internal', href }
  }

  try {
    const parsed = new URL(href)
    if (parsed.protocol !== 'https:') return null
    if (parsed.origin === 'https://magiccraft.io') {
      return {
        kind: 'internal',
        href: `${parsed.pathname}${parsed.search}${parsed.hash}`,
      }
    }
    return { kind: 'external', href: parsed.toString() }
  } catch {
    return null
  }
}

export function sanityImageUrlFromReference(reference?: string) {
  if (!reference) return null
  const match = reference.match(
    /^image-([a-zA-Z0-9]+)-(\d+x\d+)-([a-zA-Z0-9]+)$/
  )
  if (!match) return null

  const [, assetId, dimensions, format] = match
  return `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/${assetId}-${dimensions}.${format}`
}

export function getSafeSanityImageUrl(value?: string) {
  const imageUrl = value?.trim()
  if (!imageUrl) return null

  try {
    const parsed = new URL(imageUrl)
    const expectedPath = `/images/${sanityConfig.projectId}/${sanityConfig.dataset}/`

    if (
      parsed.origin !== 'https://cdn.sanity.io' ||
      !parsed.pathname.startsWith(expectedPath) ||
      parsed.pathname.length <= expectedPath.length
    ) {
      return null
    }

    return parsed.toString()
  } catch {
    return null
  }
}
