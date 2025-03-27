import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'blogging website',

  projectId: 'basag4bs',
  dataset: 'blogs',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
