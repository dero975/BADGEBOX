
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      '.replit.dev',
      '.repl.co',
      'localhost',
      '127.0.0.1'
    ],
    hmr: {
      port: 5000,
      overlay: false,
      clientPort: 5000
    }
  }
});
