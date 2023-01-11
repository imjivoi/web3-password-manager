<template>
  <component :is="tag" :class="headingCss({ size, position})"
    ><slot
  /></component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { headingCss } from './Heading.css'

interface Props {
  size?: 'small' | 'medium' | 'large'
  position?:'left'|'center'|'right'
}

const { size = 'large', position = 'left' } = defineProps<Props>()

const tag = computed(() => {
  switch (size) {
    case 'large':
      return 'h1'
    case 'medium':
      return 'h2'
    case 'small':
      return 'h3'
    default:
      return 'h1'
  }
})
</script>

<style></style>
