<template>
  <textarea
    :class="styles"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>

<script lang="ts" setup>
import styles from './Textarea.css'
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>
