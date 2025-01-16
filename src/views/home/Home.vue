<style lang="less" scoped>
.page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-fill-tertiary, #f2f3f5);
}

.banner {
    width: 100%;
    height: 200px;
    margin-bottom: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: radial-gradient(
        194.94% 141.42% at 100% 0%,
        #355394 0%,
        #0d2459 100%
    );
    position: relative;

    .home_bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
        overflow: hidden;
        img {
            width: 100%;
        }
    }

    .title {
        display: none;

        margin-top: 48px;
        z-index: 101;
        text-align: center;
        text-shadow: 0px 2px 2px rgba(0, 36, 78, 0.2);
        font-family: HarmonyOS Sans SC;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px; /* 133.333% */

        background: linear-gradient(180deg, #fff0e8 0%, #e5cfbe 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .title_img {
        margin-top: 16px;
        z-index: 101;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }

    .user_btn {
        z-index: 101;
        height: 20px;
        display: flex;
        padding: 6px 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;

        border-radius: 100px;
        border: 1px solid var(--color-white-20, rgba(255, 255, 255, 0.2));
        background: var(--color-white-10, rgba(255, 255, 255, 0.1));

        .user {
            color: var(--color-white-100, #fff);
            text-align: center;
            font-family: PingFang SC;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */

            display: flex;
            align-items: center;
            gap: 8px;

            .icon {
                width: 14px;
                height: 14px;
            }
        }

        .exit {
            color: var(--color-white-60, rgba(255, 255, 255, 0.6));
            text-align: center;
            font-family: PingFang SC;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
        }
    }
}

.tabs {
    height: 48px;
    margin-top: -48px;
    position: relative;
    display: flex;
    z-index: 102;

    .bg {
        width: 100%;
        position: absolute;
        top: -1px;
        .bg_img {
            width: 100%;

            img {
                width: 100%;
                // 适配iphone12以下机型
                height: 49px;
            }
        }
    }

    .active {
        .tab_message {
            border: 2px solid #f2f3f5 !important;
        }
    }

    .tab_item {
        width: 50%;
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex: 1 0 0;
        align-self: stretch;

        .tab_title {
            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 26px; /* 144.444% */
        }

        .tab_message {
            position: absolute;
            right: 44.25px;
            top: 7px;

            display: flex;
            height: 14px;
            padding: 0px 4px;
            justify-content: center;
            align-items: center;
            gap: 10px;

            border-radius: 100px;
            border: 2px solid #e1e2e5;
            background: var(--color-error-default, #e53250);

            span {
                color: var(--color-white-100, #fff);
                text-align: center;
                font-family: SF Pro;
                font-size: 10px;
                font-style: normal;
                font-weight: 510;
                line-height: 12px; /* 110% */
            }
        }
    }
}

.content {
    flex: 1;
    overflow: auto;
}
</style>

<template>
    <div class="page">
        <div class="banner">
            <div class="home_bg">
                <img src="@/assets/images/banner-bg-home-darkblue.jpg" alt="" />
            </div>
            <div class="title">
                <span>刑事案件投资人信息核对</span>
            </div>
            <div class="title_img">
                <img src="@/assets/images/title-darkblue.png" alt="" />
            </div>
            <div class="user_btn">
                <div class="user" @click="handleClickUser">
                    <div class="icon icon_custom">
                        <img src="@/assets/images/user-4-fill.svg" alt="" />
                    </div>
                    <span>{{ userState.name || '未登录' }}</span>
                </div>
                <div class="exit" @click="handleClickExit">
                    <span>退出</span>
                </div>
            </div>
        </div>
        <div class="tabs">
            <!-- 切换tab -->
            <div class="bg">
                <div class="bg_img">
                    <img
                        v-show="state.tabActive === 0"
                        src="@/assets/images/tab-bg.svg"
                        alt=""
                    />
                    <img
                        v-show="state.tabActive === 1"
                        src="@/assets/images/tab-bg-reverse.svg"
                        alt=""
                    />
                </div>
            </div>
            <div
                class="tab_item"
                :class="{ active: item.id == state.tabActive }"
                v-for="item in state.tabsArr"
                :key="item.id"
                @click="handleChangeTab(item.id)"
            >
                <div class="tab_title" :class="item.id == state.tabActive">
                    {{ item.title }}
                </div>
                <div class="tab_message">
                    <span>{{ item.message }}</span>
                </div>
            </div>
        </div>

        <div class="content">
            <van-pull-refresh
                v-model="isLoading"
                success-text="刷新成功"
                @refresh="onRefresh"
            >
                <!-- 根据tab显示不同的组件 不使用路由 -->
                <div v-if="state.tabActive === 0">
                    <Cases :caseList="state.caseList" />
                </div>
                <div v-if="state.tabActive === 1">
                    <Application />
                </div>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Application from './components/Application.vue'
import Cases from './components/Cases.vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { getUserInfo, logout } from '@/api/ssoLogin'
import { onActivated } from 'vue'
import { checkPerson, getProjectList, getApplicationList } from '@/api/home'
import { ref } from 'vue'
import { ResponseData } from '@/utils/http'

const router = useRouter()

const userState = reactive({
    userId: '',
    name: '',
})

const state = reactive({
    caseList: [],
    applicationList: [],

    //
    tabActive: 0,
    tabsArr: [
        {
            id: 0,
            title: '我的案件',
            message: 22,
        },
        {
            id: 1,
            title: '申请记录',
            message: 99,
        },
    ],
})

onMounted(() => {
    // TODO: 后面去掉
    userState.userId = '1'
    userState.name = '钱雅菲'

    return

    // 获取用户信息
    const userInfo = getUserInfo()
    userState.userId = userInfo.userId
    userState.name = userInfo.nickName
    // 查询用户关联案件
    linkCase()
})

// 做了keep-alive
onActivated(() => {
    // 暂不调用
})

// 查询用户关联案件
const linkCase = () => {
    checkPerson({ userId: userState.userId }).then(res => {
        if (res.code === 200) {
            // 关联成功
            Promise.all([
                // 查询用户案件
                getProjectList({ userId: userState.userId }),
                // 查询申请记录
                getApplicationList({ userId: userState.userId }),
            ]).then(res => {
                const [caseRes, applicationRes] = res
                handelCase(caseRes)
                handelApplication(applicationRes)
            })
        }
    })
}

// 查询用户案件
// const queryCase = () => {
//     getProjectList({ userId: userState.userId })
// }
// 处理用户案件数据结构
const handelCase = (res: ResponseData) => {
    if (res.code === 200) {
        // 处理案件数据结构
        const caseList = res.data.map(
            (item: {
                personId: any
                projectName: any
                status: number
                relation: any
            }) => {
                return {
                    id: item.personId,
                    projectName: item.projectName,
                    // 0:待确认 1:待确认 2:已确认 3:有异议
                    status: ['PENDING', 'PENDING', 'CONFIRMED', '有异议'][
                        item.status
                    ],
                    type: item.relation,
                }
            }
        )
        state.caseList = caseList
    }
}

// 处理申请记录数据结构
const handelApplication = (res: ResponseData) => {
    console.log(res)
}

// 点击用户
const handleClickUser = () => {
    // 去个人信息页面
    router.push({
        name: 'UserInfo',
    })
}

// 点击退出
const handleClickExit = () => {
    // 去登录页
    logout()
    router.push({
        name: 'Login',
    })
}

// 切换tab
const handleChangeTab = (id: number) => {
    if (id === state.tabActive) return
    state.tabActive = id
}

// 下拉刷新
const isLoading = ref(false)
const onRefresh = () => {
    console.log('下拉刷新')
    isLoading.value = true

    setTimeout(() => {
        isLoading.value = false
    }, 1000)
}
</script>
