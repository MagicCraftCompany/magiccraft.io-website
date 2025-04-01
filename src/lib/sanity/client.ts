import { createClient } from '@sanity/client';
import { sanityConfig } from './config';

// Create a browser-friendly Sanity client
export const sanityClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
  // Use import.meta.env for Vite environment variables
  token: import.meta.env.VITE_SANITY_API_TOKEN, // Only needed if you want to update content
});

export async function fetchBlogPosts() {
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
    console.log("Fetched data from Sanity:", data);
    return data;
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
    throw error; // Re-throw to trigger fallback in component
  }
}

export async function fetchBlogPostBySlug(slug: string) {
  if (!slug) {
    console.error("No slug provided to fetchBlogPostBySlug");
    return null;
  }
  
  console.log("Fetching post with slug:", slug);
  
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
    
    console.log("Fetched post by slug:", data);
    
    // If not found, try to get any post (for debugging)
    if (!data) {
      console.log("Post not found, fetching the first available post");
      const firstPost = await sanityClient.fetch(
        `*[_type == "post"][0] {
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
        }`
      );
      console.log("First available post:", firstPost);
    }
    
    return data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}

// Test function to debug connection
export async function testSanityConnection() {
  try {
    // Simple query to get all document types
    const data = await sanityClient.fetch(`*[_type == "post"][0...5]`);
    console.log("Test Sanity data:", data);
    return data;
  } catch (error) {
    console.error("Error connecting to Sanity:", error);
    return null;
  }
} 