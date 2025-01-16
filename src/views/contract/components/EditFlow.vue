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
    padding: 10px 12px 53px;

    display: flex;
    flex-direction: column;
    gap: 12px;
    .content_item {
        display: flex;
        padding: 0px 16px;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 8px;
        background: var(--color-white-100, #fff);

        .title {
            display: flex;
            padding: 16px 0px;
            align-items: center;
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
    display: flex;
    flex-direction: column;
    align-self: stretch;
    .info_item {
        display: flex;
        padding-top: 16px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        align-self: stretch;
        border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);
        .title_text {
            width: 100%;
            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */
        }
        .content_text {
            display: flex;
            padding: 16px 0px;
            align-items: center;
            gap: 16px;
            align-self: stretch;
            .van-field {
                padding: 0;
            }
            .icon {
                width: 20px;
                height: 20px;
            }
        }
    }
}

.flow_list {
    display: flex;
    flex-direction: column;
    align-self: stretch;

    .swipe {
        .delete_flow {
            height: 100%;
            padding: 0 20px;
            border-radius: 0;
            border: none;
            background: var(--color-error-default, #e53250);
            .btn_text {
                color: var(--color-white-100, #fff);
                font-family: PingFang SC;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px; /* 142.857% */
            }
        }
    }

    .flow_item {
        display: flex;
        padding: 12px 0px;
        align-items: center;
        gap: 12px;
        align-self: stretch;
        border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);

        .icon {
            width: 36px;
            height: 36px;
        }
        .flow_info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            flex: 1 0 0;
            .flow_type {
                color: var(--color-text-primary, #292c33);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */
            }
            .flow_date {
                color: var(--color-text-tertiary, #9398a3);
                font-family: SF Pro;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px; /* 138.462% */
            }
        }
        .amount {
            color: var(--color-text-primary, #292c33);
            font-family: SF Pro;
            font-size: 15px;
            font-style: normal;
            font-weight: 510;
            line-height: 22px; /* 146.667% */
            margin-right: 12px;
        }
    }

    .btn_box {
        display: flex;
        padding: 16px 0px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        align-self: stretch;
        border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);
        .add_flow {
            display: flex;
            gap: 4px;
            align-items: center;

            color: var(--color-primary-default, #3a7afc);
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */

            .icon {
                width: 20px;
                height: 20px;
            }
        }
    }
}

.files_upload_box {
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
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
</style>

<template>
    <div>
        <div class="page">
            <van-nav-bar
                class="nav_bar"
                :border="false"
                @click-left="$returnBack"
            >
                <template #title>
                    <div class="title">合同(账户)流水</div>
                </template>
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
                <div class="content_item">
                    <div class="title">基本信息</div>
                    <div class="basic_info">
                        <div class="info_item">
                            <div class="title_text">购买产品 (投资平台)</div>
                            <div
                                class="content_text"
                                @click="flowState.showPicker = true"
                            >
                                <van-field
                                    :modelValue="
                                        buyProductOptions.find(
                                            item =>
                                                item.value ===
                                                flowState.basicInfo.buyProduct
                                        )?.text
                                    "
                                    placeholder="请选择购买产品"
                                    readonly
                                    :border="false"
                                />
                                <!-- TODO: 弹窗样式 -->
                                <van-popup
                                    v-model:show="flowState.showPicker"
                                    position="bottom"
                                    teleport="#app"
                                >
                                    <van-picker
                                        show-toolbar
                                        title="投资人类型"
                                        :columns="buyProductOptions"
                                        @confirm="selectBuyProduct"
                                        @cancel="flowState.showPicker = false"
                                    />
                                </van-popup>
                                <div class="icon icon_custom">
                                    <img
                                        src="@/assets/images/right_link_gray.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="info_item">
                            <div class="title_text">合同名称 (账户名称)</div>
                            <div class="content_text">
                                <van-field
                                    v-model="flowState.basicInfo.contractName"
                                    placeholder="请选择购买产品"
                                    clearable
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_item">
                    <div class="title">账单流水</div>
                    <div class="flow_list">
                        <van-swipe-cell
                            class="swipe"
                            v-for="item in flowState.flowList"
                            :key="item.id"
                        >
                            <div class="flow_item">
                                <div class="icon icon_custom">
                                    <img
                                        v-if="item.flowType === 'InvestAmount'"
                                        src="@/assets/images/invest-amount-icon.svg"
                                        alt=""
                                    />
                                    <img
                                        v-else
                                        src="@/assets/images/paid-amount-icon.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="flow_info">
                                    <span class="flow_type">
                                        {{ flowTypeMap.get(item.flowType) }}
                                    </span>
                                    <span class="flow_date">
                                        {{ item.flowDate }}
                                    </span>
                                </div>
                                <div class="amount">
                                    {{ item.amount }}
                                </div>
                            </div>
                            <template #right>
                                <van-button
                                    class="delete_flow"
                                    @click="deleteFlow(item)"
                                >
                                    <span class="btn_text">删除</span>
                                </van-button>
                            </template>
                        </van-swipe-cell>

                        <div class="btn_box">
                            <div class="add_flow" @click="handelClickAddFlow">
                                <div class="icon icon_custom">
                                    <img
                                        src="@/assets/images/add-line.svg"
                                        alt=""
                                    />
                                </div>
                                <span>新增流水</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content_item">
                    <div class="title">合同材料</div>
                    <div class="files_upload_box">
                        <van-uploader
                            class="uploader_custom"
                            v-model="flowState.contractFiles"
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
                        <div class="tip_text">
                            <span>可上传图片、PDF，大小限制4MB内</span>
                        </div>
                    </div>
                </div>
                <div class="content_item">
                    <div class="title">流水材料</div>
                    <div class="files_upload_box">
                        <van-uploader
                            class="uploader_custom"
                            v-model="flowState.flowFiles"
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
                        <div class="tip_text">
                            <span>可上传图片、PDF，大小限制4MB内</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 新增流水 -->
            <van-popup
                v-model:show="flowState.showAddFlow"
                teleport="#app"
                position="right"
                :style="{ width: '100vw', height: '100vh' }"
                @close="closeAddFlow"
            >
                <AddFlow />
            </van-popup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { onBeforeUnmount } from 'vue'
import { reactive } from 'vue'
import AddFlow from './AddFlow.vue'

const flowState = reactive({
    // 显示新增流水
    showAddFlow: false,

    basicInfo: {
        // 购买产品
        buyProduct: '',
        // 合同名称
        contractName: '',
    },
    flowList: [
        {
            id: '1',
            flowType: 'PaidAmount',
            flowDate: '2023-09-27',
            amount: '37728',
        },
        {
            id: '2',
            flowType: 'InvestAmount',
            flowDate: '2023-09-27',
            amount: '2671678',
        },
        {
            id: '3',
            flowType: 'InvestAmount',
            flowDate: '2023-09-27',
            amount: '5438312',
        },
        {
            id: '4',
            flowType: 'InvestAmount',
            flowDate: '2023-09-27',
            amount: '559940',
        },
    ],
    contractFiles: [],
    flowFiles: [],
    // 显示购买产品的选择弹窗
    showPicker: false,
})

// 购买产品选项
const buyProductOptions = [
    {
        text: '产品1',
        value: '1',
    },
    {
        text: '产品2',
        value: '2',
    },
    {
        text: '产品3',
        value: '3',
    },
    {
        text: '产品4',
        value: '4',
    },
]

// 选择购买产品
const selectBuyProduct = (selectObj: any) => {
    flowState.basicInfo.buyProduct = selectObj.selectedValues[0]
    flowState.showPicker = false
}

// 流水类型
const flowTypeMap = new Map([
    ['InvestAmount', '投资本金'],
    ['PaidAmount', '已兑付金额'],
])

// 点击删除流水
const deleteFlow = (item: any) => {
    console.log('删除流水', item)
}

// 返回关闭弹窗不返回上一页
onMounted(() => {
    window.addEventListener('popstate', closeAddFlow, false)
})
onBeforeUnmount(() => {
    window.removeEventListener('popstate', closeAddFlow, false)
})
// 点击新增流水
const handelClickAddFlow = () => {
    flowState.showAddFlow = true
    window.history.pushState(null, '新增流水', '#addFlow')
}
// 关闭流水弹窗
const closeAddFlow = () => {
    // 多级弹窗时的权宜之计,不是很优雅
    if (window.location.hash === '#openFlow') {
        flowState.showAddFlow = false
    }
}

// TODO: 返回关闭图片预览 有空再做
</script>
