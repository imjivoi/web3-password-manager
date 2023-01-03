<template>
  <div :class="switchContainer">
    <input
      type="checkbox"
      id="switch"
      :class="switchInput"
      :checked="modelValue"
      @change="change"
    />
    <label for="switch" :class="switchLabel"></label>
    <span :class="switchBackground"></span>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  switchInput,
  switchLabel,
  switchContainer,
  switchBackground,
} from './Switch.css'

const props = defineProps({
  modelValue: {
    type: [Boolean, String],
    required: true,
  },
})

const emits = defineEmits(['update:modelValue'])

const change = (event: any) => {
  emits('update:modelValue', event.target.checked)
}
</script>
