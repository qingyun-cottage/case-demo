import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        Components({
            resolvers: [VantResolver()],
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    server: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                // target: 'http://192.168.43.64:8080',
                target: 'http://112.64.239.130:55108/',
                // target: 'https://dev.biaoyinet.com/appointment/prod-api',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
})
