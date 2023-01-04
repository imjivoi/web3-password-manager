<template>
  <button :class="[styles]" :disabled="loading">
    <Loader v-if="loading" />
    <template v-else>
      <Icon :size="size" :color="iconColor" :name="icon" v-if="!!icon" />
      <slot />

    </template>
  </button>
</template>

<script lang="ts" setup>
import { Icon, Loader } from '@/components'

import { computed } from 'vue'
import { ColorType } from '../../styles/colors'
import buttonCss, { buttonGradientBorder } from './Button.css'
import { Size } from '../../styles/size';

type ButtonColorType = 'primary' | 'secondary'
type ButtonWidthType = 'auto' | 'full'
type ButtonSizeType = Size | '2xsmall'

interface Props {
  type?: ButtonColorType
  width?: ButtonWidthType
  size?: ButtonSizeType
  icon?: string
  iconColor?: ColorType
  text?: boolean
  border?: 'pill' | 'round'
  loading?: boolean
}

const {
  type = 'primary',
  width = 'auto',
  size = 'medium',
  icon,
  iconColor,
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
