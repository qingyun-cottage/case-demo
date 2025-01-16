<style lang="less" scoped>
.tag_select_box {
    padding: 12px;
    display: flex;
    align-items: flex-start;
    gap: 6px;
    overflow-x: auto;

    .tag_item.active {
        background: var(--color-primary-default, #3a7afc);
        span {
            color: var(--color-white-100, #fff);
        }
    }

    .tag_item {
        display: flex;
        padding: 7px 16px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        // flex: 1 0 0;
        border-radius: 6px;
        background: var(--color-white-100, #fff);

        span {
            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px; /* 138.462% */
            // 不换行
            white-space: nowrap;
        }
    }
}

.list {
    margin: 0 12px;
    border-radius: 8px;
    overflow: hidden;

    .van-cell {
        padding: 16px;
        .icon {
            width: 20px;
            height: 20px;
        }
    }

    .case_item {
        display: flex;
        align-items: center;
        gap: 16px;
        align-self: stretch;

        .icon_box {
            width: 40px;
            height: 40px;
            position: relative;

            .red_tip {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: var(--color-error-default, #e53250);

                position: absolute;
                top: -6px;
                right: -5px;
            }

            .icon {
                width: 40px;
                height: 40px;
            }
        }

        .content_box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 4px;
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

            .tag {
                display: flex;
                align-items: center;
                gap: 6px;
                align-self: stretch;

                .van-tag {
                    display: flex;
                    padding: 2px 6px;
                    align-items: center;
                    border-radius: 4px;

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

.apply {
    margin: 40px 0 13px;
    padding: 0px 12px;

    .tip_text {
        height: 56px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: var(--color-text-primary, #292c33);
        text-align: center;
        font-family: PingFang SC;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 140% */
    }

    .reg_list {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .investor {
            background: #fdf9ee;
            .btn {
                background: #ffaa04;
            }
        }

        .inheritor {
            background: #e6f9f3;
            .btn {
                background: #16ca8e;
            }
        }

        .attorney {
            background: #f1f6ff;
            .btn {
                background: #3a7afc;
            }
        }

        .reg_item {
            display: flex;
            height: 68px;
            align-items: center;
            padding: 0 16px;
            gap: 16px;
            border-radius: 8px;
            // background: #e6f9f3;

            .icon_box {
                width: 48px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                background: #fff;
                .icon {
                    width: 24px;
                    height: 24px;
                }
            }

            .text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 2px;
                flex: 1 0 0;

                .title {
                    color: var(--color-text-primary, #292c33);
                    font-family: PingFang SC;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px; /* 150% */
                }

                .describe {
                    color: var(--color-text-tertiary, #9398a3);
                    font-family: PingFang SC;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 16px; /* 133.333% */
                }
            }

            .btn {
                display: flex;
                height: 28px;
                padding: 0px 16px;
                align-items: center;
                border-radius: 100px;

                color: #fff;
                font-family: PingFang SC;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px; /* 112.5% */
            }
        }
    }
}
</style>

<template>
    <div>
        <div class="tag_select_box">
            <div
                class="tag_item"
                :class="{ active: item.id == tagState.active }"
                v-for="item in filterTagList"
                :key="item.id"
                @click="handleClickTag(item)"
            >
                <span>{{ item.name }}</span>
            </div>
        </div>
        <div class="list">
            <!-- vant 单元格 -->
            <van-cell
                v-for="item in filterCaseList"
                :key="item.personId"
                :title="item.projectName"
                center
                @click="caseItemClick(item)"
            >
                <template #title>
                    <div class="case_item">
                        <div class="icon_box">
                            <div class="red_tip" v-show="item.tip"></div>
                            <div class="icon icon_custom">
                                <img
                                    src="@/assets/images/case-item-fill.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="content_box">
                            <div class="title">
                                <span>{{ item.projectName }}</span>
                            </div>
                            <div class="tag">
                                <van-tag
                                    :color="statusType.get(item.status)?.color"
                                    :text-color="
                                        statusType.get(item.status)?.textColor
                                    "
                                >
                                    {{ statusType.get(item.status)?.text }}
                                </van-tag>
                                <van-tag color="#f2f3f5" text-color="#9398a3">{{
                                    item.type
                                }}</van-tag>
                            </div>
                        </div>
                    </div>
                </template>
                <template #right-icon>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/right_link_gray.svg" alt="" />
                    </div>
                </template>
            </van-cell>
        </div>
        <div class="apply">
            <div class="tip_text">
                <span>若无您的案件</span>
                <span>可在下方选择身份并登记申请</span>
            </div>
            <div class="reg_list">
                <div class="reg_item investor">
                    <div class="icon_box">
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/exchange-funds-fill.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="text">
                        <span class="title">我是投资人</span>
                        <span class="describe">投资受损人本人</span>
                    </div>
                    <div class="btn" @click="handleClickReg('investor')">
                        登记
                    </div>
                </div>
                <div class="reg_item inheritor">
                    <div class="icon_box">
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/hand-coin-fill.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="text">
                        <span class="title">我是继承人</span>
                        <span class="describe">投资受损人的第一顺位继承人</span>
                    </div>
                    <div class="btn" @click="handleClickReg('inheritor')">
                        登记
                    </div>
                </div>
                <div class="reg_item attorney">
                    <div class="icon_box">
                        <div class="icon icon_custom">
                            <img
                                src="@/assets/images/shield-user-fill.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="text">
                        <span class="title">我是代理人</span>
                        <span class="describe">投资受损人委托指定的代理人</span>
                    </div>
                    <div class="btn" @click="handleClickReg('attorney')">
                        登记
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import { computed } from 'vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
    caseList: {
        type: Array as () => {
            personId: number
            projectName: string
            status: string
            type: string
            tip: boolean
        }[],
        default: () => [],
    },
})

// 标签状态
const tagState = reactive({
    tags: [
        {
            id: 0,
            name: '全部',
            active: true,
        },
        {
            id: 1,
            name: '本人',
            active: false,
        },
        {
            id: 2,
            name: '代理人',
            active: false,
        },
        {
            id: 3,
            name: '继承人',
            active: false,
        },
        {
            id: 4,
            name: '后台导入',
            active: false,
        },
    ],
    active: 0,
})

// 点击切换标签
const handleClickTag = (item: any) => {
    tagState.active = item.id
    tagState.tags.forEach((tag: any) => {
        if (tag.id === item.id) {
            tag.active = true
        } else {
            tag.active = false
        }
    })
}

// 案件状态 待确认 PENDING 有异议 DISSENT 已确认 CONFIRMED
const statusType = new Map([
    [
        'PENDING',
        {
            text: '待确认',
            value: 'PENDING',
            color: '#fff7e6',
            textColor: '#ffaa04',
        },
    ],
    [
        'DISSENT',
        {
            text: '有异议',
            value: 'DISSENT',
            color: '#fcebed',
            textColor: '#e53250',
        },
    ],
    [
        'CONFIRMED',
        {
            text: '已确认',
            value: 'CONFIRMED',
            color: '#e6f9f3',
            textColor: '#08c787',
        },
    ],
])

// 标签显示的状态 案件列表的状态
const filterTagList = computed(() => {
    const tagList = tagState.tags.map((item: any) => {
        return {
            ...item,
            count: 0,
        }
    })
    tagList[0].count = caseListState.list.length
    tagList[1].count = caseListState.list.filter((item: any) => {
        return item.type === '本人'
    }).length
    tagList[2].count = caseListState.list.filter((item: any) => {
        return item.type === '代理人'
    }).length
    tagList[3].count = caseListState.list.filter((item: any) => {
        return item.type === '继承人'
    }).length
    tagList[4].count = caseListState.list.filter((item: any) => {
        return item.type === '后台导入'
    }).length
    return tagList.filter((item: any) => {
        return item.count > 0
    })
})

// 过滤的案件列表
const filterCaseList = computed(() => {
    console.log(props.caseList)
    if (tagState.active === 0) {
        return caseListState.list
    }
    return caseListState.list.filter((item: any) => {
        return item.type === tagState.tags[tagState.active].name
    })
})

// 案件列表
const caseListState = reactive({
    list: [
        {
            personId: 1,
            projectName: '盛通保理 (财富中心) 非法吸收公众存款案',
            status: 'PENDING',
            type: '本人',
            tip: true,
        },
        {
            personId: 2,
            projectName: '闵界栋非法吸收公众存款案',
            status: 'PENDING',
            type: '代理人',
            tip: true,
        },
        {
            personId: 3,
            projectName: '巨如集团、胡立勇集资诈骗案',
            status: 'DISSENT',
            type: '代理人',
            tip: false,
        },
        {
            personId: 4,
            projectName: '贝米钱包非法吸收公众存款案',
            status: 'CONFIRMED',
            type: '后台导入',
            tip: false,
        },
        {
            personId: 5,
            projectName: '快鹿集资诈骗案件',
            status: 'DISSENT',
            type: '本人',
            tip: false,
        },
    ],
})

// 点击案件item
const caseItemClick = (item: any) => {
    console.log(item)

    // 跳转详情页
    router.push({
        name: 'CaseDetail',
        query: {
            id: item.id,
            _t: Date.now(),
        },
        // vue官方在2022-08-22做了修改，使用params传参是如果，路径上没有:xx参数，params将会失效。
        // params:{
        //     _t: Date.now(),
        // }
    })
}

// 点击登记
const handleClickReg = (type: string) => {
    // 根据type跳转不同的登记页
    router.push({
        name: 'CaseSelect',
        query: {
            type,
        },
    })
}
</script>
