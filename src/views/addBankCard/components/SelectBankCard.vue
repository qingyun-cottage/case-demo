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

        .icon {
            width: 16px;
            height: 16px;
        }
    }
}

.content {
    flex: 1;
    overflow: auto;
    padding: 10px 0 53px;

    .bank_list {
        display: flex;
        padding: 0px 16px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        background: var(--color-white-100, #fff);

        .item {
            display: flex;
            padding: 16px 0px;
            align-items: center;
            gap: 16px;
            align-self: stretch;
            border-bottom: 0.5px solid var(--color-border-secondary, #f0f0f2);
            .icon {
                width: 24px;
                height: 24px;
            }
            .bank_name {
                color: var(--color-text-primary, #292c33);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */
            }
        }

        .item:last-child {
            border-bottom: none;
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
                    <div class="title">选择银行</div>
                </template>
                <template #left>
                    <div class="left">
                        <div class="icon icon_custom">
                            <img src="@/assets/images/close-line.svg" alt="" />
                        </div>
                    </div>
                </template>
            </van-nav-bar>
            <div class="search_box">
                <van-field
                    v-model="state.searchText"
                    placeholder="搜索银行"
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
                <div class="bank_list">
                    <div
                        class="item"
                        v-for="item in state.bankList"
                        :key="item.id"
                    >
                        <BankIcon class="icon" :bank="item.shortName" />
                        <div class="bank_name">
                            <span>{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BankIcon from '@/components/bankIcon.vue'
import { onMounted } from 'vue'
import { reactive } from 'vue'

type StateType = {
    // 搜索框内容
    searchText: string
    // 银行列表
    bankList: {
        id: number
        name: string
        shortName?: string
        icon: string
    }[]
}

const state: StateType = reactive({
    // 搜索框内容
    searchText: '',
    // 银行列表
    bankList: [],
})

onMounted(() => {
    // 获取银行列表
    getBankList()
})

// 搜索框内容改变
const handleSearchExchange = () => {
    getBankList()
}

// 获取银行列表
const getBankList = () => {
    // 假数据
    state.bankList = [
        {
            id: 1,
            name: '工商银行',
            shortName: 'ICBC',
            icon: '@/assets/images/icbc.svg',
        },
        {
            id: 2,
            name: '招商银行',
            shortName: 'CMB',
            icon: 'cmb.svg',
        },
        {
            id: 3,
            name: '建设银行',
            shortName: 'CCB',
            icon: 'ccb.svg',
        },
        {
            id: 4,
            name: '农业银行',
            shortName: 'ABC',
            icon: 'abc.svg',
        },
        {
            id: 5,
            name: '中国银行',
            shortName: 'BOC',
            icon: 'boc.svg',
        },
        {
            id: 6,
            name: '华夏银行',
            shortName: 'HXB',
            icon: 'hxb.svg',
        },
        {
            id: 7,
            name: '邮储银行',
            shortName: 'PSBC',
            icon: 'psbc.svg',
        },
    ]
}
</script>
