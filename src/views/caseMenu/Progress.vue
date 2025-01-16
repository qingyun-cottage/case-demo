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

    #step_list {
        border-radius: 8px;

        padding-top: 16px;
        padding-bottom: -16px;
        padding-left: 34px;

        --van-step-finish-line-color: #f0f0f2;
        --van-step-line-color: #f0f0f2;
        --van-border-color: none;

        .van-step:last-child .step_item {
            margin-bottom: -10px;
            border-bottom: none;
        }

        .step_item {
            margin: -4px 6px 0 10px;
            padding-bottom: 14px;

            border-bottom: 0.5px solid var(--color-border-secondary, #f0f0f2);

            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 4px;
            flex: 1 0 0;

            .title {
                color: var(--color-text-primary, #292c33);
                font-family: PingFang SC;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 146.667% */
            }
            .time {
                color: var(--color-text-tertiary, #9398a3);
                font-family: SF Pro;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px; /* 138.462% */
            }
        }

        .icon_1 {
            margin-left: 1px;
            width: 32px;
            height: 32px;
        }

        .icon_2 {
            margin-left: 1px;
            width: 8px;
            height: 8px;
            padding: 6px;
            background-color: #fff;
        }
    }
}
</style>

<template>
    <div class="page">
        <van-nav-bar class="nav_bar" :border="false" @click-left="$returnBack">
            <template #title>
                <div class="title">执行进展</div>
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
            <van-steps id="step_list" direction="vertical" :active="2">
                <van-step v-for="item in progressListState.progressList">
                    <template #active-icon>
                        <div class="icon_1 icon_custom">
                            <img src="@/assets/images/ellipse-1.svg" alt="" />
                        </div>
                    </template>
                    <template #finish-icon>
                        <div class="icon_2 icon_custom">
                            <img src="@/assets/images/ellipse-2.svg" alt="" />
                        </div>
                    </template>
                    <template #inactive-icon>
                        <div class="icon_2 icon_custom">
                            <img src="@/assets/images/ellipse-2.svg" alt="" />
                        </div>
                    </template>
                    <!-- <template #activeIcon>1</template> -->
                    <div class="step_item">
                        <div class="title">
                            <span>{{ item.title }}</span>
                        </div>
                        <div class="time">{{ item.time }}</div>
                    </div>
                </van-step>
            </van-steps>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const progressListState = reactive({
    progressList: [
        {
            title: '上海市最高人民法院 一审判决',
            time: '2023-09-28 23:27',
        },
        {
            title: '上海市最高人民法院 二审判决',
            time: '2023-09-28 23:27',
        },
        {
            title: '上海市最高人民法院 三审判决',
            time: '2023-09-28 23:27',
        },
        {
            title: '上海市第一中级人民法院 执行统筹',
            time: '2023-09-28 23:27',
        },
        {
            title: '上海市第一中级人民法院 发款阶段',
            time: '2023-09-28 23:27',
        },
    ],
})
</script>
