import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  server: {
    // Permite que o Docker acesse o servidor do Vite
    host: true, 
    strictPort: true,
    port: 5173,
    // Faz o "Fast Refresh" funcionar dentro do container no Windows
    watch: {
      usePolling: true,
    },
  },
})