import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
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
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-charts': ['recharts'],
          'vendor-sanity': ['@sanity/client'],
          'vendor-styled': ['styled-components'],
        },
      },
    },
  },
})
