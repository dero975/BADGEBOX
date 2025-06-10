
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5000,
    host: '0.0.0.0',
    strictPort: true,
    cors: true,
    open: false,
    allowedHosts: [
      'localhost',
      '127.0.0.1'
    ],
    hmr: false,
    ws: false
  },
  build: {
    rollupOptions: {
      external: ['/@vite/client']
    }
  },
  define: {
    'import.meta.hot': 'undefined'
  }
});
