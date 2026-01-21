import { createClient } from '@sanity/client';
import { sanityConfig } from './config';
import { isSanityConfigured } from './config'

// Create a browser-friendly Sanity client
export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: sanityConfig.useCdn,
      // Use import.meta.env for Vite environment variables
      token: import.meta.env.VITE_SANITY_API_TOKEN, // Only needed if you want to update content
    })
  : null

export async function fetchBlogPosts() {
  if (!sanityClient) return []
  try {
    // Query based on the default Sanity blog schema
    const data = await sanityClient.fetch(`*[_type == "post"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      "description": excerpt,
      "category": categories[0]->title,
      "type": categories[0]->title,
      "image": mainImage.asset->url,
      publishedAt,
      _createdAt
    }`);
    return data;
  } catch (error) {
    throw error; // Re-throw to trigger fallback in component
  }
}

export async function fetchBlogPostBySlug(slug: string) {
  if (!sanityClient) return null
  if (!slug) {
    return null;
  }
  
  try {
    // First try direct match on slug.current
    const data = await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        "description": excerpt,
        "category": categories[0]->title,
        "type": categories[0]->title,
        "image": mainImage.asset->url,
        body,
        publishedAt,
        _createdAt
      }`,
      { slug }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

// Test function to debug connection
export async function testSanityConnection() {
  if (!sanityClient) return null
  try {
    // Simple query to get all document types
    const data = await sanityClient.fetch(`*[_type == "post"][0...5]`);
    return data;
  } catch (error) {
    return null;
  }
} 