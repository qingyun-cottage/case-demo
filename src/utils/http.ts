import axios from 'axios'
import { encrypt } from './sm4/sm4Util'
import { showDialog } from 'vant'

// 定义返回数据类型
interface ResponseData {
    code: number
    data: any
    msg: string
    token: string
}

// 创建一个新的axios实例
const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000 * 30,
})

// 请求拦截器
http.interceptors.request.use(config => {
    // 判断是否有token
    const token = localStorage.getItem('access_token')
    if (token) {
        // 设置请求头
        config.headers.Authorization = 'Bearer ' + token
    }
    return config
})

// 加密
http.interceptors.request.use(
    async config => {
        // console.log('请求拦截器', config)

        // FIXME: 加密
        // await encrypt(config)

        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截器
http.interceptors.response.use(
    res => {
        if(res.data.code !== 200) {
            showDialog({
                title: '提示',
                message: '系统异常，请联系管理员',
            })
        }
        return res.data
    },
    err => {
        if (err.response.status === 401) {
            // 清除token
            localStorage.removeItem('access_token')
            // 跳转到登录页面
            location.href = '/login'
        }
        return Promise.reject(err)
    }
)

export default http
export type { ResponseData }
