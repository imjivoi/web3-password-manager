<template>
  <div :class="skeletonCss" :style="{ width, height, borderRadius }"></div>
</template>

<script lang="ts" setup>
import { skeletonCss } from './Skeleton.css'

interface Props {
  height?: string
  width?: string
  borderRadius?: string
}

const { height, width, borderRadius } = defineProps<Props>()
</script>
