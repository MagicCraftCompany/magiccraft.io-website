import { createClient } from '@sanity/client'
import { isSanityConfigured, sanityConfig } from './config'

// Create a browser-friendly Sanity client
export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: sanityConfig.useCdn,
    })
  : null

export async function fetchBlogPosts() {
  if (!sanityClient) return []
  const data =
    await sanityClient.fetch(`*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    "description": coalesce(excerpt, pt::text(body)),
    "category": categories[0]->title,
    "type": categories[0]->title,
    "image": mainImage.asset->url,
    publishedAt,
    _createdAt
  }`)
  return data
}

export async function fetchBlogPostBySlug(slug: string) {
  if (!sanityClient) return null
  if (!slug) {
    return null
  }

  const data = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      "description": coalesce(excerpt, pt::text(body)),
      "category": categories[0]->title,
      "type": categories[0]->title,
      "image": mainImage.asset->url,
      body,
      publishedAt,
      _createdAt
    }`,
    { slug }
  )
  return data
}

// Test function to debug connection
export async function testSanityConnection() {
  if (!sanityClient) return null
  try {
    // Simple query to get all document types
    const data = await sanityClient.fetch(`*[_type == "post"][0...5]`)
    return data
  } catch {
    return null
  }
}
