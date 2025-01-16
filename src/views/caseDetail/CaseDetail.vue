<style lang="less" scoped>
.page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-fill-tertiary, #f2f3f5);
}

.nav_bar {
    position: fixed;
    width: 100%;
    z-index: 102;
    background: radial-gradient(
        194.94% 141.42% at 100% 0%,
        #355394 0%,
        #0d2459 100%
    );
    background: url(@/assets/images/banner-bg-other-darkblue.jpg);
    background-size: cover;

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

    position: sticky;
    top: -80px;
    z-index: 101;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    background: radial-gradient(
        194.94% 141.42% at 100% 0%,
        #355394 0%,
        #0d2459 100%
    );
    background: url(@/assets/images/banner-bg-other-darkblue.jpg);
    background-size: 100%;
    background-attachment: fixed;

    .title {
        display: none;

        height: 32px;
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

        // position: sticky;
        // top: 48px;
    }

    .title_img {
        // position: sticky;
        // top: 40px;

        margin-top: 40px;

        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .case_status {
        // position: sticky;
        // top: 98px;

        height: 32px;
        box-sizing: border-box;
        display: flex;
        padding: 6px 12px 6px 8px;
        justify-content: center;
        align-items: center;
        gap: 6px;

        border-radius: 100px;
        // background: var(--color-white-10, rgba(255, 255, 255, 0.1));
        // 修改背景色
        background: var(--color-white-10, rgba(0, 0, 0, 0.3));

        .icon {
            width: 18px;
            height: 18px;
            display: none;
            img {
                display: none;
            }
        }

        span {
            color: var(--color-white-60, rgba(255, 255, 255, 0.6));
            text-align: center;
            font-family: PingFang SC;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
        }
    }

    .case_status.warning {
        .warning {
            display: block;
        }
        span {
            color: var(--color-warning-default, #ffaa04);
        }
    }
    .case_status.success {
        .success {
            display: block;
        }
        span {
            color: var(--color-success-default, #08c787);
        }
    }
    .case_status.error {
        .error {
            display: block;
        }
        span {
            color: var(--color-error-default, #e53250);
        }
    }
}

.submenu {
    height: 84px;
    margin: -42px 12px 0px;
    display: flex;
    padding: 0px 4px;
    align-items: flex-start;
    align-self: stretch;

    position: sticky;
    top: 48px;
    z-index: 102;

    border-radius: 8px;
    background: var(--color-white-100, #fff);

    .menu_item {
        display: flex;
        padding: 14px 0px;
        flex-direction: column;
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
        // 覆盖灰色
        filter: grayscale(80%);
        opacity: 0.5;
    }
}

.content {
    flex: 1;
    // overflow: auto;
    margin-top: 12px;
    margin-bottom: 53px;

    display: flex;
    padding: 0px 12px;
    flex-direction: column;
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
            margin-bottom: 12px;
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

            .total .value {
                background: #fff7e6;
                color: #ffaa04;
            }

            .paid .value {
                background: #e6f9f3;
                color: #08c787;
            }

            .unpaid .value {
                background: #eff8ff;
                color: #3a7afc;
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
    height: 54px;

    .fixed_btn_box {
        width: 100%;
        box-sizing: border-box;
        position: fixed;
        bottom: 0;

        padding: 8px 12px 24px;
        display: flex;
        justify-content: center;
        gap: 8px;
        background: var(--color-white-100, #fff);

        .btn_item {
            width: 50%;
            height: 54px;
            padding: 8px 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            border-radius: 8px;

            .btn_text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-self: stretch;

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
            <div class="title_img">
                <img src="@/assets/images/title-darkblue.png" alt="" />
            </div>
            <div
                class="case_status"
                :class="caseStatusType.get(caseState.caseStatus)?.className"
                @click="changeCaseStatus"
            >
                <div
                    class="icon icon_custom"
                    :class="caseStatusType.get(caseState.caseStatus)?.className"
                >
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
                </div>
                <span>
                    案件状态信息：{{
                        caseStatusType.get(caseState.caseStatus)?.text
                    }}
                </span>
            </div>
        </div>

        <div class="submenu">
            <div
                class="menu_item"
                :class="{
                    disabled: caseState.proSetting.enableNotice == false,
                }"
                @click="methods.handleClickMenuItem('Notice')"
            >
                <div class="icon_box">
                    <div
                        class="red_tip"
                        v-show="caseState.proSetting.hasNotice"
                    ></div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/menu-item-1.svg" alt="" />
                    </div>
                </div>
                <span>案件公告</span>
            </div>
            <div
                class="menu_item"
                :class="{
                    disabled: caseState.proSetting.enableProgress == false,
                }"
                @click="methods.handleClickMenuItem('Progress')"
            >
                <div class="icon_box">
                    <div
                        class="red_tip"
                        v-show="caseState.proSetting.hasProgress"
                    ></div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/menu-item-2.svg" alt="" />
                    </div>
                </div>
                <span>执行进展</span>
            </div>
            <div
                class="menu_item"
                :class="{
                    disabled: caseState.proSetting.enableMessage == false,
                }"
                @click="methods.handleClickMenuItem('Message')"
            >
                <div class="icon_box">
                    <div
                        class="red_tip"
                        v-show="caseState.proSetting.hasMessage"
                    ></div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/menu-item-3.svg" alt="" />
                    </div>
                </div>
                <span>留言回复</span>
            </div>
            <div
                class="menu_item"
                :class="{
                    disabled: caseState.proSetting.enableQuestion == false,
                }"
                @click="methods.handleClickMenuItem('Question')"
            >
                <div class="icon_box">
                    <div
                        class="red_tip"
                        v-show="caseState.proSetting.hasQuestion"
                    ></div>
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
                            <span>{{ caseState.basicInfo.caseName }}</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="title">
                            <span>姓名</span>
                        </div>
                        <div class="value">
                            <span>{{ caseState.basicInfo.name }}</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="title">
                            <span>证件</span>
                        </div>
                        <div class="value">
                            <span>{{ caseState.basicInfo.idCard }}</span>
                        </div>
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/right_link_gray.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div
                        class="item"
                        @click="caseState.showBankCardPopup = true"
                    >
                        <div class="required_tip">
                            <span>*</span>
                        </div>
                        <div class="title">
                            <span>银行卡</span>
                        </div>
                        <div class="value">
                            <span>{{ caseState.basicInfo.bankCard }}</span>
                        </div>
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/right_link_gray.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <van-popup
                        v-model:show="caseState.showBankCardPopup"
                        round
                        position="bottom"
                        teleport="#app"
                    >
                        <BankCard
                            @close="caseState.showBankCardPopup = false"
                            @confirm="methods.handleConfirmBankCard"
                        />
                    </van-popup>
                </div>
                <div class="tip_text" v-show="true">
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
                                {{
                                    $filters.formatMoney(
                                        caseState.investInfo.total
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
                                        caseState.investInfo.paid
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
                                        caseState.investInfo.unpaid
                                    )
                                }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="contract" @click="methods.handleClickContract">
                    <div class="title">账户/合同</div>
                    <div class="count">共 3 份</div>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/right_link_gray.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div
            class="bottom_box"
            v-if="caseStatusType.get(caseState.caseStatus)?.showUserBtn"
        >
            <div class="fixed_btn_box">
                <van-button
                    class="btn_item"
                    v-for="item in caseStatusType.get(caseState.caseStatus)
                        ?.userBtnArr"
                    :key="item.title"
                    :color="item.color"
                    @click="item.clickFun"
                >
                    <div class="btn_text">
                        <span class="title">{{ item.title }}</span>
                        <span class="describe">{{ item.describe }}</span>
                    </div>
                </van-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { showConfirmDialog, showSuccessToast } from 'vant'
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BankCard from './components/BankCard.vue'
import { onActivated } from 'vue'
import { watch } from 'vue'

const router = useRouter()

const caseState = reactive({
    id: '',

    // 案件状态 待确认 CONFIRMING 已确认 CONFIRMED 有异议 OBJECTION
    caseStatus: '',

    // 案件配置
    proSetting: {
        // 启用公告
        enableNotice: false,
        // 启用执行进度公告
        enableProgress: false,
        // 启用留言回复
        enableMessage: false,
        // 启用常见问题
        enableQuestion: false,

        // 是否有公告消息
        hasNotice: false,
        // 是否有执行进度公告消息
        hasProgress: false,
        // 是否有留言回复消息
        hasMessage: false,
        // 是否有常见问题消息
        hasQuestion: false,
    },

    // 基本信息
    basicInfo: {
        // 案件名称
        caseName: '',
        // 姓名
        name: '',
        // 证件
        idCard: '',
        // 银行卡
        bankCard: '',
        // 银行卡信息有列表和已选择
    },
    // 显示银行卡弹窗
    showBankCardPopup: false,
    // 补充逻辑 从首页进入页面的时间戳 时间戳改变时关闭页面
    checkTimeStamp: '',

    // 投资金额信息
    investInfo: {
        total: 99999999,
        paid: 99999999,
        unpaid: 99999999,
    },
})

// TODO: test 记得删除
// 切换案件状态
const changeCaseStatus = () => {
    const arr = ['CONFIRMING', 'CONFIRMED', 'OBJECTION']
    const index = arr.indexOf(caseState.caseStatus)
    if (index < arr.length - 1) {
        caseState.caseStatus = arr[index + 1]
    } else {
        caseState.caseStatus = arr[0]
    }
}

// 获取案件详情
onActivated(() => {
    console.log('CaseDetail onActivated')

    // 获取路由params参数
    const checkTimeStamp = router.currentRoute.value.query._t as string
    caseState.checkTimeStamp = checkTimeStamp

    // 获取地址栏参数 ?id=E3C1FEA602CE49DD932C987BDB0BE2EF
    const id = router.currentRoute.value.query.id as string
    caseState.id = id
    methods.getCaseDetail()

    // TODO: 银行卡列表信息也需要更新
})

watch(
    () => caseState.checkTimeStamp,
    (newVal, oldVal) => {
        // 关闭银行卡弹窗
        caseState.showBankCardPopup = false
    }
)

const methods = {
    // 获取案件详情
    getCaseDetail: () => {
        console.log('获取案件详情')
        // 获取案件详情
        // const res = await getCaseDetailApi(caseState.id)
        // console.log(res)
        // 处理数据结构转换
        // 先用假数据

        {
            // 案件状态
            caseState.caseStatus = 'CONFIRMING'

            // 案件配置
            caseState.proSetting = {
                // 启用公告
                enableNotice: true,
                // 启用执行进度公告
                enableProgress: true,
                // 启用留言回复
                enableMessage: true,
                // 启用常见问题
                enableQuestion: true,

                // 是否有公告消息
                hasNotice: true,
                // 是否有执行进度公告消息
                hasProgress: true,
                // 是否有留言回复消息
                hasMessage: true,
                // 是否有常见问题消息
                hasQuestion: true,
            }

            // 案件基本信息
            caseState.basicInfo = {
                // 案件名称
                caseName: '闵界栋非法吸收公众存款案',
                // 姓名
                name: '张三',
                // 证件
                idCard: '321****6440',
                // 银行卡
                bankCard: '招商银行 储蓄卡',
            }
            // 投资信息
            // caseState.investInfo = {
            //     total: 1000000,
            //     paid: 200000,
            //     unpaid: 800000,
            // }
        }
    },

    // 点击菜单项
    handleClickMenuItem: (routeName: string) => {
        console.log('点击菜单项', routeName)
        // 跳转至对应页面
        router.push({
            name: routeName,
        })
    },

    // 确认银行卡
    handleConfirmBankCard: (bankCard: string) => {
        console.log('确认银行卡', bankCard)
        // 修改一些数据后关闭弹窗

        caseState.showBankCardPopup = false
    },

    // 点击查看合同
    handleClickContract: () => {
        // 跳转至合同列表页
        router.push({
            name: 'Contract',
        })
    },

    // 用户按钮点击事件
    // 点击有异议
    handleClickObjection: () => {
        console.log('点击有异议')
        // 跳转至异议申请
        router.push({
            name: 'DissentApply',
            params: {
                // TODO: 测试id 以及其他参数
                id: 'E3C1FEA602CE49DD932C987BDB0BE2EF',
            },
        })
    },
    // 点击无异议
    handleClickNoObjection: () => {
        // 弹窗提示 确认无异议
        showConfirmDialog({
            title: '确认无异议',
            message: '请确认以上信息，确认后不可修改',
            cancelButtonText: '取消',
            confirmButtonText: '确认',
            confirmButtonColor: '#e53250',
            closeOnPopstate: true,
            closeOnClickOverlay: true,
            // confirmButton
            beforeClose: (action: 'confirm' | 'cancel') => {
                return new Promise(async (resolve, reject) => {
                    if (action == 'confirm') {
                        // TODO: 调用确认无异议接口
                        // const res = await noObjectionApi()
                        // console.log(res)
                        // 关闭弹窗
                        setTimeout(() => {
                            console.log('关闭弹窗')
                            resolve(true)
                            // 轻提示
                            showSuccessToast('确认成功')
                            // 刷新页面
                            location.reload()
                        }, 1000)
                    } else {
                        resolve(true)
                    }
                })
            },
        }).catch(() => {})
    },
    // 点击查看异议
    handleClickCheckObjection: () => {
        console.log('点击查看异议')
        // 跳转至异议详情页
        // router.push({
        //     name: 'ObjectionDetail',
        // })
    },
}

// 案件状态 待确认 CONFIRMING 已确认 CONFIRMED 有异议 OBJECTION
const caseStatusType = new Map([
    [
        'CONFIRMING',
        {
            text: '需您确认',
            value: 'CONFIRMING',
            className: 'warning',
            showUserBtn: true,
            userBtnArr: [
                {
                    title: '有异议',
                    describe: '补充证明材料',
                    color: '#e53250',
                    clickFun: methods.handleClickObjection,
                },
                {
                    title: '无异议',
                    describe: '确认以上信息',
                    color: '#3a7afc',
                    clickFun: methods.handleClickNoObjection,
                },
            ],
        },
    ],
    [
        'CONFIRMED',
        {
            text: '已确认',
            value: 'CONFIRMED',
            className: 'success',
            showUserBtn: false,
            userBtnArr: [],
        },
    ],
    [
        'OBJECTION',
        {
            text: '有异议',
            value: 'OBJECTION',
            className: 'error',
            showUserBtn: true,
            userBtnArr: [
                {
                    title: '查看异议',
                    describe: '查看异议处理进度',
                    color: '#ffaa04',
                    clickFun: methods.handleClickCheckObjection,
                },
            ],
        },
    ],
    // other className: 'default'
])
</script>
