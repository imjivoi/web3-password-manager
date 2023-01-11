<template>
  <p :class="textCss({ size, color, weight })"><slot /></p>
</template>

<script lang="ts" setup>
import { textCss } from './Text.css'

interface Props {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  color?: 'primary' | 'accent' | 'secondary'
  weight?: 'default' | 'accent'
}

const {
  size = 'medium',
  color = 'primary',
  weight = 'default',
} = defineProps<Props>()
</script>
