import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// function replaceCrossorigin() {
//     return {
//         name: 'replace-crossorigin',
//         transformIndexHtml(html: string) {
//             // console.log('html', html)
//             // 将 type="module" crossorigin 替换为 defer
//             return html.replace(/type="module" crossorigin/g, 'defer')
//         },
//     }
// }

// https://vitejs.dev/config/
export default defineConfig({
    // base: 'https://gitee.com/qingyun-cottage/resource/raw/main/single/case-demo',
    base: '',
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()],
        }),
        // replaceCrossorigin(),
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
    build: {
        rollupOptions: {
            output: {
                // umd 
                // format: 'umd',
            },
        },
    },
})
