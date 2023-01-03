<template>
  <div>
    <form @submit.prevent :class="styles">
      <slot name="inputs" />
      <div :class="spaceSprinkles({ marginTop: 'medium' })" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import styles from './Form.css'
import { spaceSprinkles } from '../../styles/space.css'
</script>
