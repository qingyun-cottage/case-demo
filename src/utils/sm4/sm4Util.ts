// 不检查ts语法
// @ts-nocheck

import { sm4 } from './sm4'

// 要加密的接口列表
const encryptList = []
// 排除加密的接口列表
const excludeEncryptList = []
// [`/sys/common/upload`, `/loaner/ruling/upload`];

// 获取秘钥的方法
export const getSecretKey = () => {
    // 获取秘钥的接口
    // const getSecretKeyApi = '/sys/secretKey/getSecretKey';
    // return new Promise((resolve) => {
    //   defHttp.get({ url: getSecretKeyApi }).then((res) => {
    //     console.log(res);
    //     resolve(res);
    //   });
    // });

    // 模拟数据
    // return new Promise((resolve) => {
    //   resolve({
    //     success: true,
    //     data: {
    //       key: '7fe3cbe9bc6cfe8c',
    //       iv: '12a8cffbe9f9e982',
    //     },
    //   });
    // });

    return {
        key: '7fe3cbe9bc6cfe8c',
        iv: '12a8cffbe9f9e982',
    }
}

// 导出统一加密方法  参数为请求拦截器的config 非异步
export const encrypt = requestConfig => {
    // 判断是否需要排除
    if (excludeEncryptList.includes(requestConfig.url)) {
        // 不需要加密的接口
        return requestConfig
    }

    if (encryptList.includes(requestConfig.url)) {
        // 需要加密的接口
        // 获取秘钥
        const { key: sm4Key, iv: sm4Iv } = getSecretKey()

        requestConfig = encryptByType(requestConfig, sm4Key, sm4Iv)
        return requestConfig
    } else {
        return requestConfig
    }
}

// 导出统一加密方法  参数为请求拦截器的config
// export const encrypt_async = (requestConfig) => {
//   return new Promise((resolve) => {
//     // TODO: 选择一个使用

//     // 判断是否需要排除
//     if (excludeEncryptList.includes(requestConfig.url)) {
//       // 不需要加密的接口
//       resolve(requestConfig);
//     }

//     if (encryptList.includes(requestConfig.url)) {
//       // 需要加密的接口
//       // 获取秘钥
//       getSecretKey().then((res) => {
//         // 获取秘钥成功
//         const sm4Key = res.data.key;
//         const sm4Iv = res.data.iv;
//         // 加密
//         requestConfig = encryptByType(requestConfig, sm4Key, sm4Iv);
//         // 返回加密后的请求配置
//         resolve(requestConfig);
//       });
//     } else {
//       resolve(requestConfig);
//     }
//   });
// };

// 根据秘钥加密不同的请求类型
const encryptByType = (requestConfig, sm4Key, sm4Iv) => {
    console.log(requestConfig, sm4Key, sm4Iv)

    // 判断请求类型
    switch (requestConfig.method.toLowerCase()) {
        // get请求
        case 'get':
        case 'delete':
            console.log(requestConfig.params)

            // requestConfig.params.map.forEach((key, value) => {
            //   key[0] = handleEncrypt(key[0], sm4Key, sm4Iv);

            //   requestConfig.params[value] =  key[0]
            // });

            // 遍历参数
            for (const key in requestConfig.params) {
                requestConfig.params[key] = handleEncrypt(
                    requestConfig.params[key],
                    sm4Key,
                    sm4Iv
                )
            }
            break
        // post请求
        case 'post':
        case 'put':
            // 遍历参数
            for (const key in requestConfig.params) {
                requestConfig.params[key] = handleEncrypt(
                    requestConfig.params[key],
                    sm4Key,
                    sm4Iv
                )
            }
            // 请求体加密
            requestConfig.data = handleEncrypt(
                JSON.stringify(requestConfig.data),
                sm4Key,
                sm4Iv
            )

            break
        default:
            break
    }
    return requestConfig
}

export const handleEncrypt_direct_dataObj = data => {
    return {
        data: handleEncrypt_direct(JSON.stringify(data)),
    }
}

export const handleEncrypt_direct = data => {
    const { key, iv } = getSecretKey()
    return Base64ToHexString(handleEncrypt(data, key, iv))
}

function Base64ToHexString(base64String) {
    var bytes = atob(base64String)
        .split('')
        .map(function (c) {
            return c.charCodeAt(0)
        })
    return bytes
        .map(function (b) {
            return b.toString(16).padStart(2, '0')
        })
        .join('')
}

// 加密方法 处理不同的数据类型
const handleEncrypt = (data, sm4Key, iv) => {
    // 判断数据类型

    // 判断是否为 undefined null 空字符串
    if (data === undefined || data === null || data === '') {
        // 不加密
        return data
    }

    // 如果为数字类型
    if (typeof data === 'number') {
        // 第一种情况 不加密
        // return data;

        // 第二种情况 转为字符串加密
        data = data.toString()
    }

    // 返回加密后的数据
    return encryptSM4(data, sm4Key, iv)
}

// CBC模式的加密函数
const encryptSM4 = (text: string, key: string, iv: string) => {
    try {
        return sm4.encryptData_CBC(text, key, iv)
    } catch (e) {
        // 控制台报错
        console.error('CBC加密失败', e)
    }
}

// CBC模式的解密函数
const decryptSM4 = (text: string, key: string, iv: string) => {
    try {
        return sm4.decryptData_CBC(text, key, iv)
    } catch (e) {
        // 控制台报错
        console.error('CBC解密失败', e)
    }
}

// ECB模式的加密函数
const encryptSM4ECB = (text: string, key: string) => {
    try {
        return sm4.encryptData_ECB(text, key)
    } catch (e) {
        // 控制台报错
        console.error('ECB加密失败', e)
    }
}

// ECB模式的解密函数
const decryptSM4ECB = (text: string, key: string) => {
    try {
        return sm4.decryptData_ECB(text, key)
    } catch (e) {
        // 控制台报错
        console.error('ECB解密失败', e)
    }
}
