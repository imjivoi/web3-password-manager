<template>
  <Heading size="medium" position="center">Enter your password</Heading>

  <div :class="spaceSprinkles({ marginTop: 'medium' })">
    <Form>
      <template #inputs>
        <Input :status="errorMessage ? 'error' : 'neutral'" placeholder="Password" type="password" v-model="password">
        <template #message v-if="errorMessage">
          {{ errorMessage }}
        </template>
        </Input>
      </template>
      <template #footer>
        <div :class="
          flexSprinkles({
            display: {
              tablet: 'flex',
              mobile: 'block',
            },
            justifyContent: 'center'
          })
        ">
          <div>
            <Button size="small" @click="enter">Enter</Button>
          </div>
        </div>
      </template>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import Text from '../Text/Text.vue'
import Heading from '../Heading/Heading.vue'
import Modal from './Modal.vue'
import Input from '../Input/Input.vue'
import Form from '../Form/Form.vue'
import Button from '../Button/Button.vue'

import { spaceSprinkles } from '../../styles/space.css'
import { flexSprinkles } from '../../styles/flex.css'

import { computed, onMounted, ref, watch } from 'vue'
import { useWalletStore } from '../../store/wallet'
import { useRouter } from 'vue-router'
import Wallet from '../../services/wallet'
import Storage from '../../services/storage'
import { useMainStore } from '../../store/main'

const props = defineProps({
    successCallback: {
        type: Function,
        default: () => { }
    }
})

const walletStore = useWalletStore()
const mainStore = useMainStore()
const router = useRouter()

const password = ref('')
const errorMessage = ref('')

const enter = async () => {
  if (!password.value) return
  mainStore.setGlobalLoading(true, 'Loading wallet...')
  try {
    const json = Storage.get('json') as string
    const wallet = await Wallet.decryptWalletWithPassword(json, password.value)
    props.successCallback(wallet)
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    mainStore.setGlobalLoading(false)
  }
}
</script>
