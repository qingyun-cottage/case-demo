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

    .notice_list {
        border-radius: 8px;
        overflow: hidden;
        .van-cell {
            padding: 16px;
            .icon{
                width: 20px;
                height: 20px;
            }
        }

        .notice_item {
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
                <div class="title">案件公告</div>
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
            <div class="notice_list">
                <van-cell
                    v-for="item in noticeListState.list"
                    :key="item.id"
                    :title="item.title"
                    center
                    @click="noticeItemClick(item)"
                >
                    <template #title>
                        <div class="notice_item">
                            <div class="icon_box">
                                <div class="red_tip" v-show="item.tip"></div>
                                <div class="icon icon_custom">
                                    <img
                                        src="@/assets/images/notice-item-fill.svg"
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

        <!-- 公告详情 -->
        <van-popup
            v-model:show="noticeListState.showDetail"
            teleport="#app"
            position="right"
            :style="{ width: '100vw', height: '100vh' }"
        >
            <Detail detailType="notice" :id="noticeListState.detailId" />
        </van-popup>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { onMounted } from 'vue'
import { reactive } from 'vue'
import Detail from './components/Detail.vue'

const noticeListState = reactive({
    // 显示详情
    showDetail: false,
    // 详情id
    detailId: '',
    // 公告列表
    list: [
        {
            id: 1,
            title: '善林案公告之十一',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: true,
        },
        {
            id: 2,
            title: '善林案公告之十',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: true,
        },
        {
            id: 3,
            title: '上海市第一中级人民法院“善林”案第一次退赃公告 (二)',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 4,
            title: '涉众案件投资人关心的问题解答',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 5,
            title: '善林案公告之九',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 6,
            title: '上海市第一中级人民法院“善林”案第一次退赃公告 (二)',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 7,
            title: '涉众案件投资人关心的问题解答',
            describe: '涉及老年被害人的常见问题',
            time: '2023-09-28 23:27',
            tip: false,
        },
        {
            id: 8,
            title: '善林案公告之九',
            describe: '涉及老年被害人的常见问题',
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

// 点击公告item
const noticeItemClick = (item: any) => {
    noticeListState.detailId = item.id
    noticeListState.showDetail = true
    window.history.pushState(null, '公告详情', '#openDetail')
}
// 关闭公告详情
const closeDetail = () => {
    noticeListState.showDetail = false
}
</script>
