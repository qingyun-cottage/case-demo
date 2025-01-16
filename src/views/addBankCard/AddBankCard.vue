<style lang="less" scoped>
.page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-fill-tertiary, #f2f3f5);
}

.nav_bar {
    .title {
        color: var(--color-text-primary, #292c33);
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

.content {
    flex: 1;
    overflow: auto;
    padding: 0 12px 53px;

    .title {
        padding: 32px 0;
        color: var(--color-text-primary, #292c33);
        text-align: center;
        font-family: PingFang SC;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 140% */
    }

    .add_card {
        display: flex;
        padding: 0px 16px;
        flex-direction: column;
        align-items: center;
        align-self: stretch;

        border-radius: 8px;
        background: var(--color-white-100, #fff);

        .title_text {
            display: flex;
            padding: 16px 0px;
            align-items: center;
            align-self: stretch;
            border-bottom: 0.5px solid var(--color-border-secondary, #f0f0f2);
            background: var(--color-white-100, #fff);

            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
        }

        .item {
            display: flex;
            padding: 16px 0px;
            align-items: center;
            gap: 20px;
            align-self: stretch;
            border-bottom: 0.5px solid var(--color-border-secondary, #f0f0f2);

            .label {
                width: 60px;
                color: var(--color-text-primary, #292c33);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */
            }
            .text {
                flex: 1 0 0;
                color: var(--color-text-primary, #292c33);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */

                .van-field {
                    padding: 0;
                }
            }
            .icon {
                width: 20px;
                height: 20px;
            }
        }

        .btn_box {
            padding: 48px 0px;
            display: flex;
            align-items: center;

            .submit_btn {
                width: 183px;
                padding: 10px 32px;
                border-radius: 8px;
                background: var(--color-primary-default, #007aff);
                border: none;

                .btn_text {
                    color: var(--color-white-100, #fff);
                    font-family: PingFang SC;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px; /* 150% */
                }
            }
        }
    }
}
</style>

<template>
    <div class="page">
        <van-nav-bar class="nav_bar" :border="false" @click-left="$returnBack">
            <template #left>
                <div class="left">
                    <div class="icon icon_custom">
                        <img
                            src="@/assets/images/arrow-left-line-black.svg"
                            alt=""
                        />
                    </div>
                </div>
            </template>
        </van-nav-bar>
        <div class="content">
            <div class="title">添加银行卡</div>
            <div class="add_card">
                <div class="title_text">输入卡号添加</div>

                <div class="item" @click="selectBankCard">
                    <div class="label">银行</div>
                    <div class="text">
                        <span>建设银行 储蓄卡</span>
                    </div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/right_link_gray.svg" alt="" />
                    </div>
                </div>
                <div class="item">
                    <div class="label">卡号</div>
                    <div class="text">
                        <van-field
                            v-model="state.bankCardNo"
                            placeholder="请输入银行卡号"
                            type="number"
                            maxlength="19"
                            clearable
                        />
                    </div>
                </div>

                <div class="btn_box">
                    <van-button class="submit_btn" @click="submit">
                        <span class="btn_text">完成并添加</span>
                    </van-button>
                </div>
            </div>
        </div>

        <!-- 选择银行卡弹窗 -->
        <van-popup
            v-model:show="state.showSelectBankCard"
            teleport="#app"
            position="right"
            :style="{ width: '100vw', height: '100vh' }"
        >
            <SelectBankCard />
        </van-popup>
        <!-- 签名弹窗 -->
        <van-popup
            v-model:show="state.showSignature"
            teleport="#app"
            position="bottom"
            :style="{ width: '100vw', height: '100vh' }"
        >
            <Signature
                :show="state.showSignature"
                :bankCard="{
                    bankCardType: state.bankCardType,
                    bankCardName: state.bankCardName,
                    bankCardNo: state.bankCardNo,
                }"
            />
        </van-popup>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onMounted } from 'vue'
import { onBeforeUnmount } from 'vue'
import SelectBankCard from './components/SelectBankCard.vue'
import Signature from './components/Signature.vue'

const state = reactive({
    // 银行卡类型
    bankCardType: '',
    // 银行卡名称
    bankCardName: '',
    // 银行卡号
    bankCardNo: '',
    // 银行卡图标
    // bankCardIcon: '',

    // 显示选择银行卡弹窗
    showSelectBankCard: false,
    // 显示签名弹窗
    showSignature: false,
})

// 选择银行卡
const selectBankCard = () => {
    // 校验银行卡号
    console.log('选择银行卡')
    // 打开选择银行卡弹窗
    state.showSelectBankCard = true
    window.history.pushState(null, '选择银行卡', '#selectBankCard')
}

// 完成并添加
const submit = () => {
    console.log('完成并添加进入签名,银行卡号:', state.bankCardNo)
    // 打开签名弹窗
    state.showSignature = true
    window.history.pushState(null, '签名', '#signature')
}

// 返回关闭弹窗不返回上一页
onMounted(() => {
    window.addEventListener('popstate', closePopup, false)
})
onBeforeUnmount(() => {
    window.removeEventListener('popstate', closePopup, false)
})
// 关闭弹窗
const closePopup = () => {
    console.log('关闭弹窗')
    state.showSelectBankCard = false
    state.showSignature = false
}
</script>
