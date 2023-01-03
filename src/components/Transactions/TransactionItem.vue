<template>
  <div :class="transactionItem">
    <div>
      <div>time</div>
      <div>{{ time }}</div>
    </div>
    <div>
      <div>hash</div>
      <div>
        <a target="_blank" :href="txLink">{{
          hash
        }}</a>
      </div>
    </div>
    <div>
      <div>block</div>
      <div>{{ block }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { transactionItem } from './Transactions.css'

import { computed, PropType } from 'vue'

const props = defineProps({
  hash: {
    type: String,
    default: '',
  },
  time: {
    type: String,
    default: '',
  },
  block: {
    type: String,
    default: '',
  },
})

const txLink = computed(()=>'https://finder.terra.money/bombay-12/tx/' + props.hash)
</script>

<style></style>
