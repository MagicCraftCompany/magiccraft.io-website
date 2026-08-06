export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2023-05-03',
  useCdn: true,
}

export const isSanityConfigured =
  Boolean(sanityConfig.projectId) &&
  sanityConfig.projectId !== 'your-project-id'
