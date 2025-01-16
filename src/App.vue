<style lang="less" scoped></style>

<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component
                v-if="$route.meta.keepAlive"
                :is="Component"
                :key="$route.name"
            />
        </keep-alive>
        <component v-if="!$route.meta.keepAlive" :is="Component" />
    </router-view>

    <!-- 解决弹窗样式混乱的问题 -->
    <van-dialog></van-dialog>
</template>

<script setup lang="ts"></script>
