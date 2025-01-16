<style lang="less" scoped>
.login_page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: radial-gradient(
        202.84% 51.32% at 50% 51.39%,
        #5471b5 0%,
        #16275a 100%
    );
}

.title {
    margin-top: 90px;
    width: 295px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .login_logo {
        width: 257px;
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
        }
    }

    span {
        text-align: center;
        text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.2);
        font-family: HarmonyOS Sans SC;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 125% */

        background: linear-gradient(180deg, #fff0e8 0%, #ebd5c5 100%);
        // color: #fff;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

.content {
    margin-bottom: 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login_btn_box {
    .btn {
        width: 255px;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 100px;
        background: var(--color-primary-default, #3a7afc);

        color: var(--color-white-100, #fff);
        text-align: center;
        font-family: PingFang SC;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 146.667% */
    }
}

.tip_btn {
    width: 105px;
    height: 32px;
    margin: 10px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: var(--color-success-default, #08c787);
        color: #08c787;
        text-align: center;
        font-family: PingFang SC;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
    }

    .icon {
        width: 16px;
        height: 16px;
    }
}

.tip_text {
    margin-top: 59px;
    width: 295px;

    display: flex;
    flex-direction: column;
    gap: 4px;

    color: var(--color-white-60, rgba(255, 255, 255, 0.6));
    text-align: center;
    font-family: PingFang SC;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}
</style>

<template>
    <div class="login_page">
        <div class="title">
            <div class="login_logo">
                <img src="@/assets/images/login-title-logo.png" alt="" />
            </div>
            <span>集资诈骗案件投资人</span>
            <span>信息登记核对平台</span>
        </div>

        <div class="content">
            <div class="login_btn_box">
                <div class="btn" @click="goLogin">登录</div>
            </div>
            <div class="tip_btn" @click="clickTip">
                <span>操作指引</span>
                <div class="icon icon_custom">
                    <img src="@/assets/images/arrow-m-right-line.svg" alt="" />
                </div>
            </div>
            <div class="tip_text">
                <span>温馨提示</span>
                <span
                    >如遇人脸识别反复不能通过验证的情况，请于工作日9:00 至
                    17:00，致电客服电话 “962600按3售后服务，再按5自然人身份识别”
                    ，获取技术支持。</span
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goLogin = () => {
    console.log('12368登录')

    // TODO: 跳转到 https://wxgzh.hshfy.sh.cn/yhfw
    // window.location.href = 'https://wxgzh.hshfy.sh.cn/yhfw'

    router.push({
        name: 'SsoJump',
    })
}

const clickTip = () => {
    alert('操作指引')
}
</script>
