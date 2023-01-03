<template>
  <header :class="[header, containerCss]">
    <div></div>
    <div :class="flexSprinkles({ display: 'flex', alignItems: 'center' })">
      <div :class="spaceSprinkles({ marginRight: 'small' })">
        <Button size="small" text @click="copy" v-if="!!address">{{
          shortAddress(address)
        }}</Button>

        <Button :loading="isWalletLoading" size="small" @click="connect" v-else>Connect wallet</Button>
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
import { darkTheme, lightTheme } from '../../styles/root.css'
import { spaceSprinkles } from '../../styles/space.css'
import { flexSprinkles } from '../../styles/flex.css'

import { computed, onMounted, ref, watch } from 'vue'
import { useWalletStore } from '../../store/wallet'
import shortAddress from '@/utils/short-address'
import { useNotificationStore } from '../../store/notification'
import { useMainStore } from '../../store/main'

const walletStore = useWalletStore()
const notification = useNotificationStore()
const mainStore = useMainStore()

const address = computed(() => walletStore.account?.address)
const isWalletLoading = computed(() => walletStore.isLoading)
const connect = () => walletStore.connectWallet()
const copy = async () => {
  await navigator.clipboard.writeText(address.value)
  notification.show({ content: 'Address copied', type: 'success' })
}
</script>
