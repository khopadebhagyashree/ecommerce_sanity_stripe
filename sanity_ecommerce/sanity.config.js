import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure' // Updated from deskTool
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'A Frame God',
  projectId: 'lp0opx9i', // Double-check this is TWO zeros!
  dataset: 'production',
  basePath: '/admin', // Keep it here if you want to access it at localhost:3333/admin
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})