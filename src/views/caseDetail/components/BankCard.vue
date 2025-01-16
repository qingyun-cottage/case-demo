<style lang="less" scoped>
.dialog {
    background: var(--color-white-100, #fff);
    // display: flex;
    border-radius: 20px;
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
    .right {
        span {
            color: var(--color-primary-default, #3a7afc);
            text-align: right;
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */
        }
    }
}

.card_list {
    max-height: 495px;
    overflow: auto;

    display: flex;
    padding: 10px 12px 53px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    align-self: stretch;

    .select_box {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-self: stretch;

        .card_item {
            display: flex;
            padding: 16px;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border-radius: 8px;
            background: var(--color-fill-quaternary, #fafafa);
            // 单选框的图标大小
            --van-radio-size: 24px;
            &.active {
                outline: 1px solid var(--color-primary-default, #3a7afc);
                outline-offset: -1px;
                background: var(--color-primary-bg, rgba(58, 123, 252, 0.07));
            }

            .item_content {
                display: flex;
                gap: 12px;
                align-items: center;
                .card_info {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    flex: 1 0 0;
                    .title {
                        color: var(--color-text-primary, #292c33);
                        font-family: PingFang SC;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 24px; /* 150% */
                    }
                    .value {
                        color: var(--color-text-tertiary, #9398a3);
                        font-family: SF Pro;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 18px; /* 138.462% */
                    }
                }
            }
            .icon {
                width: 24px;
                height: 24px;
            }
        }
    }

    .btn_box {
        width: 100%;
        .add_btn {
            width: 100%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-self: stretch;

            border-radius: 8px;
            border: 1px solid var(--color-border-secondary, #f0f0f2);
            background: var(--color-white-100, #fff);

            .btn_text {
                display: flex;
                flex-direction: column;
                gap: 4px;
                justify-content: center;
                align-items: center;

                .icon {
                    width: 24px;
                    height: 24px;
                }
                .text {
                    color: var(--color-primary-default, #3a7afc);
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
}
</style>

<template>
    <div>
        <div class="dialog">
            <van-nav-bar
                class="nav_bar"
                :border="false"
                @click-left="close"
                @click-right="confirm"
            >
                <template #title>
                    <div class="title">选择银行卡</div>
                </template>
                <template #left>
                    <div class="left">
                        <div class="icon icon_custom">
                            <img src="@/assets/images/close-line.svg" alt="" />
                        </div>
                    </div>
                </template>
                <template #right>
                    <div class="right">
                        <span>确认</span>
                    </div>
                </template>
            </van-nav-bar>
            <div class="card_list">
                <van-radio-group
                    class="select_box"
                    v-model="state.currentCardId"
                >
                    <van-radio
                        v-for="item in props.cardsList"
                        :key="item.id"
                        :name="item.id"
                        class="card_item"
                        :class="{ active: item.id === state.currentCardId }"
                        label-position="left"
                    >
                        <div class="item_content">
                            <bank-icon class="icon" :bank="item.shortName" />
                            <div class="card_info">
                                <div class="title">
                                    <span>{{ item.bankName }}</span>
                                </div>
                                <div class="value">
                                    <span>{{ item.bankCardNo }}</span>
                                </div>
                            </div>
                        </div>
                        <template #icon="props">
                            <div
                                class="icon icon_custom"
                                v-show="props.checked"
                            >
                                <img
                                    src="@/assets/images/bank-checked.svg"
                                    alt=""
                                />
                            </div>
                        </template>
                    </van-radio>
                </van-radio-group>

                <div class="btn_box">
                    <van-button class="add_btn" @click="handelAddCard">
                        <div class="btn_text">
                            <div class="icon icon_custom">
                                <img
                                    src="@/assets/images/bank-card-fill.svg"
                                    alt=""
                                />
                            </div>
                            <div class="text">添加银行卡</div>
                        </div>
                    </van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import bankIcon from '@/components/bankIcon.vue'
import { reactive } from 'vue'

const router = useRouter()
const emit = defineEmits(['close', 'confirm'])

type cardItem = {
    id: string
    bankName: string
    shortName: string
    bankCardNo: string
}

const props = defineProps({
    // 传入的银行卡列表
    cardsList: {
        type: Array as () => cardItem[],
        default: () => [
            {
                id: '1',
                bankName: '工商银行储蓄卡',
                shortName: 'ICBC',
                bankCardNo: '9558 8019 0240 16485',
            },
            {
                id: '2',
                bankName: '招商银行储蓄卡',
                shortName: 'CMB',
                bankCardNo: '9558 8019 0240 16485',
            },
            {
                id: '3',
                bankName: '建设银行储蓄卡',
                shortName: 'CCB',
                bankCardNo: '9558 8019 0240 16485',
            },
            {
                id: '4',
                bankName: '农业银行储蓄卡',
                shortName: 'ABC',
                bankCardNo: '9558 8019 0240 16485',
            },
        ],
    },
    // 当前选中的银行卡id
    currentCardId: {
        type: String,
        default: '2',
    },
})

const state = reactive({
    // 当前选中的银行卡id
    currentCardId: props.currentCardId,
})

// 关闭弹窗
const close = () => {
    emit('close')
}
// 确认
const confirm = () => {
    emit('confirm', state.currentCardId)
}
// 添加银行卡
const handelAddCard = () => {
    // 跳转至添加银行卡页面
    router.push({
        name: 'AddBankCard',
    })
}
</script>
