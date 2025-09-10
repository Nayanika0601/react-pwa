import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: change this to '/<REPO>/' when deploying to GitHub Pages project URL
  base: '/react-pwa/',
})
