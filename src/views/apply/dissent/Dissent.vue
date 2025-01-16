<style lang="less" scoped>
.select_box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    .select_item {
        display: flex;
        padding: 12px 16px;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        border-radius: 8px;
        background: var(--color-fill-quaternary, #fafafa);
        // 单选框的图标大小
        --van-radio-size: 20px;
        &.active {
            background: var(--color-primary-bg, rgba(58, 123, 252, 0.07));
            .item_text {
                color: var(--color-primary-default, #3a7afc);
            }
        }
        .item_text {
            color: var(--color-text-primary, #292c33);
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

.contract {
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    position: relative;

    .required_tip {
        position: absolute;
        left: -10px;
        top: 0px;

        color: var(--color-error-default, #e53250);
        font-family: PingFang SC;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 146.667% */
    }

    .title_text {
        color: var(--color-text-primary, #292c33);
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

    .edit {
        color: var(--color-primary-default, #3a7afc);
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

.message_box {
    width: 100%;
    border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);
    .van-field {
        padding: 12px 0 0;
        // 隐藏滚动条
        ::-webkit-scrollbar {
            display: none;
        }
    }
}

.collection_box {
    width: 100%;
    .info_item {
        display: flex;
        padding: 16px 0px;
        align-items: center;
        gap: 20px;
        align-self: stretch;
        border-bottom: 0.5px solid var(--color-border-secondary, #f0f0f2);
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

            color: var(--color-text-primary, #292c33);
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

.reject_info {
    .info_item {
        display: flex;
        padding-bottom: 16px;
        align-items: center;
        gap: 20px;
        align-self: stretch;
        &:last-child {
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

        .content_box {
            flex: 1 0 0;

            color: var(--color-text-primary, #5f6570);
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */

            .content_text {
                color: var(--color-text-tertiary, #9398a3);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */
            }
        }
    }
}
</style>

<template>
    <div class="page">
        <van-nav-bar class="nav_bar" :border="false" @click-left="$returnBack">
            <template #title>
                <div class="title">异议申请</div>
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
            <div
                class="apply_status"
                :class="applyStatusType.get(applyState.applyStatus)?.className"
                @click="changeApplyStatus"
            >
                <div
                    class="icon icon_custom"
                    :class="
                        applyStatusType.get(applyState.applyStatus)?.className
                    "
                >
                    <img
                        class="primary"
                        src="@/assets/images/status-primary.svg"
                        alt=""
                    />
                    <img
                        class="warning"
                        src="@/assets/images/status-warning.svg"
                        alt=""
                    />
                    <img
                        class="success"
                        src="@/assets/images/status-success.svg"
                        alt=""
                    />
                    <img
                        class="error"
                        src="@/assets/images/status-error.svg"
                        alt=""
                    />
                    <img
                        class="default"
                        src="@/assets/images/status-default.svg"
                        alt=""
                    />
                </div>
                <span>
                    审核状态：{{
                        applyStatusType.get(applyState.applyStatus)?.text
                    }}
                </span>
            </div>
        </div>

        <div class="content">
            <!-- 未提交 已驳回 已撤回 -->
            <template
                v-if="
                    applyState.applyStatus === 'TO_SUBMIT' ||
                    applyState.applyStatus === 'REJECT' ||
                    applyState.applyStatus === 'WITHDRAW'
                "
            >
                <div
                    class="content_item"
                    v-if="applyState.applyStatus === 'REJECT'"
                >
                    <div class="title">驳回说明</div>
                    <!-- 驳回理由 驳回理由内容 -->
                    <!-- 审核材料 img -->
                    <div class="reject_info">
                        <div class="info_item">
                            <div class="title_text">驳回理由</div>
                            <div class="content_box">
                                <span>驳回理由内容</span>
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">审核材料</div>
                            <div class="content_box">
                                <span>图片</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_item">
                    <!-- <div class="reject_info">
                        <div class="info_item" style="padding-top: 16px;">
                            <div class="title_text">驳回理由</div>
                            <div class="content_box">
                                <span>驳回理由内容</span>
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">审核材料</div>
                            <div class="content_box">
                                <span>图片</span>
                            </div>
                        </div>
                    </div> -->
                    <div class="title">异议类型</div>
                    <van-radio-group
                        class="select_box"
                        v-model="toSubmitDissent.dissentType"
                    >
                        <van-radio
                            v-for="item in dissentTypeOptions"
                            :key="item.value"
                            :name="item.value"
                            class="select_item"
                            :class="{
                                active:
                                    toSubmitDissent.dissentType === item.value,
                            }"
                            label-position="left"
                        >
                            <span class="item_text">{{ item.label }}</span>
                            <template #icon="props">
                                <div
                                    class="icon icon_custom"
                                    v-show="props.checked"
                                >
                                    <img
                                        src="@/assets/images/checked-line.svg"
                                        alt=""
                                    />
                                </div>
                            </template>
                        </van-radio>
                    </van-radio-group>
                </div>
                <div class="content_item">
                    <div class="title">合同流水</div>
                    <div class="contract" @click="methods.handleClickContract">
                        <div class="required_tip">
                            <span>*</span>
                        </div>
                        <div class="title_text">账户/合同</div>
                        <div class="count">共 3 份</div>
                        <div class="edit">编辑</div>
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/right_link_gray.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="content_item">
                    <div class="title">留言</div>
                    <div class="message_box">
                        <van-field
                            v-model="toSubmitDissent.message"
                            placeholder="请输入留言信息"
                            rows="4"
                            autosize
                            type="textarea"
                            maxlength="500"
                            show-word-limit
                        />
                    </div>
                </div>
            </template>
            <template
                v-else-if="
                    applyState.applyStatus === 'PENDING' ||
                    applyState.applyStatus === 'PASS'
                "
            >
                <div class="content_item">
                    <div class="collection_box">
                        <div class="info_item">
                            <div class="title_text">异议类型</div>
                            <div class="content_text">
                                <span>投资本金异议</span>
                            </div>
                        </div>
                        <div
                            class="info_item"
                            @click="methods.handleClickContract"
                        >
                            <div class="title_text">账户/合同</div>
                            <div class="count">
                                <span>共 3 份</span>
                            </div>
                            <div class="icon icon_custom">
                                <img
                                    src="@/assets/images/right_link_gray.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">留言</div>
                            <div class="content_text">
                                <span
                                    >关于本案件的详细可以在合同流水中查看，其中共有六份合同，总计五十条流水信息。诈骗公私财物价值三千元至一万元以上、三万元至十万元以上、五十万元以上的，应当分别认定为刑法第二百六十六条规定的“数额较大”、“数额巨大”、“数额特别巨大”。</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <div
            class="bottom_box"
            v-if="applyStatusType.get(applyState.applyStatus)?.userBtn.show"
        >
            <div class="fixed_btn_box">
                <van-button
                    class="btn_item"
                    :color="
                        applyStatusType.get(applyState.applyStatus)?.userBtn
                            .color
                    "
                    @click="
                        applyStatusType.get(applyState.applyStatus)?.userBtn
                            .clickFun
                    "
                >
                    <span class="btn_text">
                        {{
                            applyStatusType.get(applyState.applyStatus)?.userBtn
                                .text
                        }}
                    </span>
                </van-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 异议申请
const applyState = reactive({
    // 申请状态 待提交 TO_SUBMIT 待审核 PENDING 已通过 PASS 已驳回 REJECT 已撤回 WITHDRAW
    applyStatus: 'TO_SUBMIT',
})

// TODO: test 记得删除
// 切换审核状态
const changeApplyStatus = () => {
    const statusList = ['TO_SUBMIT', 'PENDING', 'PASS', 'REJECT', 'WITHDRAW']
    const index = statusList.indexOf(applyState.applyStatus)
    const nextIndex = index + 1
    if (nextIndex >= statusList.length) {
        applyState.applyStatus = statusList[0]
    } else {
        applyState.applyStatus = statusList[nextIndex]
    }
}

// 申请异议
const toSubmitDissent = reactive({
    dissentType: '1',
    message: '',
})

// 异议类型选项 投资本金异议 已兑付金额异议 都有异议
const dissentTypeOptions = [
    {
        label: '投资本金异议',
        value: '1',
    },
    {
        label: '已兑付金额异议',
        value: '2',
    },
    {
        label: '都有异议',
        value: '3',
    },
]

// 获取申请详情
onMounted(() => {
    //

    methods.getApplyDetail()
})

const methods = {
    // 点击合同
    handleClickContract: () => {
        // 跳转至合同列表页
        router.push({
            name: 'Contract',
        })
    },

    // 获取申请详情
    getApplyDetail: () => {
        console.log('获取申请详情')
    },

    // 提交申请
    submitApply: () => {
        console.log('提交申请')
    },
    // 撤回申请
    withdrawApply: () => {
        console.log('撤回申请')
    },
    // 重新提交
    reSubmitApply: () => {
        console.log('重新提交')
    },
}

// 审核状态 待提交 TO_SUBMIT 待审核 PENDING 已通过 PASS 已驳回 REJECT 已撤回 WITHDRAW
const applyStatusType = new Map([
    [
        'TO_SUBMIT',
        {
            text: '未提交',
            value: 'TO_SUBMIT',
            className: 'primary',
            userBtn: {
                show: true,
                text: '提交申请',
                color: '#3a7afc',
                clickFun: methods.submitApply,
            },
        },
    ],
    [
        'PENDING',
        {
            text: '待审核',
            value: 'PENDING',
            className: 'warning',
            userBtn: {
                show: true,
                // TODO: 修改文案
                text: '撤回申请',
                color: '#e53250',
                clickFun: methods.withdrawApply,
            },
        },
    ],
    [
        'PASS',
        {
            text: '已通过',
            value: 'PASS',
            className: 'success',
            userBtn: {
                show: false,
            },
        },
    ],
    [
        'REJECT',
        {
            text: '已驳回',
            value: 'REJECT',
            className: 'error',
            userBtn: {
                show: true,
                text: '重新提交',
                color: '#3a7afc',
                clickFun: methods.reSubmitApply,
            },
        },
    ],
    [
        'WITHDRAW',
        {
            text: '已撤回',
            value: 'WITHDRAW',
            className: 'default',
            userBtn: {
                show: true,
                text: '重新提交',
                color: '#3a7afc',
                clickFun: methods.reSubmitApply,
            },
        },
    ],
])
</script>
