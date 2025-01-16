import http from '@/utils/http.ts'
import { ResponseData } from '@/utils/http.ts'

// 查询用户信息
// /mobile/user/getUserInfo get
export const getUserInfo_test = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/user/getUserInfo',
        method: 'get',
        params,
    })
}

// 查询用户银行卡列表
// /mobile/bank/getBank get
export const getBank = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/bank/getBank',
        method: 'get',
        params,
    })
}

// 添加银行卡
// /mobile/bank/addBank post
export const addBank = (data: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/bank/addBank',
        method: 'post',
        data,
    })
}
