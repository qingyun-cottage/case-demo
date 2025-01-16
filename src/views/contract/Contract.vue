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
}

.contract_list {
    display: flex;
    flex-direction: column;
    align-self: stretch;

    border-radius: 8px;
    background: var(--color-white-100, #fff);
    overflow: hidden;

    .swipe {
        border-bottom: 0.5px solid var(--color-border-secondary, #f0f0f2);
        .delete_contract {
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

    & > div:last-child {
        border: none;
    }

    .van-cell {
        padding: 16px;
        .icon {
            width: 20px;
            height: 20px;
        }
    }

    .contract_item {
        display: flex;
        align-items: center;
        gap: 16px;
        align-self: stretch;

        .icon {
            width: 40px;
            height: 40px;
        }

        .content_box {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            flex: 1 0 0;
            padding-right: 16px;
            .title {
                color: var(--color-text-primary, #292c33);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */
            }
            .money {
                display: flex;
                align-items: center;
                gap: 8px;
                align-self: stretch;
                .deposit {
                    background: var(--color-success-bg, rgba(8, 199, 135, 0.1));
                    color: var(--color-success-default, #08c787);
                }
                .withdrawal {
                    background: var(--color-warning-bg, rgba(255, 170, 4, 0.1));
                    color: var(--color-warning-default, #ffaa04);
                }
                .money_item {
                    display: flex;
                    padding: 4px 8px;
                    justify-content: center;
                    align-items: center;
                    gap: 4px;
                    border-radius: 4px;

                    font-family: SF Pro;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 510;
                    line-height: 18px; /* 138.462% */
                }
            }
        }
    }

    .btn_box {
        width: 100%;
        box-sizing: border-box;
        padding: 14px 16px;
        .add_contract {
            width: 100%;
            height: 56px;
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

.combine_info {
    margin-top: 12px;
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    border: 1px solid var(--color-border-secondary, #f0f0f2);
    background: var(--color-white-100, #fff);

    .item {
        display: flex;
        height: 47px;
        padding: 16px 0px;
        box-sizing: border-box;
        align-items: center;
        gap: 8px;
        align-self: stretch;

        .title {
            width: 91px;
            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 146.667% */
        }
        .value {
            width: 220px;
            height: 31px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 4px;

            text-align: center;
            font-family: SF Pro;
            font-size: 20px;
            font-style: normal;
            font-weight: 590;
            line-height: 28px; /* 140% */
        }

        &.total .value {
            background: #fff7e6;
            color: #ffaa04;
        }

        &.paid .value {
            background: #e6f9f3;
            color: #08c787;
        }

        &.unpaid .value {
            background: #eff8ff;
            color: #3a7afc;
        }
    }
}
</style>

<template>
    <div class="page">
        <van-nav-bar class="nav_bar" :border="false" @click-left="$returnBack">
            <template #title>
                <div class="title">合同(账户)列表</div>
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
            <!-- 合同列表 -->
            <div class="contract_list">
                <van-swipe-cell
                    class="swipe"
                    v-for="item in contractState.contractList"
                    :key="item.id"
                    :disabled="!isEditable"
                >
                    <van-cell
                        center
                        :border="false"
                        @click="contractItemClick(item)"
                    >
                        <template #title>
                            <div class="contract_item">
                                <div class="icon icon_custom">
                                    <img
                                        src="@/assets/images/contract-item-fill.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="content_box">
                                    <div class="title">
                                        <span>{{ item.title }}</span>
                                    </div>
                                    <div class="money">
                                        <div class="money_item deposit">
                                            <span>入金</span>
                                            <span>
                                                {{
                                                    $filters.formatMoney(
                                                        item.deposit
                                                    )
                                                }}
                                            </span>
                                        </div>
                                        <div class="money_item withdrawal">
                                            <span>出金</span>
                                            <span>
                                                {{
                                                    $filters.formatMoney(
                                                        item.withdrawal
                                                    )
                                                }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template #right-icon>
                            <div class="icon icon_custom">
                                <img
                                    src="@/assets/images/right_link_gray.svg"
                                    alt=""
                                />
                            </div>
                        </template>
                    </van-cell>
                    <template #right>
                        <van-button
                            class="delete_contract"
                            @click="deleteContract(item)"
                        >
                            <span class="btn_text">删除</span>
                        </van-button>
                    </template>
                </van-swipe-cell>

                <div class="btn_box" v-if="isEditable">
                    <van-button class="add_contract" @click="addContract">
                        <div class="btn_text">
                            <div class="icon icon_custom">
                                <img
                                    src="@/assets/images/file-add-fill.svg"
                                    alt=""
                                />
                            </div>
                            <div class="text">添加合同</div>
                        </div>
                    </van-button>
                </div>
            </div>
            <!-- 总计信息 -->
            <div class="combine_info">
                <div class="item total">
                    <div class="title">
                        <span>投资总额：</span>
                    </div>
                    <div class="value">
                        <span>
                            {{
                                $filters.formatMoney(
                                    contractState.combineInfo.total
                                )
                            }}
                        </span>
                    </div>
                </div>
                <div class="item paid">
                    <div class="title">
                        <span>已兑付总额：</span>
                    </div>
                    <div class="value">
                        <span>
                            {{
                                $filters.formatMoney(
                                    contractState.combineInfo.paid
                                )
                            }}
                        </span>
                    </div>
                </div>
                <div class="item unpaid">
                    <div class="title">
                        <span>未兑付总额：</span>
                    </div>
                    <div class="value">
                        <span>
                            {{
                                $filters.formatMoney(
                                    contractState.combineInfo.unpaid
                                )
                            }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 合同流水 -->
        <van-popup
            v-model:show="contractState.showFlow"
            teleport="#app"
            position="right"
            :style="{ width: '100vw', height: '100vh' }"
            @close="closeFlow"
        >
            <EditFlow v-if="isEditable" />
            <FlowDetail v-else />
        </van-popup>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { onMounted } from 'vue'
import { reactive } from 'vue'
import FlowDetail from './components/FlowDetail.vue'
import EditFlow from './components/EditFlow.vue'

const props = defineProps({
    // 是否可以编辑
    isEditable: {
        type: Boolean,
        default: !false,
    },
})

const contractState = reactive({
    // 显示合同详情
    showFlow: false,

    contractList: [
        {
            id: '1',
            title: '科普信息化建设工程开展投标合同',
            deposit: 278953,
            withdrawal: 278953,
        },
        {
            id: '2',
            title: '科普信息化建设工程iewiewoewi dfjk开展投标合同',
            deposit: 278953,
            withdrawal: 278953,
        },
        {
            id: '3',
            title: '科普信息化建设工程开展投标合同',
            deposit: 278953,
            withdrawal: 278953,
        },
        {
            id: '4',
            title: '科普信息化建设工程开展投标合同',
            deposit: 278953,
            withdrawal: 278953,
        },
    ],
    combineInfo: {
        total: 1000000,
        paid: 200000,
        unpaid: 800000,
    },
})

// 点击删除合同
const deleteContract = (item: any) => {
    console.log('删除合同', item)
}

// 添加合同
const addContract = () => {
    console.log('添加合同')
    contractState.showFlow = true
    window.history.pushState(null, '合同流水', '#openFlow')
}
// 返回关闭弹窗不返回上一页
onMounted(() => {
    window.addEventListener('popstate', closeFlow, false)
})
onBeforeUnmount(() => {
    window.removeEventListener('popstate', closeFlow, false)
})
// 点击合同item
const contractItemClick = (item: any) => {
    console.log(item)
    contractState.showFlow = true
    window.history.pushState(null, '合同流水', '#openFlow')
}
// 关闭流水弹窗
const closeFlow = () => {
    // 多级弹窗时的权宜之计,不是很优雅
    if (window.location.hash === '') {
        contractState.showFlow = false
    }
}
// 页面刷新时,设置window.location.hash
onMounted(() => {
    window.history.replaceState(
        '',
        document.title,
        window.location.pathname + window.location.search
    )
})
</script>
