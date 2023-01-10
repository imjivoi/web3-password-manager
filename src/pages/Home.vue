<template>
  <section :class="section">
    <div :class="centerCss">
      <div style="text-align: center">
        <div>
          <Heading size="large">Safety way to guard your data</Heading>
        </div>

        <div :class="spaceSprinkles({ marginTop: 'large' })">
          <Button :class="spaceSprinkles({ marginX: 'auto' })" @click="toApp" v-if="!!walletStore.address">Go to app</Button>

          <Button :class="spaceSprinkles({ marginX: 'auto' })" @click="open" :loading="isWalletLoading" v-else>Load wallet</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Heading, Button } from '@/components'

import section from '@/styles/section.css'
import { computed } from 'vue-demi'
import { useRouter } from 'vue-router'
import { useModal } from '../store/modal'
import { useWalletStore } from '../store/wallet'
import { centerCss } from '../styles/common.css'
import { spaceSprinkles } from '../styles/space.css'
import { useLoadWallet } from '../composable/useLoadWallet'

const walletStore = useWalletStore()
const router = useRouter()
const { open } = useLoadWallet()

const isWalletLoading = computed(() => walletStore.isLoading)
const connect = () => walletStore.connectWallet()
const toApp = () => router.push('/app')


</script>
