
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: true, // Riabilita hot module reloading
    allowedHosts: ['f1c1d676-9830-4d6f-94c2-a0abbcb14218-00-3crueg285kzn5.kirk.replit.dev']
  }
})
