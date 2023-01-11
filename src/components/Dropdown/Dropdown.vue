<template>
  <div :class="dropdown" v-click-outside="close">
    <button :class="dropdownSelected" @click="toggleOpen">
      <slot /> <Icon name="arrow-downward-outline" size="xsmall" />
    </button>
    <transition name="fade-top">
      <div :class="dropdownList" v-if="isOpen">
        <ul @click="close">
          <slot name="list" />
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@/components'
import { ref } from 'vue'

import { dropdown, dropdownSelected, dropdownList } from './Dropdown.css'

const isOpen = ref(false)

const toggleOpen = () => (isOpen.value = !isOpen.value)

const close = () => (isOpen.value = false)
</script>
