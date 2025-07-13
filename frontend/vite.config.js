import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  base: "/CI-Pipeline/",
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html'],
      enabled: true,
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
    exclude: [...configDefaults.exclude, 'e2e/**'],
  },
})
