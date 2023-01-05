<template>
    <div :class="[loader]" :style="assignInlineVars({ [loaderColor]: colors[color] })">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue-demi";
import { ColorType, colors } from "../../styles/colors.css";
import { loader, loaderColor } from "./Loader.css";
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { style } from "@vanilla-extract/css";

const props = defineProps({
    color: String as PropType<ColorType>,
})

</script>

<style>

</style>