import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
    "registerType": "autoUpdate",
    "manifest": {
        "name": "AudioPod - Offline Podcast Notes Queue",
        "short_name": "AudioPod",
        "description": "Organize your podcast episode queue, take timestamped show notes, and track listening progress.",
        "theme_color": "#8B5CF6",
        "background_color": "#ffffff",
        "display": "standalone",
        "icons": [
            {
                "src": "pwa-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "pwa-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }
})
  ]
});
