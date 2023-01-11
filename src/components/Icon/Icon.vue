<template>
  <i
    v-html="iconComponent"
    :class="icon({ size })"
    :style="{ color: colors[color] }"
  >
  </i>
</template>

<script lang="ts" setup>
import { icon } from './Icon.css'

import { computed, onMounted, PropType, ref } from 'vue'
import { ColorType, colors } from '../../styles/colors.css'
import { Size } from '../../styles/size'

const props = defineProps({
  name: {
    type: String,
    deafult: '',
  },
  color: {
    type: String as PropType<ColorType>,
    default: '',
  },
  size: {
    type: String as PropType<Size>,
    default: 'medium',
  },
})

const iconComponent = ref<any>('')

onMounted(async () => {
  try {
    const icon = await import(`../../assets/icons/${props.name}.svg?raw`)
    iconComponent.value = icon.default
  } catch (error) {}
})
</script>

<style></style>
