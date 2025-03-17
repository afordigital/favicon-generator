import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: ['/fonts/*.woff2'],
      manifest: {
        name: 'Favicon Maker',
        short_name: 'Favicon Maker',
        description: 'Design and customize your own favicons with ease. Convert images, draw from scratch, or use our advanced tools to give your website a unique touch.',
        theme_color: '#09090b',
        icons: [
          {
            src: 'rataTroncha.ico',
            sizes: '192x192',
            type: 'image/ico'
          },
          {
            src: 'rataTroncha.ico',
            sizes: '512x512',
            type: 'image/ico'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
