export const sanityConfig = {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id', // Replace with your Sanity project ID
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production', // or 'development'
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2023-05-03', // Use a date that works for you
    useCdn: true,
  }; 