<template>
  <header :class="[header, containerCss]">
    <div></div>
    <div :class="flexSprinkles({ display: 'flex', alignItems: 'center' })">
      <div :class="spaceSprinkles({ marginRight: 'small' })">
        <Button size="small" text @click="copy" v-if="!!address">{{
          shortAddress(address)
        }}</Button>

        <Button size="small" @click="openModalConnect" v-else>Connect wallet</Button>
      </div>
      <Switch v-model="mainStore.isDark">
        <Icon name="moon" color="yellow" />
        <Icon name="sun-outline" color="yellow" />
      </Switch>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Switch, Icon, Button, Skeleton } from '@/components'

import { header } from './Header.css'
import containerCss from '../../styles/container.css'
import { spaceSprinkles } from '../../styles/space.css'
import { flexSprinkles } from '../../styles/flex.css'

import { computed, onMounted, ref, watch } from 'vue'
import { useWalletStore } from '../../store/wallet'
import shortAddress from '@/utils/short-address'
import { useNotificationStore } from '../../store/notification'
import { useMainStore } from '../../store/main'
import { useModal } from '../../store/modal'
import ModalConnect from '../Modal/ModalConnect.vue'

const walletStore = useWalletStore()
const notification = useNotificationStore()
const mainStore = useMainStore()
const modal = useModal()

const address = computed(() => walletStore.address)
const copy = async () => {
  await navigator.clipboard.writeText(address.value)
  notification.show({ content: 'Address copied', type: 'success' })
}

const openModalConnect = () => {
  modal.open(ModalConnect)
}
</script>
