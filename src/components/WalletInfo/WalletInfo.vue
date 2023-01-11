<template>
  <div :class="box">
    <div>
      <h1 :class="sum">{{ balances.usd }} USD</h1>
      <div>
        <Button text :class="addressCss" @click="copy"
          >{{ shortAddress(address) }}
          <Icon name="copy-outline" color="purple" size="small" />
        </Button>
      </div>
      <div :class="flexSprinkles({ display: 'flex', alignItems: 'center' })">
        <div :class="spaceSprinkles({ marginRight: 'small' })">
          <Button border="pill" size="small" @click="modalSend = true"
            >Send</Button
          >
        </div>
        <div>
          <Button border="pill" type="secondary" size="small">Receive</Button>
        </div>
      </div>
    </div>
    <div>
      <div :class="boxBalances">
        <Heading size="medium" :class="balanceTitle">All balances</Heading>

        <div>
          <div :class="balanceItem">
            <span>Luna</span>
            <span>{{ balances.luna }}</span>
          </div>
          <div :class="balanceItem">
            <span>UST</span>
            <span>{{ balances.ust }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalSend v-model="modalSend" />
</template>

<script lang="ts" setup>
import Button from '../Button/Button.vue'
import Heading from '../Heading/Heading.vue'
import ModalSend from '../Modal/ModalSend.vue'
import Icon from '../Icon/Icon.vue'

import {
  boxBalances,
  box,
  sum,
  address as addressCss,
  balanceItem,
  balanceTitle,
} from './WalletInfo.css'
import { flexSprinkles } from '../../styles/flex.css'
import { spaceSprinkles } from '../../styles/space.css'

import { ref } from 'vue'
import shortAddress from '../../utils/short-address'
import { useNotificationStore } from '../../store/notification'

const props = defineProps({
  address: {
    type: String,
    default: '',
  },
  balances: {
    type: Object,
    required: true,
  },
})

const modalSend = ref(false)

const notification = useNotificationStore()

const copy = async () => {
  await navigator.clipboard.writeText(props.address)
  notification.show({ type: 'neutral', content: 'Address was copied' })
}
</script>

<style></style>
