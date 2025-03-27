import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from '../../schemas';
import { sanityConfig } from './config';

export const studioConfig = defineConfig({
  basePath: '/admin',
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  plugins: [
    deskTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  title: 'MagicCraft Blog',
}); 