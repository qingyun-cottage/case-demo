<!-- 姓名 手机 证件 银行卡 -->
<style lang="less" scoped>
.page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-fill-tertiary, #f2f3f5);
}

.nav_bar {
    position: fixed;
    width: 100%;
    z-index: 130;
    background: radial-gradient(
        194.94% 141.42% at 100% 0%,
        #355394 0%,
        #0d2459 100%
    );
    background: url(@/assets/images/banner-bg-other-darkblue.jpg);
    background-size: cover;

    .title {
        color: var(--color-white-100, #fff);
        text-align: center;
        font-family: PingFang SC;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }

    .left .icon {
        width: 24px;
        height: 24px;
    }
}

.banner {
    width: 100%;
    height: 220px;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    background: radial-gradient(
        194.94% 141.42% at 100% 0%,
        #355394 0%,
        #0d2459 100%
    );
    background: url(@/assets/images/banner-bg-other-darkblue.jpg);
    background-size: 100%;
    background-attachment: fixed;

    .title {
        display: none;

        height: 32px;
        margin-top: 68px;
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
        margin-top: 62px;

        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
        }
    }
}

.content {
    position: relative;
    z-index: 120;

    flex: 1;
    overflow: auto;
    margin-top: -42px;
    margin-bottom: 53px;

    display: flex;
    padding: 0px 12px;
    flex-direction: column;
    gap: 12px;

    .content_item {
        display: flex;
        padding: 0px 16px 16px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;

        border-radius: 8px;
        background: var(--color-white-100, #fff);

        .title {
            display: flex;
            padding: 16px 0px;
            align-items: center;
            gap: 10px;
            align-self: stretch;

            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
        }
    }
}

.basic_info {
    width: 100%;
    .info_item {
        display: flex;
        padding: 16px 0px;
        align-items: center;
        gap: 20px;
        align-self: stretch;
        border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);
        &:last-child {
            border-bottom: none;
            align-items: flex-start;
            padding-bottom: 0px;
        }

        .title_text {
            width: 60px;
            padding: 0;
            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */
        }

        .content_text {
            flex: 1 0 0;
            width: 100%;

            color: var(--color-text-primary, #9398a3);
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */
        }

        .count {
            flex: 1 0 0;

            color: var(--color-text-tertiary, #9398a3);
            text-align: right;
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */
        }

        .icon {
            width: 20px;
            height: 20px;
        }
    }
}
</style>

<template>
    <div class="page">
        <van-nav-bar class="nav_bar" :border="false" @click-left="$returnBack">
            <template #title>
                <div class="title">我的资料</div>
            </template>
            <template #left>
                <div class="left">
                    <div class="icon icon_custom">
                        <img
                            src="@/assets/images/arrow-left-line-white.svg"
                            alt=""
                        />
                    </div>
                </div>
            </template>
        </van-nav-bar>
        <div class="banner">
            <div class="title">
                <span>刑事案件投资人信息核对</span>
            </div>
            <div class="title_img">
                <img src="@/assets/images/title-darkblue.png" alt="" />
            </div>
        </div>

        <div class="content">
            <!-- 基本信息 -->
            <div class="content_item">
                <div class="title">基本信息</div>
                <div class="basic_info">
                    <div class="info_item">
                        <div class="title_text">姓名</div>
                        <div class="content_text">
                            <span>张三</span>
                        </div>
                    </div>
                    <div class="info_item">
                        <div class="title_text">手机</div>
                        <div class="content_text">
                            <span>{{ '321****6440' }}</span>
                        </div>
                    </div>
                    <div class="info_item">
                        <div class="title_text">证件</div>
                        <div class="content_text">
                            <span>321****6440</span>
                        </div>
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/right_link_gray.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="info_item" @click="handelClickBankCard">
                        <div class="title_text">银行卡</div>
                        <div class="content_text">
                            <span>{{ '招商银行 储蓄卡' }}</span>
                        </div>
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/right_link_gray.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <van-popup
            v-model:show="showBankCard"
            teleport="#app"
            position="right"
            :style="{ width: '100vw', height: '100vh' }"
        >
            <BankCard />
        </van-popup>
    </div>
</template>

<script setup lang="ts">
import { getUserInfo } from '@/api/ssoLogin'
import { onBeforeUnmount } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { reactive } from 'vue'
import BankCard from './components/BankCard.vue'

const userInfo = reactive({
    name: '',
    phone: '',
    idCard: '',
    bankCard: '',
})

const showBankCard = ref(false)

onMounted(() => {
    // 获取用户信息
    const userInfoGet = getUserInfo()

    userInfo.name = userInfoGet.name
    userInfo.phone = userInfoGet.phone
    userInfo.idCard = userInfoGet.idCard
    userInfo.bankCard = userInfoGet.bankCard
})

// 返回关闭弹窗不返回上一页
onMounted(() => {
    window.addEventListener('popstate', closeBankCard, false)
})
onBeforeUnmount(() => {
    window.removeEventListener('popstate', closeBankCard, false)
})
// 点击银行卡
const handelClickBankCard = () => {
    showBankCard.value = true
    window.history.pushState(null, '查看银行卡', '#openBankCard')
}
// 关闭银行卡弹窗
const closeBankCard = () => {
    showBankCard.value = false
}
</script>
