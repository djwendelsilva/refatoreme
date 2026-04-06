import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  // Ajustado para o seu repositório: https://github.com/djwendelsilva/refatoreme
  base: "/refatoreme/", 
  server: {
    host: true, 
    strictPort: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
})