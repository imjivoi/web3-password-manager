<template>
  <teleport to="body">
    <transition name="fade-top">
      <div
        :class="modalOverflow"
        @click.self="$emit('update:modelValue', false)"
        v-if="modelValue"
      >
        <div :class="modalBox" :style="{ maxWidth: `${width}px` }">
          <div :class="modalContent">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { modalBox, modalOverflow, modalContent } from './Modal.css'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 600,
  },
})
</script>
