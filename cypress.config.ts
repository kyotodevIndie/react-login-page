import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: '8div2x',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: 'http://localhost:5173/',
    username: 'kminchelle',
    password: '0lelplR',
  },
})
