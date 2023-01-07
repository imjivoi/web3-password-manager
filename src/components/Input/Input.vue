<template>
  <div>
    <div :class="inputContainer({ status })">
      <input v-bind="$attrs" :type="type" :class="input({ size })" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
      <div v-if="$slots.after">
        <slot name="after" />
      </div>
    </div>

    <div :class="spaceSprinkles({ marginTop: '2xsmall' })" v-if="$slots.message">
      <span :class="message({ status })">
        <slot name="message" />
      </span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<script lang="ts" setup>
import { Size } from '../../styles/size';
import { spaceSprinkles } from '../../styles/space.css'
import { input, message, inputContainer } from './Input.css'

type InputType = Exclude<Size, '2xsmall' | 'xsmall' | 'large'>

interface Props {
  placeholder?: string
  type?: 'text' | 'password'
  modelValue: string
  status?: 'neutral' | 'success' | 'error'
  size?: InputType
}

const {
  placeholder,
  type = 'text',
  modelValue,
  status = 'neutral',
  size = 'medium'
} = defineProps<Props>()
</script>

<style>

</style>
