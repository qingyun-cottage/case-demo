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

.card_list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-self: stretch;

    .card_item {
        display: flex;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        border-radius: 8px;
        background: var(--color-fill-quaternary, #fafafa);

        .icon{
            width: 24px;
            height: 24px;
        }

        .card_info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex: 1 0 0;
            .title {
                color: var(--color-text-primary, #292c33);
                font-family: PingFang SC;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px; /* 150% */
            }
            .value {
                color: var(--color-text-tertiary, #9398a3);
                font-family: SF Pro;
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
        <div class="page">
            <van-nav-bar
                class="nav_bar"
                :border="false"
                @click-left="$returnBack"
            >
                <template #title>
                    <div class="title">我的银行卡</div>
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
                <div class="card_list">
                    <div
                        v-for="item in props.cardsList"
                        :key="item.id"
                        :name="item.id"
                        class="card_item"
                        label-position="left"
                    >
                        <bank-icon class="icon" :bank="item.shortName" />
                        <div class="card_info">
                            <div class="title">
                                <span>{{ item.bankName }}</span>
                            </div>
                            <div class="value">
                                <span>{{ item.bankCardNo }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import bankIcon from '@/components/bankIcon.vue'

type cardItem = {
    id: string
    bankName: string
    shortName: string
    bankCardNo: string
}

const props = defineProps({
    // 传入的银行卡列表
    cardsList: {
        type: Array as () => cardItem[],
        default: () => [
            {
                id: '1',
                bankName: '工商银行储蓄卡',
                shortName: 'ICBC',
                bankCardNo: '9558 8019 0240 16485',
            },
            {
                id: '2',
                bankName: '招商银行储蓄卡',
                shortName: 'CMB',
                bankCardNo: '9558 8019 0240 16485',
            },
            {
                id: '3',
                bankName: '建设银行储蓄卡',
                shortName: 'CCB',
                bankCardNo: '9558 8019 0240 16485',
            },
            {
                id: '4',
                bankName: '农业银行储蓄卡',
                shortName: 'ABC',
                bankCardNo: '9558 8019 0240 16485',
            },
        ],
    },
})
</script>
