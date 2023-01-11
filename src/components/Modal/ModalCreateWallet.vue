<template>
  <Modal>
    <template v-if="step === 1">
        <Heading size="medium" position="center"
          >Save your mnemonic phrase</Heading
        >
      <!-- <p v-if="loading">Loading...</p>
    <p v-else-if="!!mnemonic">{{mnemonic}}</p> -->
      <MnemonicList :list="mnemonic" />
      <div
        :class="[
          spaceSprinkles({ marginY: 'medium' }),
          flexSprinkles({
            display: 'flex',
            justifyContent: { tablet: 'flex-end' },
          }),
        ]"
      >
        <Button size="small" @click="step = 2">Next</Button>
      </div>
    </template>
    <template v-if="step === 2">
      <div :class="spaceSprinkles({ marginBottom: 'small' })">
        <Heading size="medium" position="center"
          >Put your mnemonic phrase</Heading
        >
      </div>
      <!-- <p v-if="loading">Loading...</p>
    <p v-else-if="!!mnemonic">{{mnemonic}}</p> -->
      <MnemonicList can-edit @edit-item="editItem" />
      <p v-if="isValidRepeatMnemonic">Valid</p>
      <div
        :class="[
          spaceSprinkles({ marginY: 'medium' }),
          flexSprinkles({
            display: 'flex',
            justifyContent: { tablet: 'flex-end' },
          }),
        ]"
      >
        <Button
          color="secondary"
          :class="spaceSprinkles({ marginRight: 'small' })"
          size="small"
          @click="step = 2"
          >Back</Button
        >
        <Button size="small" @click="step = 3">Next</Button>
      </div>
    </template>
    <template v-if="step === 3">
      <div :class="spaceSprinkles({ marginBottom: 'small' })">
        <Heading size="medium" position="center"
          >Create password for fast login</Heading
        >
      </div>
      <Input
        autocomplete="true"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <div
        :class="[
          spaceSprinkles({ marginY: 'medium' }),
          flexSprinkles({
            display: 'flex',
            justifyContent: { tablet: 'flex-end' },
          }),
        ]"
      >
        <Button size="small" @click="generateJson">Ready!</Button>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import MnemonicList from '../MnemonicList/MnemonicList.vue'
import Button from '../Ui/Button/Button.vue'
import Input from '../Ui/Input/Input.vue'
import Modal from './Modal.vue'

import { computed, onMounted, reactive, Ref, ref, watch } from 'vue'

import { textCss } from '../../styles/ts/common.css'
import { spaceSprinkles } from '../../styles/ts/spaces.css'
import { flexSprinkles } from '../../styles/ts/flex.css'

import { useWeb3 } from '../../composable/useWeb3'
import { Wallet } from '@ethersproject/wallet'
import Heading from '../Heading/Heading.vue'

const loading = ref(false)
const step = ref(1)
const wallet = ref<Wallet>()
const password = ref('')
const { encrypt, createWallet, fromMnemonic } = useWeb3()

const repeatMnemonic = ref<string[]>([])
const isValidRepeatMnemonic = ref(false)

// const isFilledRepeatMnemonic = computed(() =>
//   repeatMnemonic.value.
// )

const mnemonic = computed(() =>
  !!wallet.value ? wallet.value.mnemonic.phrase.split(' ') : []
)
const create = async () => {
  wallet.value = await createWallet()
}

const editItem = ({ idx, content }) => {
  repeatMnemonic.value[idx] = content
}

const checkMnemonic = () => {
  const mnemonicString = repeatMnemonic.value.join(' ')
  console.log(mnemonicString)
  return fromMnemonic(mnemonicString)
}

const generateJson = async () => {
  const json = await encrypt(password.value, wallet.value!)
  localStorage.setItem('cipher', JSON.stringify(json))
}

watch(
  repeatMnemonic,
  (val) => {
    if (
      repeatMnemonic.value.length === 12 &&
      repeatMnemonic.value.every(String)
    ) {
      const checkWallet = checkMnemonic()
      console.log(checkWallet)
      if (checkWallet?.address === wallet.value?.address) {
        isValidRepeatMnemonic.value = true
      }
    }
  },
  { deep: true }
)

onMounted(async () => {
  loading.value = true
  await create()
  loading.value = false
})
</script>
