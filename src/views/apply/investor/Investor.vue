<style lang="less" scoped>
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
</style>

<template>
    <div class="page">
        <van-nav-bar class="nav_bar" :border="false" @click-left="$returnBack">
            <template #title>
                <div class="title">投资人登记</div>
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
            <!-- 驳回说明 -->
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
            <!-- 基本信息 -->
            <div class="content_item">
                <div class="title">基本信息</div>
                <div class="basic_info">
                    <div class="info_item">
                        <div class="title_text">案件名称</div>
                        <div class="content_text">
                            <span>闵界栋非法吸收公众存款案</span>
                        </div>
                    </div>
                    <div class="info_item">
                        <div class="title_text">姓名</div>
                        <div class="content_text">
                            <span>张三</span>
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
                </div>
            </div>
            <!-- 合同流水 查看 -->
            <div
                class="content_item"
                v-if="
                    applyState.applyStatus === 'PENDING' ||
                    applyState.applyStatus === 'PASS'
                "
            >
                <div class="title">合同流水</div>
                <div class="contract" @click="methods.handleClickContract">
                    <div class="title_text">账户/合同</div>
                    <div class="count">共 3 份</div>
                    <div class="edit">查看</div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/right_link_gray.svg" alt="" />
                    </div>
                </div>
            </div>
            <!-- 合同流水 编辑 -->
            <div class="content_item" v-else>
                <div class="title">合同流水</div>
                <div class="contract" @click="methods.handleClickContract">
                    <div class="required_tip">
                        <span>*</span>
                    </div>
                    <div class="title_text">账户/合同</div>
                    <div class="count">共 3 份</div>
                    <div class="edit">编辑</div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/right_link_gray.svg" alt="" />
                    </div>
                </div>
            </div>
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
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 投资人登记
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
                text: '提交审核',
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
