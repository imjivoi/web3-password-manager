<template>
  <Modal
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', false)"
    :width="800"
  >
    <Heading size="medium" position="center">Enter your password</Heading>

    <div :class="spaceSprinkles({ marginTop: 'medium' })">
      <Skeleton width="100%" height="80px" v-if="isLoading" />

      <template v-else>
        <Text
          weight="accent"
          size="xlarge"
          :class="spaceSprinkles({ marginY: 'xsmall' })"
          >Enter your password</Text
        >
        <Form>
          <template #inputs>
            <Input placeholder="Password" type="password" v-model="password" />
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
                <Button @click="enter">Enter</Button>
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
import { decrypt } from '../../utils/crypto'
import { useRouter } from 'vue-router'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const walletStore = useWalletStore()
const isLoading = ref(false)
const password = ref('')
const router = useRouter()

const enter = async () => {
  if (!password) return
  try {
    const wallet = await Wallet.getByPassword(password.value)
    walletStore.setWallet(wallet)
    router.push('/wallet')
  } catch (error) {
    console.log('Incorrect password')
  }
}
</script>
