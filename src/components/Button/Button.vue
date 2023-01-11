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

import { computed, useSlots } from 'vue'
import { ColorType } from '../../styles/colors.css'
import buttonCss, { buttonGradientBorder } from './Button.css'
import { Size } from '../../styles/size';

type ButtonColorType = 'primary' | 'secondary'
type ButtonWidthType = 'auto' | 'full'
type ButtonSizeType = Size | '2xsmall'

interface Props {
  variant?: ButtonColorType
  width?: ButtonWidthType
  size?: ButtonSizeType
  icon?: string
  iconColor?: ColorType
  text?: boolean
  border?: 'pill' | 'round'
  loading?: boolean
}

const {
  variant = 'primary',
  width = 'auto',
  size = 'medium',
  icon,
  iconColor,
  text = false,
  border = 'pill',
  loading
} = defineProps<Props>()

const slots = useSlots()

const styles = computed(() =>
  buttonCss({ variant, width, size, isIcon: !!icon && !slots.default, text, border })
)
</script>

<style>

</style>
