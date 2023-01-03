<template>
  <Modal
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', false)"
    :width="800"
  >
    <Heading size="medium" position="center">Create wallet</Heading>
    <div :class="spaceSprinkles({ marginTop: 'medium' })">
      <div :class="spaceSprinkles({ marginY: 'xsmall' })">
        <Skeleton width="100%" height="20px" v-if="isLoading" />
        <Text weight="accent" size="xlarge" v-else
          >Remember your mnemonic phrase</Text
        >
      </div>

      <div>
        <Skeleton width="100%" height="80px" v-if="isLoading" />

        <Textarea v-model="mnemonic" disabled rows="3" v-else />
      </div>
    </div>

    <div :class="spaceSprinkles({ marginTop: 'medium' })">
      <Skeleton width="100%" height="80px" v-if="isLoading" />

      <template v-else>
        <Text
          weight="accent"
          size="xlarge"
          :class="spaceSprinkles({ marginY: 'xsmall' })"
          >Create password to encrypt your wallet</Text
        >
        <Form>
          <template #inputs>
            <Input placeholder="Password" type="password" v-model="password" />
            <Input
              placeholder="Repeat your password"
              type="password"
              v-model="repeatPassword"
            />
          </template>
          <template #footer>
            <div
              :class="
                flexSprinkles({
                  display: {
                    tablet: 'flex',
                    mobile: 'block',
                  },
                })
              "
            >
              <div
                :class="
                  spaceSprinkles({
                    marginRight: {
                      tablet: 'small',
                      mobile: 'none',
                    },
                    marginBottom: {
                      tablet: 'none',
                      mobile: 'small',
                    },
                  })
                "
              >
                <Button @click="create" :disabled="!isValidPassword"
                  >Create</Button
                >
              </div>
              <div>
                <Button
                  type="secondary"
                  @click="$emit('update:modelValue', false)"
                  >Cancel</Button
                >
              </div>
            </div>
          </template>
        </Form>
      </template>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import Text from '../Text/Text.vue'
import Heading from '../Heading/Heading.vue'
import Modal from './Modal.vue'
import Textarea from '../Textarea/Textarea.vue'
import Input from '../Input/Input.vue'
import Form from '../Form/Form.vue'
import Button from '../Button/Button.vue'
import Skeleton from '../Skeleton/Skeleton.vue'

import { spaceSprinkles } from '../../styles/space.css'
import { flexSprinkles } from '../../styles/flex.css'

import { computed, onMounted, ref, watch } from 'vue'
import Wallet from '../../modules/Wallet'
import { useMainStore } from '../../store/main'
import { useWalletStore } from '../../store/wallet'
import { MnemonicKey, Wallet as WalletType } from '@terra-money/terra.js'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const mkKey = ref<MnemonicKey>()
const password = ref('')
const repeatPassword = ref('')
const isLoading = ref(true)
const walletStore = useWalletStore()
const wallet = ref<WalletType>()

const mnemonic = computed(() => mkKey.value?.mnemonic)

const isValidPassword = computed(
  () =>
    password.value !== '' &&
    repeatPassword.value !== '' &&
    password.value === repeatPassword.value
)

const create = async () => {
  if (mkKey.value) await walletStore.create(mkKey.value, password.value)
}
watch(
  () => props.modelValue,
  async (val) => {
    if (val) {
      // wallet.value = Wallet.createByMnemonic()
      mkKey.value = Wallet.getMnemonic()
      // mnemonic.value = await Wallet.getMnemonic()
      isLoading.value = false
    }
  }
)
</script>
