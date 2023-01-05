<template>
  <section :class="section">
    <div :class="centerCss">
      <div style="text-align: center">
        <div>
          <Heading size="large">Safety way to guard your data</Heading>
        </div>

        <div :class="spaceSprinkles({ marginTop: 'large' })">
          <Button :class="spaceSprinkles({ marginX: 'auto' })" @click="toApp" v-if="!!walletStore.account.address">Go to app</Button>

          <Button :class="spaceSprinkles({ marginX: 'auto' })" @click="connect" :loading="isWalletLoading" v-else>Connect wallet</Button>
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
import { useWalletStore } from '../store/wallet'
import { centerCss } from '../styles/common.css'
import { spaceSprinkles } from '../styles/space.css'

const walletStore = useWalletStore()
const router = useRouter()

const address = computed(() => walletStore.account.address)
const isWalletLoading = computed(() => walletStore.isLoading)
const connect = () => walletStore.connectWallet()
const toApp = () => router.push('/app')

</script>
