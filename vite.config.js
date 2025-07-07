import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    host: true, // 📱 Enable local network access
    port: 5173, // (Optional) Fixed port
  },
})
