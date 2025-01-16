import http from '@/utils/http.ts'
import { ResponseData } from '@/utils/http.ts'

// 前置后台绑定用户
// /mobile/user/checkPerson get
export const checkPerson = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/user/checkPerson',
        method: 'get',
        params,
    })
}

// 获取用户案件
// /mobile/user/getProjectList get
export const getProjectList = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/user/getProjectList',
        method: 'get',
        params,
    })
}

// 获取用户申请列表
// /mobile/regForm/list post
export const getApplicationList = (data: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/regForm/list',
        method: 'post',
        data,
    })
}




