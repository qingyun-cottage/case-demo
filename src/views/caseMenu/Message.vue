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
    overflow: auto;

    padding: 10px 12px 20px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 12px;

    .chat_box {
        flex-shrink: 1;
        overflow: auto;

        display: flex;

        padding: 0px 16px 14px;

        flex-direction: column;
        border-radius: 8px;
        background: var(--color-white-100, #fff);

        .title {
            display: flex;
            padding: 16px 0px;
            align-items: center;

            border-bottom: 0.5px solid var(--color-border-secondary, #f0f0f2);

            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
        }

        .chat_list {
            overflow: auto;
            padding: 0 16px;
            margin: 0 -16px;

            .chat_item.send {
                .info_box {
                    flex-direction: row-reverse;
                    .info_title {
                        text-align: right;
                    }
                }
            }
            .chat_item.receive {
                .info_box {
                    .head {
                        box-sizing: border-box;
                        background: #fff;
                        border: 1px solid #ededed;
                    }
                }
            }
            .chat_item:last-child {
                border-bottom: none;
            }

            .chat_item {
                display: flex;
                padding: 3px 0px 16px;
                flex-direction: column;
                gap: 12px;

                border-bottom: 0.5px solid
                    var(--color-border-secondary, #f0f0f2);

                .info_box {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    box-sizing: border-box;
                    padding: 7px 0;

                    .head {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background: #cac5ed;
                        overflow: hidden;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .info_title {
                        display: flex;
                        flex-direction: column;

                        .name {
                            color: var(--color-text-primary, #292c33);
                            font-family: PingFang SC;
                            font-size: 13px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 18px; /* 138.462% */
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
                }

                .msg_text {
                    display: flex;
                    padding: 10px 8px;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    align-self: stretch;

                    border-radius: 4px;
                    background: #f1f6ff;

                    color: var(--color-text-primary, #292c33);
                    font-family: PingFang SC;
                    font-size: 15px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 22px; /* 146.667% */
                }
            }
        }
    }
    .input_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 16px 8px;

        border-radius: 8px;
        background: var(--color-white-100, #fff);

        .title {
            padding: 8px 0;

            color: var(--color-text-primary, #292c33);
            font-family: PingFang SC;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
        }
        .input_area {
            padding: 12px 12px 6px;
            border-radius: 4px;
            border-bottom: 0.5px solid var(--color-border-secondary, #f0f0f2);
            background: #f0f0f2;

            .van-field {
                padding: 0;
                background: none;
                // 隐藏滚动条
                ::-webkit-scrollbar {
                    display: none;
                }
            }
        }
        .tip_text {
            margin: 13px 0;
            color: var(--color-text-tertiary, #9398a3);
            font-family: PingFang SC;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
        }
        .btn_box {
            display: flex;
            justify-content: center;

            .submit_btn {
                padding: 10px 32px;
                border-radius: 8px;
                background: var(--color-primary-default, #007aff);
                border: none;

                .btn_text {
                    color: var(--color-white-100, #fff);
                    font-family: PingFang SC;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px; /* 150% */
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
                <div class="title">留言回复</div>
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
            <div class="chat_box">
                <div class="title">留言记录</div>
                <div class="chat_list">
                    <div
                        class="chat_item"
                        v-for="item in messageState.msgList"
                        :key="item.id"
                        :class="item.type"
                    >
                        <div class="info_box">
                            <div class="head">
                                <div
                                    class="icon icon_custom"
                                    v-show="item.type === 'send'"
                                >
                                    <img
                                        src="@/assets/images/message-user.png"
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="icon icon_custom"
                                    v-show="item.type === 'receive'"
                                >
                                    <img
                                        src="@/assets/images/message-team.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="info_title">
                                <span class="name">{{ item.name }}</span>
                                <span class="time">{{ item.time }}</span>
                            </div>
                        </div>
                        <div class="msg_text">
                            <span>{{ item.msg }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="input_box">
                <div class="title">输入留言</div>
                <div class="input_area">
                    <van-field
                        v-model="messageState.msgInput"
                        placeholder="请输入留言信息"
                        rows="3"
                        type="textarea"
                        maxlength="500"
                        show-word-limit
                    ></van-field>
                </div>
                <div class="tip_text">
                    <span
                        >针对共性问题会在常见问题模块进行统一回复，谢谢。</span
                    >
                </div>
                <div class="btn_box">
                    <van-button class="submit_btn">
                        <span class="btn_text">提交留言</span>
                    </van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const messageState = reactive({
    msgList: [
        {
            id: 1,
            type: 'send',
            name: '张三',
            time: '2023-09-28 23:27',
            msg: '在我的后园，可以看见墙外有两株树，一株是枣树，还有一株也是枣树。',
        },
        {
            id: 2,
            type: 'receive',
            name: '第一中级人民法院财产处置团队',
            time: '2023-09-28 23:27',
            msg: '这上面的夜的天空，奇怪而高，我生平没有见过这样的奇怪而高的天空。',
        },
        {
            id: 3,
            type: 'send',
            name: '张三',
            time: '2023-09-29 23:27',
            msg: '请问这个案件的具体情况如何？',
        },
        {
            id: 2,
            type: 'receive',
            name: '第一中级人民法院财产处置团队',
            time: '2023-10-03 13:27',
            msg: '善林系”企业与各地门店的出租人之间是合法的房屋租赁关系，根据租赁合同收取租金是出租人正当合法的权利，受到法律的保护。2.关于各地门店剩余租金及押金押金押金押金。“善林系”企业涉及的门店数量达上千家，分布在全国各地，租赁合同等资料缺失，且存在不同情况，希望广大被害人协助提供相应资料。',
        },
    ],
    msgInput: '',
})
</script>
