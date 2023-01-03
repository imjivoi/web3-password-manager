<template>
  <div :class="select" @blur="open = false" tabindex="1">
    <button :class="selected" @click="open = !open">
      <span><slot name="selected" /></span>
    </button>
    <div>
      <ul :class="list" v-if="open" @click="open = false">
        <slot name="list" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { select, selected, list } from './Select.css'

import { ref } from 'vue'

const open = ref(false)
</script>

<style></style>
