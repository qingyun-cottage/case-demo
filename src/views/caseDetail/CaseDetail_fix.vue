<style lang="less" scoped>
.page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-fill-tertiary, #f2f3f5);
}

.nav_bar {
    position: fixed;
    width: 100%;

    .title {
        color: var(--color-white-100, #fff);
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

.banner {
    width: 100%;
    height: 220px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    background: radial-gradient(
        194.94% 141.42% at 100% 0%,
        #355394 0%,
        #0d2459 100%
    );

    .title {
        margin-top: 68px;

        text-align: center;
        text-shadow: 0px 2px 2px rgba(0, 36, 78, 0.2);
        font-family: HarmonyOS Sans SC;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px; /* 133.333% */

        background: linear-gradient(180deg, #fff0e8 0%, #e5cfbe 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .case_status {
        display: flex;
        padding: 6px 12px 6px 8px;
        justify-content: center;
        align-items: center;
        gap: 6px;

        border-radius: 100px;
        background: var(--color-white-10, rgba(255, 255, 255, 0.1));

        .icon {
            width: 18px;
            height: 18px;
        }

        span {
            color: var(--color-warning-default, #ffaa04);
            text-align: center;
            font-family: PingFang SC;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
        }
    }
}

.submenu {
    height: 84px;
    margin: -42px 12px 12px;
    display: flex;
    padding: 0px 4px;
    align-items: flex-start;
    align-self: stretch;

    border-radius: 8px;
    background: var(--color-white-100, #fff);

    .menu_item {
        display: flex;
        padding: 14px 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex: 1 0 0;

        .icon_box {
            width: 32px;
            height: 32px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            .red_tip {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: var(--color-error-default, #e53250);

                position: absolute;
                top: 0;
                right: 0;
            }
            .icon {
                width: 30px;
                height: 30px;
            }
        }

        span {
            color: var(--color-text-primary, #292c33);
            text-align: center;
            font-family: PingFang SC;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
        }
    }

    .disabled {
        display: none;
        opacity: 0.5;
        // 覆盖灰色
        filter: grayscale(80%);
    }
}

.content {
    flex: 1;
    overflow: auto;

    display: flex;
    padding: 0px 12px;
    padding-bottom: 53px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    .basic_info {
        display: flex;
        padding: 0px 16px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;

        border-radius: 8px;
        background: var(--color-white-100, #fff);

        .user_info {
            width: 100%;
            .item {
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

                .title {
                    width: 60px;
                    color: var(--color-text-primary, #292c33);
                    font-family: PingFang SC;
                    font-size: 15px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 22px; /* 146.667% */
                }

                .value {
                    flex: 1 0 0;
                    width: 100%;

                    color: var(--color-text-tertiary, #9398a3);
                    font-family: SF Pro;
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

        .tip_text {
            width: 319px;
            color: var(--color-text-tertiary, #9398a3);
            text-align: right;
            font-family: PingFang SC;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 183.333% */
        }
    }

    .invest_info {
        display: flex;
        padding: 0px 16px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;

        border-radius: 8px;
        background: var(--color-white-100, #fff);

        .money_info {
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
            }

            .total {
                .value {
                    background: #fff7e6;
                    color: #ffaa04;
                }
            }

            .paid {
                .value {
                    background: #e6f9f3;
                    color: #08c787;
                }
            }

            .unpaid {
                .value {
                    background: #eff8ff;
                    color: #3a7afc;
                }
            }
        }

        .contract {
            display: flex;
            padding: 16px 0px;
            align-items: center;
            gap: 10px;
            align-self: stretch;

            border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);

            .title {
                width: 70px;

                color: var(--color-text-primary, #292c33);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */
            }

            .count {
                flex: 1 0 0;

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
    }

    .info_title {
        display: flex;
        padding: 16px 0px;
        align-items: center;
        gap: 10px;
        align-self: stretch;

        color: var(--color-text-primary, #292c33);
        font-family: PingFang SC;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
}

.bottom_box {
    margin-top: -32px;
    display: flex;

    padding: 8px 12px;
    align-items: flex-start;
    gap: 8px;

    background: var(--color-white-100, #fff);

    .van-button {
        height: 54px;
        padding: 8px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;

        border-radius: 8px;

        .btn_text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .title {
                color: var(--color-white-100, #fff);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */
            }
            .describe {
                color: var(--color-white-60, rgba(255, 255, 255, 0.6));
                font-family: PingFang SC;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px; /* 133.333% */
            }
        }
    }
}
</style>

<template>
    <div class="page">
        <van-nav-bar class="nav_bar" :border="false" @click-left="$returnBack">
            <template #title>
                <div class="title">案件详情</div>
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
            <div class="case_status">
                <div class="icon icon_custom">
                    <img src="@/assets/images/status-warning.svg" alt="" />
                </div>
                <span>案件状态信息：{{ '需您确认' }}</span>
            </div>
        </div>

        <div class="submenu">
            <div class="menu_item">
                <div class="icon_box">
                    <div class="red_tip"></div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/menu-item-1.svg" alt="" />
                    </div>
                </div>
                <span>案件公告</span>
            </div>
            <div class="menu_item" :class="{ disabled: true }">
                <div class="icon_box">
                    <div class="red_tip"></div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/menu-item-2.svg" alt="" />
                    </div>
                </div>
                <span>执行进展</span>
            </div>
            <div class="menu_item">
                <div class="icon_box">
                    <div class="red_tip"></div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/menu-item-3.svg" alt="" />
                    </div>
                </div>
                <span>留言回复</span>
            </div>
            <div class="menu_item">
                <div class="icon_box">
                    <div class="red_tip"></div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/menu-item-4.svg" alt="" />
                    </div>
                </div>
                <span>常见问题</span>
            </div>
        </div>

        <div class="content">
            <!-- 基本信息 -->
            <div class="basic_info">
                <div class="info_title">基本信息</div>
                <div class="user_info">
                    <div class="item">
                        <div class="title">
                            <span>案件名称</span>
                        </div>
                        <div class="value">
                            <span>闵界栋非法吸收公众存款案</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="title">
                            <span>姓名</span>
                        </div>
                        <div class="value">
                            <span>钱雅菲</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="title">
                            <span>证件</span>
                        </div>
                        <div class="value">
                            <span>321****6440</span>
                        </div>
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/right_link_gray.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="item">
                        <div class="required_tip">
                            <span>*</span>
                        </div>
                        <div class="title">
                            <span>银行卡</span>
                        </div>
                        <div class="value">
                            <span></span>
                        </div>
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/right_link_gray.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="tip_text">
                    <span>提醒：首次确认请添加收款银行卡。</span>
                </div>
            </div>
            <!-- 投资信息 -->
            <div class="invest_info">
                <div class="info_title">投资信息</div>
                <div class="money_info">
                    <div class="item total">
                        <div class="title">
                            <span>投资总额：</span>
                        </div>
                        <div class="value">
                            <span>
                                {{ regexHandleNum(caseState.investInfo.total) }}
                            </span>
                        </div>
                    </div>
                    <div class="item paid">
                        <div class="title">
                            <span>已兑付总额：</span>
                        </div>
                        <div class="value">
                            <span>
                                {{ regexHandleNum(caseState.investInfo.paid) }}
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
                                    regexHandleNum(caseState.investInfo.unpaid)
                                }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="contract">
                    <div class="title">账户/合同</div>
                    <div class="count">共 3 份</div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/right_link_gray.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom_box" v-if="1">
            <van-button color="#e53250">
                <div class="btn_text">
                    <span class="title">有异议</span>
                    <span class="describe">补充证明材料</span>
                </div>
            </van-button>
            <van-button color="#3a7afc">
                <div class="btn_text">
                    <span class="title">无异议</span>
                    <span class="describe">确认以上信息</span>
                </div>
            </van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 投资金额

const caseState = reactive({
    // 投资金额信息
    investInfo: {
        total: 1000000,
        paid: 200000,
        unpaid: 800000,
    },
})

// 格式化金额千分位
const regexHandleNum = (num: number) => {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',') // 3是千分位，4是万分位
}
</script>
