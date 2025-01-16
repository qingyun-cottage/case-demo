import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index'
// 引入vant
import vant from 'vant'
// 引入组件样式 (这里是全部引入)
import 'vant/lib/index.css'
// 适配rem
import 'amfe-flexible'
// 引入全局样式
import './style/index.less'

const app = createApp(App)
app.use(router)
app.use(vant) // vant组件已使用插件自动引入

app.mount('#app')

// 全局返回上一页方法
app.config.globalProperties.$returnBack = () => {
    router.isReady().then(() => {
        router.back()
    })
}

// 全局过滤器
app.config.globalProperties.$filters = {
    // 格式化金额千分位
    formatMoney: (value: number) => {
        return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',') // 3是千分位，4是万分位
    },
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $returnBack: () => void
        $filters: {
            formatMoney: (value: number) => string
        }
    }
}
