<template>
  <Modal>
    <Heading size="medium" position="center">Ethereum</Heading>
    <div
      :class="
        flexSprinkles({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })
      "
    >
      <div>Recieve</div>
      <div :class="modalBalanceCss">
        <span :class="modalBalanceValueCss">2</span>
        <span :class="modalBalanceSymbolCss">ETH</span>
      </div>
      <div>Send</div>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import Modal from './Modal.vue'
import Heading from '../Heading/Heading.vue'

import { flexSprinkles } from '../../styles/ts/flex.css'
import { modalBalanceCss,modalBalanceValueCss,modalBalanceSymbolCss } from './Modal.css'

</script>
