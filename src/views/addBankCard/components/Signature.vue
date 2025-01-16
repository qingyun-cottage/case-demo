<style lang="less" scoped>
.page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    background: var(--color-white-100, #fff);
}

.signature {
    width: 100vw;
    height: 100%;
}

.sig_bar {
    width: 100vh;
    height: 56px;
    position: fixed;
    top: 0;
    left: 100%;
    transform: rotate(90deg);
    transform-origin: left top;

    display: flex;
    padding: 0px 24px;
    box-sizing: border-box;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

    .tip {
        flex: 1 0 0;

        color: var(--color-text-tertiary, #9398a3);
        font-family: PingFang SC;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 100% */
    }

    .btn {
        .default {
            background: var(--color-fill-tertiary, #f2f3f5);
            .btn_text {
                color: var(--color-text-primary, #292c33);
            }
        }
        .primary {
            background: var(--color-primary-default, #3a7afc);
            .btn_text {
                color: var(--color-white-100, #fff);
            }
        }

        .van-button {
            height: 36px;
            padding: 0px 24px;
            border-radius: 4px;
            border: none;
            .btn_text {
                text-align: center;
                font-family: PingFang SC;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px; /* 142.857% */
            }
        }
    }
}

.signature_box {
    width: 319px;
    height: 100%;
    // background-color: #f003;
    .signature_pad {
        padding: 0;
        --van-signature-content-height: 100vh;
        --van-signature-content-border: none;
    }
}
</style>
<style lang="less">
// 覆盖vant-signature的样式
.signature_pad {
    .van-signature__content {
        border-radius: 0;
    }
    .van-signature__footer {
        display: none;
    }
}
</style>

<template>
    <div>
        <div class="page">
            <div class="signature">
                <div class="sig_bar">
                    <div class="tip">
                        <span>“请本人签字确认”</span>
                    </div>
                    <div class="btn">
                        <van-button class="default" @click="cancel">
                            <span class="btn_text">取消</span>
                        </van-button>
                    </div>
                    <div class="btn">
                        <van-button class="default" @click="reset">
                            <span class="btn_text">重置</span>
                        </van-button>
                    </div>
                    <div class="btn">
                        <van-button class="primary" @click="confirm">
                            <span class="btn_text">确认</span>
                        </van-button>
                    </div>
                </div>
                <div class="signature_box">
                    <van-signature
                        class="signature_pad"
                        ref="signaturePad"
                        @submit="onSubmit"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 签名板的ref
const signaturePad = ref()
// vant没有提供clear和submit的方法，只能通过ref来获取
onMounted(() => {
    // 获取signaturePad的dom元素
    const signaturePadEl = signaturePad.value.$el
    const signaturePadFooterEl = signaturePadEl.getElementsByClassName(
        'van-signature__footer'
    )[0]
    // 获取signaturePadFooterEl的两个按钮
    const btns = signaturePadFooterEl.getElementsByClassName('van-button')
    const cancelBtn = btns[0]
    const confirmBtn = btns[1]
    // 给signaturePad添加clear和submit方法
    signaturePad.value.handleClear = () => {
        cancelBtn.click()
    }
    signaturePad.value.handleConfirm = () => {
        confirmBtn.click()
    }
})

const props = defineProps({
    // 银行卡信息
    bankCard: {
        type: Object as () => {
            bankCardType: string
            bankCardName: string
            bankCardNo: string
        },
        default: () => ({
            bankCardType: '',
            bankCardName: '',
            bankCardNo: '',
        }),
    },
    // 是否显示了当前页面
    show: {
        type: Boolean,
        default: '',
    },
})

watch(
    () => props.show,
    (newVal, oldVal) => {
        if (newVal) {
            reset()
        }
    }
)

// 取消
const cancel = () => {
    router.back()
}
// 重置
const reset = () => {
    signaturePad.value.handleClear()
}
// 确认
const confirm = () => {
    signaturePad.value.handleConfirm()
}
const onSubmit = (data: any) => {
    console.log('onSubmit', data)

    console.log(props.bankCard)

    // 路由回退2级 TODO: 如有意外要优化
    router.go(-2)
}
</script>
