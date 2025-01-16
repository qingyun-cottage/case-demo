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

.loading_box {
    transform: scale(1.42);
    .login_text {
        text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.2);
        font-family: HarmonyOS Sans SC;
        font-weight: 400;
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

        <div class="loading_box">
            <van-loading color="#ebd5c5" vertical>
                <span class="login_text">登录中</span>
            </van-loading>
        </div>

        <div class="content">
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
import { ssoLogin, setTokenAndUserInfo } from '@/api/ssoLogin'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(() => {
    // TODO: 后面去掉
    setTimeout(() => {
        router.push({
            name: 'Home',
        })
    }, 1800)
    return


    // 获取url参数
    const query = router.currentRoute.value.query
    // const params = {
    //     data: query.data,
    //     provider: query.provider,
    // }

    // 假数据
    const params = {
        data: 'e43629e67a412b13b372b865b9fb2df1efa9d6a456d917ce6a36f429ee9d52719aad89e315b5444790b9484174faf5cd9fb2149dbb8e3db891a6fcd8572736f08f328e44718ee3e2c493bb70d8f6a9f321b468b2b0686af3',
        provider: 'G21000',
    }

    ssoLogin(params).then(res => {
        console.log(res)

        if (res.code === 200) {
            setTokenAndUserInfo(res.data)

            // 跳转到首页
            router.push({
                name: 'Home',
            })
        }

        // 写入token
        // localStorage.setItem('token', res.data.token)
    })
})
</script>
