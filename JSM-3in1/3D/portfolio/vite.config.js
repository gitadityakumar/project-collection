import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // or your specific IP
    hmr: {
      host: '192.168.29.59', // Replace with your computer's local IP
      protocol: 'ws', // WebSocket protocol
    },
  },
  plugins: [react()],
})
