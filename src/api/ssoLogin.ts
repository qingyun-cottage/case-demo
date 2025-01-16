import http from '@/utils/http.ts'
import { ResponseData } from '@/utils/http.ts'

// sso登录
export const ssoLogin = (params: any): Promise<ResponseData> => {
    return http({
        url: '/auth/sso',
        method: 'get',
        params,
    })
}

// 设置token和用户信息
export const setTokenAndUserInfo = (data: any) => {
    const { access_token } = data
    const { sysUser } = data.loginUser
    // 去除null undefined
    Object.keys(sysUser).forEach(key => {
        if (sysUser[key] === null || sysUser[key] === undefined) {
            delete sysUser[key]
        }
    })

    localStorage.setItem('access_token', access_token)
    localStorage.setItem('login_user_info', JSON.stringify(sysUser))
}

// 获取用户信息
export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('login_user_info') || '{}')
}

// 退出登录
export const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('login_user_info')
}
