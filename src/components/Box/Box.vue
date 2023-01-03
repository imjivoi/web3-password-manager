<template>
  <div :class="box">
    <div :class="spaceSprinkles({ marginBottom: 'medium' })">
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { spaceSprinkles } from '../../styles/space.css'
import box from './Box.css'
</script>
