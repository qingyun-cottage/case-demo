<style lang="less" scoped>
.apply_list {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 12px 40px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    gap: 12px;

    .apply_item {
        position: relative;
        width: 100%;
        display: flex;
        padding-top: 16px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 16px;

        border-radius: 8px;
        background: var(--color-white-100, #fff);

        .red_tip {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--color-error-default, #e53250);
            position: absolute;
            left: 5px;
            top: 20px;
        }

        .type_text {
            width: 104px;
            display: flex;
            padding: 4px 0 4px 16px;
            justify-content: flex-start;
            align-items: flex-start;

            background: linear-gradient(
                90deg,
                rgba(58, 97, 252, 0.2) 0%,
                rgba(255, 255, 255, 0) 100%
            );

            color: var(--color-primary-default, #3a7afc);
            font-family: PingFang SC;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
        }

        .text_box {
            display: flex;
            padding: 0px 16px;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            align-self: stretch;

            .title {
                color: var(--color-text-primary, #292c33);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */
            }

            .text {
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
            padding: 12px 16px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;

            border-top: 0.5px solid var(--color-border-secondary, #f0f0f2);

            .date {
                color: var(--color-text-tertiary, #9398a3);
                font-family: SF Pro;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px; /* 138.462% */
            }

            .status {
                font-family: PingFang SC;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px; /* 138.462% */
            }
        }
    }
}
</style>

<template>
    <div>
        <div class="apply_list">
            <!-- 没有数据时 -->
            <van-empty
                v-if="applyList.length === 0"
                image-size="100"
                description="暂无申请"
            />
            <div
                class="apply_item"
                v-for="item in applyList"
                :key="item.id"
                @click="applyItemClick(item)"
            >
                <div class="red_tip" v-show="item.tip"></div>
                <div class="type_text">{{ item.type_text }}</div>
                <div class="text_box">
                    <div class="title">{{ item.title }}</div>
                    <div class="text" v-show="item.audit_content">
                        <span v-if="item.audit_content">
                            审核意见：{{ item.audit_content }}
                        </span>
                    </div>
                </div>
                <div class="info_box">
                    <div class="date">{{ item.date }}</div>
                    <div class="status">
                        <span
                            :style="{
                                color: applyStatusType.get(item.status)?.color,
                            }"
                        >
                            {{ applyStatusType.get(item.status)?.text }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// 申请状态 待审核 AUDITING 已通过 PASS 已驳回 REJECT 已撤回 CANCEL
const applyStatusType = new Map([
    [
        'AUDITING',
        {
            text: '待审核',
            value: 'AUDITING',
            color: '#ffaa04',
        },
    ],
    [
        'PASS',
        {
            text: '已通过',
            value: 'PASS',
            color: '#08c787',
        },
    ],
    [
        'REJECT',
        {
            text: '已驳回',
            value: 'REJECT',
            color: '#e53250',
        },
    ],
    [
        'CANCEL',
        {
            text: '已撤回',
            value: 'CANCEL',
            color: '#9398a3',
        },
    ],
])

// 申请列表
const applyList = ref([
    {
        id: 3,
        type: 'investor',
        type_text: '投资人申请',
        title: '贝米钱包非法吸收公众存款案',
        audit_content: '信息不符，不予通过',
        date: '2023-09-26 23:27',
        status: 'REJECT',
        tip: true,
    },
    {
        id: 4,
        type: 'inheritor',
        type_text: '继承人申请',
        title: '申彤大大宝集资诈骗案件',
        audit_content: null,
        date: '2023-09-26 23:27',
        status: 'CANCEL',
        tip: true,
    },
    {
        id: 5,
        type: 'attorney',
        type_text: '代理人申请',
        title: '申彤大大宝集资诈骗案件',
        audit_content: null,
        date: '2023-09-26 23:27',
        status: 'AUDITING',
        tip: false,
    },
    {
        id: 1,
        type: 'dissent',
        type_text: '异议申请',
        title: '盛通保理 (财富中心) 非法吸收公众存款案',
        audit_content: null,
        date: '2023-09-26 23:27',
        status: 'AUDITING',
        tip: false,
    },
    {
        id: 2,
        type: 'dissent',
        type_text: '异议申请',
        title: '闵界栋非法吸收公众存款案',
        audit_content:
            '支持真正的慈善和助农活动，参与公益活动可以为社会创造积极价值。如果消费者发现虚假宣传或其他不良行为，应积极举报给相关平台或监管机构，帮助打击不良行为。',
        date: '2023-08-28 13:50',
        status: 'PASS',
        tip: false,
    },
])

// 申请类型
const applyType = new Map([
    [
        'dissent',
        {
            text: '异议申请',
            routerName: 'DissentApply',
        },
    ],
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

// 点击申请item 跳转详情
const applyItemClick = (item: any) => {
    console.log(item.type)

    router.push({
        name: applyType.get(item.type)?.routerName,
        query: {
            id: item.id,
        },
    })
}
</script>
