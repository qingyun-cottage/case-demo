import http from '@/utils/http.ts'
import { ResponseData } from '@/utils/http.ts'

// 查询申请列表
// /mobile/regForm/list get
export const getApplicationList = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/regForm/list',
        method: 'get',
        params,
    })
}

// 异议申请
// /mobile/regForm/objection post
export const objection = (data: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/regForm/objection',
        method: 'post',
        data,
    })
}
// 查询异议审核详情
// /mobile/regForm/objectionDetail get
export const objectionDetail = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/regForm/objectionDetail',
        method: 'get',
        params,
    })
}

// 投资人申请
// 查询投资人申请详情

// 继承人申请
// 查询继承人申请详情

// 代理人申请
// 查询代理人申请详情
