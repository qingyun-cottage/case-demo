// 1 引入所需方法
// 路由创建：createRouter
// 路由模式(两者任选其一)：createWebHistory - history模式、createWebHashHistory - hash模式
// RouteRecordRaw：意为路由原始信息 （使用vue3+js的不用引入）
import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
    RouteRecordRaw,
} from 'vue-router'

// 设置路由规则
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: {
            name: 'Home',
        },
    },
    {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/home/Home.vue'),
        meta: {
            title: '首页',
            keepAlive: true,
        },
    },
    {
        // 我的资料
        name:"UserInfo",
        path:'/userInfo',
        component:()=>import('@/views/userInfo/UserInfo.vue'),
        meta:{
            title:'我的资料',
        }
    },
    // {
    //     name: 'CaseDetail_fix',
    //     path: '/caseDetail_fix',
    //     component: () => import('@/views/caseDetail/CaseDetail_fix.vue'),
    //     meta: {
    //         title: '案件详情固定',
    //     },
    // },
    {
        name: 'CaseDetail',
        path: '/caseDetail',
        component: () => import('@/views/caseDetail/CaseDetail.vue'),
        meta: {
            title: '案件详情',
            keepAlive: true,
        },
    },
    {
        name: 'AddBankCard',
        path: '/addBankCard',
        component: () => import('@/views/addBankCard/AddBankCard.vue'),
        meta: {
            title: '添加银行卡',
        },
    },
    {
        name:'Contract',
        path:'/contract',
        component:()=>import('@/views/contract/Contract.vue'),
        meta:{
            title:'合同(账户)列表',
        }
    },
    // 案件功能菜单
    {
        path: '/caseMenu',
        children: [
            {
                name: 'Notice',
                path: 'notice',
                component: () => import('@/views/caseMenu/Notice.vue'),
                meta: {
                    title: '案件公告',
                },
            },
            {
                name: 'Progress',
                path: 'progress',
                component: () => import('@/views/caseMenu/Progress.vue'),
                meta: {
                    title: '执行进展',
                },
            },
            {
                name: 'Message',
                path: 'message',
                component: () => import('@/views/caseMenu/Message.vue'),
                meta: {
                    title: '留言回复',
                },
            },
            {
                name: 'Question',
                path: 'question',
                component: () => import('@/views/caseMenu/Question.vue'),
                meta: {
                    title: '常见问题',
                },
            },
        ],
    },
    {
        name: 'CaseSelect',
        path: '/caseSelect',
        component: () => import('@/views/caseSelect/CaseSelect.vue'),
        meta: {
            title: '选择案件',
        },
    },
    // 申请 -- 异议申请 投资人登记 继承人登记 代理人登记
    {
        path: '/apply',
        component: () => import('@/views/apply/Apply.vue'),
        children: [
            {
                name: 'DissentApply',
                path: 'dissent',
                component: () => import('@/views/apply/dissent/Dissent.vue'),
                meta: {
                    title: '异议申请',
                },
            },
            {
                name: 'InvestorApply',
                path: 'investor',
                component: () => import('@/views/apply/investor/Investor.vue'),
                meta: {
                    title: '投资人登记',
                },
            },
            {
                name: 'InheritorApply',
                path: 'inheritor',
                component: () =>
                    import('@/views/apply/inheritor/Inheritor.vue'),
                meta: {
                    title: '继承人登记',
                },
            },
            {
                name: 'AttorneyApply',
                path: 'attorney',
                component: () => import('@/views/apply/attorney/Attorney.vue'),
                meta: {
                    title: '代理人登记',
                },
            },
        ],
    },

    // 登录及404页面
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/login/Login.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        name:'SsoJump',
        path:'/sso',
        component:()=>import('@/views/login/SsoJump.vue'),
        meta:{
            title:'登录',
        }
    },
    {
        // 定义404路由
        path: '/404',
        component: () => import('../pages/notfound.vue'),
    },
    {
        // 匹配为定义路由然后重定向到404页面
        path: '/:pathMath(.*)',
        redirect: '/404',
    },
]

// 设置路由
const router = createRouter({
    routes,
    //路由模式：history
    // history: createWebHistory('case-demo'),
    //路由模式：hash
    history:createWebHashHistory('#case-demo')
})

router.beforeEach((to, from, next) => {
    // 设置页面标题
    if (to.meta.title) {
        document.title = to.meta.title as string
    }

    // 测试跳过登录验证
    next()
    return

    // 判断是否有token
    const token = localStorage.getItem('token')
    if (token) {
        next()
    } else {
        // 判断是否是登录页面
        if (to.path === '/login') {
            next()
        } else {
            // 跳转到登录页面
            next('/login')
        }
    }
})

// 导出路由
export default router
