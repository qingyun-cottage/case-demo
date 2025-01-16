import http from '@/utils/http.ts'
import { ResponseData } from '@/utils/http.ts'

// 获取案件详情
// /mobile/user/getPersonDetail get
export const getPersonDetail = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/user/getPersonDetail',
        method: 'get',
        params,
    })
}

// 确认案件
// /mobile/confirmForm/confirm post
export const confirm = (data: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/confirmForm/confirm',
        method: 'post',
        data,
    })
}

// -- 案件菜单 --

// 获取案件公告
// /mobile/user/getCaseNotice get
const getCaseNotice = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/user/getCaseNotice',
        method: 'get',
        params,
    })
}

// 执行进展
// /mobile/user/getCaseProgress get
const getCaseProgress = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/user/getCaseProgress',
        method: 'get',
        params,
    })
}

// 获取留言回复
// /mobile/user/getCaseReply get
const getCaseReply = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/user/getCaseReply',
        method: 'get',
        params,
    })
}

// 发送留言
// /mobile/user/sendCaseReply post
const sendCaseReply = (data: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/user/sendCaseReply',
        method: 'post',
        data,
    })
}

// 常见问题
// /mobile/user/getCaseQuestion get
const getCaseQuestion = (params: any): Promise<ResponseData> => {
    return http({
        url: '/ruoyi-frc/mobile/user/getCaseQuestion',
        method: 'get',
        params,
    })
}
