<template>
  <div>
    <Heading size="medium" position="left">Transactions</Heading>
    <div v-if="transactions.length">
      <TransactionItem
        v-for="(transaction, idx) in transactions"
        :key="idx"
        :block="transaction.height"
        :hash="transaction.txhash"
        :time="transaction.timestamp"
      />
    </div>
    <div v-else>You haven't done any transaction yet</div>
  </div>
</template>

<script lang="ts" setup>
import Heading from '../Heading/Heading.vue'
import TransactionItem from './TransactionItem.vue'

import { PropType, ref } from 'vue'

interface Transaction {
  height: string
  txhash: string
  timestamp: string
}

const props = defineProps({
  transactions: {
    type: Array as PropType<Transaction[]>,
    default: () => [],
  },
})
</script>

<style></style>
