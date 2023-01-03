<template>
  <button :class="[styles]" :disabled="loading">
    <Loader v-if="loading" />
    <template v-else>
      <Icon :size="size" :color="type" :name="icon" v-if="!!icon" />
      <slot />

    </template>
  </button>
</template>

<script lang="ts" setup>
import { Icon, Loader } from '@/components'

import { computed } from 'vue'
import { ColorType } from '../../styles/colors'
import buttonCss, { buttonGradientBorder } from './Button.css'

type ButtonColorType = 'primary' | 'secondary' | ColorType
type ButtonWidthType = 'auto' | 'full'
type ButtonSizeType = 'small' | 'medium' | 'large'

interface Props {
  type?: ButtonColorType
  width?: ButtonWidthType
  size?: ButtonSizeType
  icon?: string
  text?: boolean
  border?: 'pill' | 'round'
  loading?: boolean
}

const {
  type = 'primary',
  width = 'auto',
  size = 'medium',
  icon,
  text = false,
  border = 'pill',
  loading
} = defineProps<Props>()

const styles = computed(() =>
  buttonCss({ color: type, width, size, hasIcon: !!icon, text, border })
)
</script>

<style>

</style>
