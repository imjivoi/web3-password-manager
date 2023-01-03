<template>
  <Modal
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', false)"
    :width="800"
  >
    <Heading size="medium" position="center"
      >{{
        status === TransactionStatus.Null ? 'Send coins' : 'Transaction status'
      }}
    </Heading>

    <div :class="spaceSprinkles({ marginTop: 'medium' })">
      <Form v-if="status === TransactionStatus.Null">
        <template #inputs>
          <Input
            placeholder="Recipient"
            v-model="recipient"
            :status="!isValidRecipientAddress && !!recipient ? 'error' : ''"
          >
            <template #message v-if="!isValidRecipientAddress && !!recipient">
              This address is not valid
            </template>
          </Input>
          <div>
            <Input
              :placeholder="`You have ${currentBalance}`"
              v-model="amountValue"
              :status="!isCurrentAmountAvailable ? 'error' : ''"
            >
              <template #message v-if="!isCurrentAmountAvailable">
                You don't have sufficient {{ currentToken }}
              </template>
              <template #after>
                <div style="min-width: 105px">
                  <Select>
                    <template #selected>
                      {{ currentToken.toUpperCase() }}
                    </template>
                    <template #list>
                      <SelectItem
                        v-for="(token, idx) in tokens"
                        :key="idx"
                        @click="currentToken = token[0]"
                        >{{ token[0].toUpperCase() }}</SelectItem
                      >
                    </template>
                  </Select>
                </div>
              </template>
            </Input>
          </div>
          <Input placeholder="Memo (optional)" v-model="memo" />
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
              <Button @click="send" :disabled="!isValidForm">Send</Button>
            </div>
          </div>
        </template>
      </Form>
      <div v-else>
        <div :class="spaceSprinkles({ marginBottom: 'medium' })">
          <div v-if="status === TransactionStatus.Success">
            <Text>Transaction sent successfully</Text>
          </div>
          <div v-if="status === TransactionStatus.Processing">
            <Text>Processing ...</Text>
          </div>
          <div v-if="status === TransactionStatus.Failed">
            <Text>There was some error</Text>
          </div>
        </div>
        <Button @click="status = TransactionStatus.Null"
          >New transaction</Button
        >
      </div>
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
import Select from '../Select/Select.vue'
import SelectItem from '../Select/SelectItem.vue'

import { spaceSprinkles } from '../../styles/space.css'
import { flexSprinkles } from '../../styles/flex.css'

import { computed, onMounted, ref, watch } from 'vue'
import Wallet from '../../modules/Wallet'
import { useMainStore } from '../../store/main'
import { useWalletStore } from '../../store/wallet'
import { decrypt } from '../../utils/crypto'
import { useRouter } from 'vue-router'
import { SendTransaction } from '../../modules/Transaction'
import { toU } from '../../utils/utility-token'
import { isTxError } from '@terra-money/terra.js'
import isValid from '../../utils/valid-address'
import Text1 from '../Text/Text.vue'

enum TransactionStatus {
  Null,
  Processing,
  Success,
  Failed,
}

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const walletStore = useWalletStore()
const recipient = ref('')
const amountValue = ref('')
const memo = ref('')
const status = ref<TransactionStatus>(TransactionStatus.Null)
const password = ref('')
const balance = computed(() => walletStore.balance)
const tokens = [
  ['ust', 'uusd'],
  ['luna', 'uluna'],
] as const

const currentToken = ref<'ust' | 'luna'>('ust')

const amountToken = computed(() => {
  //@ts-ignore
  return tokens.find((token) => token[0] === currentToken.value)[1]
})

const currentBalance = computed(() => balance.value[currentToken.value])
const isCurrentAmountAvailable = computed(
  () => parseFloat(currentBalance.value) >= parseFloat(amountValue.value || '0')
)
const isValidRecipientAddress = computed(() => isValid(recipient.value))
const isValidForm = computed(
  () =>
    isCurrentAmountAvailable.value &&
    !!amountValue.value &&
    !!recipient.value &&
    isValidRecipientAddress.value &&
    !!password.value
)

const send = async () => {
  try {
    const wallet = await Wallet.getByPassword(password.value)
    const transaction = new SendTransaction(
      wallet,
      { [amountToken.value]: toU(amountValue.value).toString() },
      recipient.value,
      memo.value
    )
    status.value = TransactionStatus.Processing
    const txResult = await transaction.broadcast()
    console.log(txResult)
    status.value = TransactionStatus.Success
  } catch (error) {
    console.log(error)
    status.value = TransactionStatus.Failed
  }
}
</script>
