import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api-uploads': {
        target: 'https://polaroid-api-theta.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-uploads/, '/uploads'),
        secure: true
      }
    }
  }
})
