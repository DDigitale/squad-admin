import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  outDir: 'build',
  manifest: {
    name: 'OC Admin Panel',
    short_name: 'OC Admin',
    description: 'Squad admin panel for OC',
    theme_color: '#212122',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
})

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), vitePWA],
  build: {
    outDir: 'build',
  },
})
