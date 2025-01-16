<style lang="less" scoped></style>

<template>
    <div class="icon_custom" :class="bank">
        <img :src="bankIconMap.get(props.bank.toUpperCase())" alt="" />
    </div>
</template>

<script setup lang="ts">
import icbcIcon from '@/assets/bankLogo/icbc.svg'
import cmbIcon from '@/assets/bankLogo/cmb.svg'
import ccbIcon from '@/assets/bankLogo/ccb.svg'
import abcIcon from '@/assets/bankLogo/abc.svg'
import bocIcon from '@/assets/bankLogo/boc.svg'
import hxbIcon from '@/assets/bankLogo/hxb.svg'
import psbcIcon from '@/assets/bankLogo/psbc.svg'

const props = defineProps({
    // 银行简称
    bank: {
        type: String,
        default: '',
    },
})

// 银行图标列表
const bankIconMap = new Map([
    // 工商银行
    ['ICBC', icbcIcon],
    // 招商银行
    ['CMB', cmbIcon],
    // 建设银行
    ['CCB', ccbIcon],
    // 农业银行
    ['ABC', abcIcon],
    // 中国银行
    ['BOC', bocIcon],
    // 华夏银行
    ['HXB', hxbIcon],
    // 邮储银行
    ['PSBC', psbcIcon],
])
</script>
