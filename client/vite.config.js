import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:10000/graphql',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
