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
        .select_box {
            display: flex;
            align-items: center;
            gap: 8px;

            --van-radio-label-margin: 0;
            .van-radio {
                margin-right: 0;
            }

            .select_item.active {
                background: var(--color-primary-bg, rgba(58, 123, 252, 0.07));
                color: var(--color-primary-default, #3a7afc);
            }
            .select_item {
                display: flex;
                height: 32px;
                padding: 0px 16px;
                align-items: center;
                gap: 10px;
                border-radius: 4px;
                background: var(--color-fill-tertiary, #f2f3f5);

                color: var(--color-text-tertiary, #9398a3);
                font-family: PingFang SC;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px; /* 138.462% */
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
</style>

<template>
    <div>
        <div class="page">
            <van-nav-bar
                class="nav_bar"
                :border="false"
                @click-left="$returnBack"
            >
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
                <div class="title">添加流水</div>
                <div class="add_card">
                    <div class="title_text">输入金额添加</div>

                    <div class="item">
                        <div class="label">流水日期</div>
                        <div class="text">
                            <van-field
                                v-model="flowForm.flowDate"
                                placeholder="请选择流水日期"
                                readonly
                                @click="showPicker = true"
                            />
                            <van-popup
                                v-model:show="showPicker"
                                position="bottom"
                                teleport="#app"
                            >
                                <van-date-picker
                                    @confirm="onConfirm"
                                    @cancel="showPicker = false"
                                />
                            </van-popup>
                        </div>
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/calendar-input-line.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="label">流水类型</div>
                        <div class="">
                            <van-radio-group
                                class="select_box"
                                v-model="flowForm.flowType"
                                direction="horizontal"
                            >
                                <van-radio
                                    v-for="item in flowTypeOptions"
                                    :key="item.value"
                                    :name="item.value"
                                    label-position="left"
                                >
                                    <div
                                        class="select_item"
                                        :class="{
                                            active:
                                                item.value ===
                                                flowForm.flowType,
                                        }"
                                    >
                                        <span>
                                            {{ item.label }}
                                        </span>
                                    </div>
                                    <template #icon="props" />
                                </van-radio>
                            </van-radio-group>
                        </div>
                    </div>
                    <div class="item">
                        <div class="label">金额</div>
                        <div class="text">
                            <van-field
                                v-model="flowForm.amount"
                                placeholder="请输入金额"
                                type="number"
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
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const flowForm = reactive({
    // 流水日期
    flowDate: '',
    // 流水类型
    flowType: '',
    // 金额
    amount: '',
})

// 流水类型选项 投资本金 InvestAmount 已兑付金额 PaidAmount
const flowTypeOptions = [
    {
        label: '投资本金',
        value: 'InvestAmount',
    },
    {
        label: '已兑付金额',
        value: 'PaidAmount',
    },
]

// 日期选择
const showPicker = ref(false)
const onConfirm = ({ selectedValues }: any) => {
    const [year, month, day] = selectedValues
    flowForm.flowDate = `${year}年${month}月${day}日`
    showPicker.value = false
}

// 完成并添加
const submit = () => {
    console.log('新增流水信息', flowForm)
    // TODO: 提交流水信息

    router.back()
}
</script>
