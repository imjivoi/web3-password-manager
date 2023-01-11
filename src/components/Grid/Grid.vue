<template>
  <div :class="[grid, gridSprinkles({
  gridTemplateColumns: { desktop: `repeat(${columns}, 1fr)`, mobile: `repeat(1, 1fr)` }, gap: {
    desktop: spaces[gap], mobile: spaces.xsmall
    }, placeItems
  })]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
import { spaces, spacesKeys } from '../../styles/space.css'
import { gridSprinkles, grid } from './Grid.css'

const props = defineProps({
  columns: {
    type: Number,
    default: 4,
  },
  gap: {
    type: String as unknown as PropType<typeof spacesKeys[number]>,
    default: 'small'
  },
  placeItems: {
    type: String as PropType<'baseline' | 'center' | 'end'>,
    default: 'baseline'
  }
})

</script>
