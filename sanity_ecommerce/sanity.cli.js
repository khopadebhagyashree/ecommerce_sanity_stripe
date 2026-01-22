import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'lp0opx9i',
    dataset: 'production'
  }, // <--- Add this comma here!
  project: {
    basePath: '/admin' 
  }
})