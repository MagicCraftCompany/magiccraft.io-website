import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(), 
    svgr(),
    nodePolyfills({
      // To exclude specific polyfills, add them to this list:
      exclude: [
        // 'fs', // Excludes the polyfill for 'fs' and 'node:fs'.
      ],
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      // Whether to polyfill node: protocol imports.
      protocolImports: true,
    }),
  ],
  server: {
    proxy: {
      // Dev-only: avoid CoinGecko CORS by proxying through Vite.
      '/api/mcrt-price': {
        target: 'https://api.coingecko.com',
        changeOrigin: true,
        rewrite: () =>
          '/api/v3/simple/price?ids=magiccraft&vs_currencies=usd&include_24hr_change=true',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
