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

    .question_list {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .van-cell {
            padding: 16px;
            border-radius: 8px;
            .icon {
                width: 20px;
                height: 20px;
            }
        }

        .question_item {
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

                .describe {
                    color: var(--color-text-tertiary, #9398a3);
                    font-family: PingFang SC;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 18px; /* 138.462% */
                }

                .time {
                    color: var(--color-text-tertiary, #9398a3);
                    font-family: SF Pro;
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
                <div class="title">常见问题</div>
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
            <div class="question_list">
                <!-- <div class="question_item_box"></div> -->
                <van-cell
                    v-for="item in questionListState.list"
                    :key="item.id"
                    :title="item.title"
                    center
                    :border="false"
                    @click="questionItemClick(item)"
                >
                    <template #title>
                        <div class="question_item">
                            <div class="icon_box">
                                <div class="red_tip" v-show="item.tip"></div>
                                <div class="icon icon_custom">
                                    <img
                                        src="@/assets/images/question-item-fill.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="content_box">
                                <div class="title">
                                    <span>{{ item.title }}</span>
                                </div>
                                <div class="describe">
                                    <span>{{ item.describe }}</span>
                                </div>
                                <div class="time">
                                    <span>{{ item.time }}</span>
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
            </div>
        </div>

        <!-- 问题详情 -->
        <van-popup
            v-model:show="questionListState.showDetail"
            teleport="#app"
            position="right"
            :style="{ width: '100vw', height: '100vh' }"
        >
            <Detail detailType="question" :id="questionListState.detailId" />
        </van-popup>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { onMounted, reactive } from 'vue'
import Detail from './components/Detail.vue'

// 常见问题列表
const questionListState = reactive({
    // 显示详情
    showDetail: false,
    // 详情id
    detailId: '',
    // 常见问题列表
    list: [
        {
            id: 1,
            title: '善林案常见留言问题的答复之二',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: true,
        },
        {
            id: 2,
            title: '关于本次善林投资人受损金额认定的说明',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: true,
        },
        {
            id: 3,
            title: '核对显示出入金额为“0”，为何为“0”?',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 4,
            title: '平台要求上传材料，上传材料采用什么方式，如何上传?',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 5,
            title: '进入平台以后，老人委托直系亲属是否需要上传相关证明?',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 6,
            title: '速度记号',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 7,
            title: '平台要求上传材料，上传材料采用什么方式，如何上传?',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 8,
            title: '善林案公告之九',
            describe: '进入平台以后，老人委托直系亲属是否需要上传相关证明?',
            time: '2023-09-28 23:27',
            tip: false,
        },
    ],
})

// 返回关闭弹窗不返回上一页
onMounted(() => {
    window.addEventListener('popstate', closeDetail, false)
})
onBeforeUnmount(() => {
    window.removeEventListener('popstate', closeDetail, false)
})

// 点击问题item
const questionItemClick = (item: any) => {
    questionListState.detailId = item.id
    questionListState.showDetail = true
    window.history.pushState(null, '问题详情', '#openDetail')
}
// 关闭问题详情
const closeDetail = () => {
    questionListState.showDetail = false
}
</script>
