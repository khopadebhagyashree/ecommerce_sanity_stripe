import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'A Frame God',
  projectId: 'lp0opx9i',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [], // We will add your car frame schemas here next
  },
})
