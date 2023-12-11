/// <reference types= "vitest" />
/// <reference types= "vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  define: {
    'process.env': process.env,
    VITE_BASE_URL: process.env.VITE_BASE_URL,
  },
})
