<style lang="less" scoped>
.page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-fill-tertiary, #f2f3f5);
}

.nav_box {
    height: 48px;
}

.nav_bar {
    position: fixed;
    width: 100%;

    background: var(--color-fill-tertiary, #f2f3f5);

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

.search_box {
    padding: 10px 12px;
    // align-items: center;
    .van-field {
        display: flex;
        height: 36px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex: 1 0 0;

        padding: 0 16px;

        border-radius: 100px;
        background: var(--color-white-100, #fff);

        // color: var(--color-text-quaternary, #f00);
        // font-family: PingFang SC;
        // font-size: 14px;
        // font-style: normal;
        // font-weight: 400;
        // line-height: 20px; /* 142.857% */

        //         color: var(--color-text-primary, #292C33);
        // font-family: PingFang SC;
        // font-size: 15px;
        // font-style: normal;
        // font-weight: 400;
        // line-height: 22px; /* 146.667% */

        .icon {
            width: 16px;
            height: 16px;
        }
    }
}

.content {
    flex: 1;
    overflow: auto;
    padding: 10px 12px 53px;
    // box-sizing: border-box;
}

.case_list {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .case_item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        border-radius: 8px;
        background: var(--color-white-100, #fff);

        .text_box {
            display: flex;
            padding: 12px 16px 16px 16px;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            align-self: stretch;

            .title {
                display: flex;
                align-items: center;
                align-self: stretch;

                color: var(--color-primary-default, #3a7afc);
                font-family: PingFang SC;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px; /* 150% */

                .icon {
                    flex-shrink: 0;
                    width: 24px;
                    height: 24px;
                }
            }

            .describe {
                color: var(--color-text-tertiary, #9398a3);
                font-family: PingFang SC;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px; /* 138.462% */
            }
        }

        .info_box {
            display: flex;
            padding: 16px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;

            border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);

            .court {
                color: var(--color-text-primary, #292c33);
                text-align: center;
                font-family: PingFang SC;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px; /* 142.857% */
            }

            .case_number {
                // color: var(--color-text-tertiary, #9398a3);
                color: var(--color-text-primary, #292c33);
                text-align: center;
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
        <div class="nav_box">
            <van-nav-bar
                class="nav_bar"
                :border="false"
                @click-left="$returnBack"
            >
                <template #title>
                    <div class="title">选择案件</div>
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
        </div>
        <div class="search_box">
            <van-field
                v-model="state.searchText"
                placeholder="搜索案件"
                @update:model-value="handleSearchExchange"
                center
            >
                <template #left-icon>
                    <div class="icon icon_custom">
                        <img src="@/assets/images/search-icon.svg" alt="" />
                    </div>
                </template>
            </van-field>
        </div>
        <div class="content">
            <div class="case_list">
                <!-- 没有数据时 -->
                <van-empty
                    v-if="state.caseList.length === 0"
                    image-size="100"
                    description="暂无申请"
                />
                <div
                    class="case_item"
                    v-for="item in state.caseList"
                    :key="item.id"
                    @click="applyItemClick(item)"
                >
                    <div class="text_box">
                        <div class="title">
                            <span>
                                {{ item.title }}
                            </span>
                            <div class="icon icon_custom">
                                <img
                                    src="@/assets/images/right-line-blue.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="describe">
                            <span>
                                {{ item.describe }}
                            </span>
                        </div>
                    </div>
                    <div class="info_box">
                        <!-- 所属法院 -->
                        <span class="court">
                            {{ item.court }}
                        </span>
                        <!-- 案号 -->
                        <span class="case_number">
                            {{ item.case_number }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

type StateType = {
    type: string
    searchText: string
    caseList: {
        id: number
        title: string
        describe: string
        court: string
        case_number: string
    }[]
}

const state: StateType = reactive({
    type: '',
    // 搜索
    searchText: '',
    // 案件列表
    caseList: [],
})

onMounted(() => {
    // 获取类型
    const type = router.currentRoute.value.query.type as string
    state.type = type

    // 搜索案件
    searchCase()
})

// 搜索案件
const searchCase = () => {
    console.log('searchCase')

    // 先用假数据

    // const res = await api.searchCase({
    //     searchText: state.searchText,
    // })

    // console.log('res', res)

    // if (res.code === 0) {
    //     state.caseList = res.data
    // }

    state.caseList = [
        {
            id: 1,
            title: '宝象集资诈骗案',
            describe:
                '被告人侯彦卫以其亲友的名义先后注册成立西控财富(上海) 投资管理有限公司、上海宝象金融信息服务有限公司等关联公司，其后使用公司实际控制的超级责权人账户对外放款形成债权，再以债权转让形式包装理财产品，以高额利息为诱饵向不特定公众非法集资、诈骗。',
            court: '上海市第一中级人民法院',
            case_number: '(2023) 沪01执434号',
        },
        {
            id: 2,
            title: '中亿国星集资诈骗案',
            describe:
                '被告人杜礼宾实际控制的中亿国星投资发展有限公司、中亿国星 (上海) 股权投资基金管理有限公司和上海享盈资产管理有限公司，未经国家有关主管部广批准，将收购的不良债权、票据包装成理财产品，采用发放宣传手册、业务员介绍、口口相传等方式，以承诺保本付息及杜礼,宾实际控制的浙江银合控股集团有限公司等关联公司承担连带担保责任为诱饵向不特定公众非法集资、诈骗。',
            court: '上海市浦东新区人民法院',
            case_number: '(2022) 沪01执1644号',
        },
        {
            id: 3,
            title: '联璧金融',
            describe:
                '被告人顾国平等所实际控制的上海联璧电子科技 (集团) 有限公司、华夏万家 (北京) 金融服务外包有限公司等公司及关联企业为平台，向不特定公众非法集资、诈骗。',
            court: '上海市第一中级人民法院',
            case_number: '(2022) 沪01执895号',
        },
        {
            id: 3,
            title: '上海莱好股权投资基金管理有限公司海峰集资诈骗罪案',
            describe:
                '海峰等人成立莱好公司（其前身系上海硅莱投资发展有限公司），对外宣称莱好公司开展有多伦路养老院、闵行天恩月子中心、共清护理院、中纪养老等投资项目，采用发放宣传单、组织旅游聚餐、开办酒会等形式，招揽群众至该公司投资并签订协议，约定到期支付6.5%-13%不等的年化收益。在上述过程中，海峰还谎称莱好公司拥有多套南京房产抵押权，带领部分投资群众及业务人员参观其红木家具，以此证明莱好公司及其个人具有资金实力。莱好公司自成立至案发，上述宣传项目从未实际运营并产生收益。',
            court: '上海市虹口区人民法院',
            case_number: '（2021）沪0109执6248号',
        },
    ]

    // TODO: 加载功能 关闭加载
}

const handleSearchExchange = () => {
    console.log('搜索案件')
    // 搜索案件
    searchCase()
}

// 申请类型
const applyType = new Map([
    [
        'investor',
        {
            text: '投资人申请',
            routerName: 'InvestorApply',
        },
    ],
    [
        'inheritor',
        {
            text: '继承人申请',
            routerName: 'InheritorApply',
        },
    ],
    [
        'attorney',
        {
            text: '代理人申请',
            routerName: 'AttorneyApply',
        },
    ],
])

// 点击申请
const applyItemClick = (item: any) => {
    console.log('applyItemClick', item)
    console.log('state.type', state.type)
    // 跳转到申请页面

    router.push({
        name: applyType.get(state.type)?.routerName,
        query: {
            id: item.id,
        },
    })
}

//
</script>
