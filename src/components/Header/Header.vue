<template>
  <header :class="[header, containerCss]">
    <div></div>
    <div :class="flexSprinkles({ display: 'flex', alignItems: 'center' })">
      <div :class="spaceSprinkles({ marginRight: 'small' })">
        <Button size="small" text @click="copy" v-if="!!address">{{
          shortAddress(address)
        }}</Button>

        <Button size="small" @click="open" v-else>Load wallet</Button>
      </div>
      <Switch v-model="isDarkTheme">
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
import { useLoadWallet } from '../../composable/useLoadWallet'

const walletStore = useWalletStore()
const notification = useNotificationStore()
const mainStore = useMainStore()
const { open } = useLoadWallet()

const address = computed(() => walletStore.address)
const copy = async () => {
  await navigator.clipboard.writeText(address.value)
  notification.show({ content: 'Address copied', type: 'success' })
}

const isDarkTheme = computed({
  get() {
    return mainStore.isDarkTheme
  },
  set(val: boolean) {
    if (val) {
      mainStore.setTheme('dark')
    } else {
      mainStore.setTheme('light')
    }
  }
})


</script>
