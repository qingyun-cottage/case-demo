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

.material_info {
    width: 100%;
    .info_item {
        display: flex;
        padding: 16px 0px;
        align-items: center;
        gap: 20px;
        align-self: stretch;
        border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);
        position: relative;

        .required_tip {
            position: absolute;
            left: -10px;
            top: 16px;

            color: var(--color-error-default, #e53250);
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */
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

            .van-field {
                padding: 0;
            }
        }

        .icon {
            width: 20px;
            height: 20px;
        }
    }
    .relation_files {
        border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);
        position: relative;
        .required_tip {
            position: absolute;
            left: -10px;
            top: 16px;

            color: var(--color-error-default, #e53250);
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */
        }
        .title_text {
            padding: 16px 0 8px;
            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */
        }
        .upload_list {
            display: flex;
        }
        .tip_text {
            margin-top: 8px;
            color: var(--color-text-tertiary, #9398a3);
            font-family: PingFang SC;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px; /* 138.462% */
        }
    }
}
</style>

<template>
    <div class="page">
        <van-nav-bar class="nav_bar" :border="false" @click-left="$returnBack">
            <template #title>
                <div class="title">代理人登记</div>
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
            <!-- 个人资料 -->
            <div class="content_item">
                <div class="title">个人资料</div>
                <div class="basic_info">
                    <div class="info_item">
                        <div class="title_text">姓名</div>
                        <div class="content_text">
                            <span>钱雅菲</span>
                        </div>
                    </div>
                    <div class="info_item">
                        <div class="title_text">手机号</div>
                        <div class="content_text">
                            <span>138****8888</span>
                        </div>
                    </div>
                    <div class="info_item">
                        <div class="title_text">证件</div>
                        <div class="content_text">
                            <span>321****6440</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 材料信息 查看 -->
            <div
                class="content_item"
                v-if="
                    applyState.applyStatus === 'PENDING' ||
                    applyState.applyStatus === 'PASS'
                "
            >
                <div class="title">材料信息</div>
                <div class="material_info">
                    <div class="info_item">
                        <div class="title_text">案件名称</div>
                        <div class="content_text">
                            <span>宝象集资诈骗案</span>
                        </div>
                    </div>
                    <template
                        v-if="
                            applyState.materialInfo.investorType === 'PERSONAL'
                        "
                    >
                        <div class="info_item">
                            <div class="title_text">投资人类型</div>
                            <div class="content_text">
                                <span>个人</span>
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">投资人姓名</div>
                            <div class="content_text">
                                <span>{{
                                    applyState.materialInfo.investorName
                                }}</span>
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">投资人手机号</div>
                            <div class="content_text">
                                <span>{{
                                    applyState.materialInfo.investorPhone
                                }}</span>
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">投资人证件号</div>
                            <div class="content_text">
                                <span>{{
                                    applyState.materialInfo.investorIdentity
                                }}</span>
                            </div>
                        </div>
                    </template>
                    <template
                        v-if="
                            applyState.materialInfo.investorType === 'COMPANY'
                        "
                    >
                        <div class="info_item">
                            <div class="title_text">投资人类型</div>
                            <div class="content_text">
                                <span>企业</span>
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">企业名称</div>
                            <div class="content_text">
                                <span>{{
                                    applyState.materialInfo.companyName
                                }}</span>
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">企业联系电话</div>
                            <div class="content_text">
                                <span>{{
                                    applyState.materialInfo.companyPhone
                                }}</span>
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">统一社会信用代码</div>
                            <div class="content_text">
                                <span>{{
                                    applyState.materialInfo.companyIdentity
                                }}</span>
                            </div>
                        </div>
                    </template>

                    <div class="relation_files">
                        <div class="title_text">关系证明材料1</div>
                        <div class="upload_list">
                            <van-uploader
                                class="uploader_custom"
                                v-model="applyState.materialInfo.relationList"
                                accept=""
                                multiple
                                :deletable="false"
                                @click-preview=""
                                @close-preview=""
                                upload-icon="back-top"
                            >
                                <div class="upload_add" v-if="false">
                                    <div class="icon icon_custom">
                                        <img
                                            src="@/assets/images/file-upload-material.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </van-uploader>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 材料信息 编辑 -->
            <div class="content_item" v-else>
                <div class="title">材料信息</div>
                <div class="material_info">
                    <div class="info_item">
                        <div class="title_text">案件名称</div>
                        <div class="content_text">
                            <span>{{ applyState.materialInfo.caseName }}</span>
                        </div>
                    </div>
                    <div
                        class="info_item"
                        @click="applyState.showPicker = true"
                    >
                        <div class="required_tip">
                            <span>*</span>
                        </div>
                        <div class="title_text">投资人类型</div>
                        <div class="content_text">
                            <van-field
                                :model-value="
                                    investorTypeOptions.find(
                                        item =>
                                            item.value ===
                                            applyState.materialInfo.investorType
                                    )?.text
                                "
                                placeholder="请选择投资人类型"
                                readonly
                            />
                            <!-- TODO: 弹窗样式 -->
                            <van-popup
                                v-model:show="applyState.showPicker"
                                position="bottom"
                                teleport="#app"
                            >
                                <van-picker
                                    show-toolbar
                                    title="投资人类型"
                                    :columns="investorTypeOptions"
                                    @confirm="methods.selectInvestorType"
                                    @cancel="applyState.showPicker = false"
                                />
                            </van-popup>
                        </div>
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/right_link_gray.svg"
                                alt=""
                            />
                        </div>
                    </div>

                    <template
                        v-if="
                            applyState.materialInfo.investorType === 'PERSONAL'
                        "
                    >
                        <div class="info_item">
                            <div class="required_tip">
                                <span>*</span>
                            </div>
                            <div class="title_text">投资人姓名</div>
                            <div class="content_text">
                                <van-field
                                    v-model="
                                        applyState.materialInfo.investorName
                                    "
                                    placeholder="请输入投资人姓名"
                                    clearable
                                />
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="required_tip">
                                <span>*</span>
                            </div>
                            <div class="title_text">投资人手机号</div>
                            <div class="content_text">
                                <van-field
                                    v-model="
                                        applyState.materialInfo.investorPhone
                                    "
                                    placeholder="请输入投资人手机号"
                                    clearable
                                />
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="required_tip">
                                <span>*</span>
                            </div>
                            <div class="title_text">投资人证件号</div>
                            <div class="content_text">
                                <van-field
                                    v-model="
                                        applyState.materialInfo.investorIdentity
                                    "
                                    placeholder="请输入投资人身份证号"
                                    clearable
                                />
                            </div>
                        </div>
                    </template>
                    <template
                        v-if="
                            applyState.materialInfo.investorType === 'COMPANY'
                        "
                    >
                        <div class="info_item">
                            <div class="required_tip">
                                <span>*</span>
                            </div>
                            <div class="title_text">企业名称</div>
                            <div class="content_text">
                                <van-field
                                    v-model="
                                        applyState.materialInfo.companyName
                                    "
                                    placeholder="请输入企业名称"
                                    clearable
                                />
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="required_tip">
                                <span>*</span>
                            </div>
                            <div class="title_text">企业联系电话</div>
                            <div class="content_text">
                                <van-field
                                    v-model="
                                        applyState.materialInfo.companyPhone
                                    "
                                    placeholder="请输入企业联系电话"
                                    clearable
                                />
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="required_tip">
                                <span>*</span>
                            </div>
                            <div class="title_text">统一社会信用代码</div>
                            <div class="content_text">
                                <van-field
                                    v-model="
                                        applyState.materialInfo.companyIdentity
                                    "
                                    placeholder="请输入统一社会信用代码"
                                    clearable
                                />
                            </div>
                        </div>
                    </template>

                    <div class="relation_files">
                        <div class="required_tip">
                            <span>*</span>
                        </div>
                        <div class="title_text">关系证明材料</div>
                        <div class="upload_list">
                            <van-uploader
                                class="uploader_custom"
                                v-model="applyState.materialInfo.relationList"
                                accept=""
                                multiple
                                @click-preview=""
                                @close-preview=""
                                upload-icon="back-top"
                            >
                                <div class="upload_add">
                                    <div class="icon icon_custom">
                                        <img
                                            src="@/assets/images/file-upload-material.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </van-uploader>
                        </div>
                        <div class="tip_text">
                            <span>可上传图片、PDF，大小限制4MB内</span>
                        </div>
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

// 代理人登记
const applyState = reactive({
    // 申请状态 待提交 TO_SUBMIT 待审核 PENDING 已通过 PASS 已驳回 REJECT 已撤回 WITHDRAW
    applyStatus: 'TO_SUBMIT',
    materialInfo: {
        // 案件id
        caseId: '01',
        // 案件名称
        caseName: '宝象集资诈骗案',
        // 投资人类型 个人 PERSONAL 企业 COMPANY
        investorType: 'COMPANY',
        // -- 个人 --
        // 投资人姓名
        investorName: '张三',
        // 投资人手机号
        investorPhone: '137****1234',
        // 投资人证件号
        investorIdentity: '321****1234',
        // -- 企业 --
        // 企业名称
        companyName: '',
        // 企业联系电话
        companyPhone: '',
        // 统一社会信用代码
        companyIdentity: '',

        // 关系证明材料
        relationList: [
            {
                id: '1',
                url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg',
            },
        ],
    },
    // 显示投资人类型选择
    showPicker: false,
})

// 投资人类型
const investorTypeOptions = [
    {
        text: '个人',
        value: 'PERSONAL',
    },
    {
        text: '企业',
        value: 'COMPANY',
    },
]

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
    // 获取申请详情
    getApplyDetail: () => {
        console.log('获取申请详情')
    },

    // 选择投资人类型
    selectInvestorType: (selectObj: any) => {
        applyState.materialInfo.investorType = selectObj.selectedValues[0]
        console.log('选择投资人类型', selectObj.selectedValues[0])
        applyState.showPicker = false
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
