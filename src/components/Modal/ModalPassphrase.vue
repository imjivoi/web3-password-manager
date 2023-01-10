<template>
    <template v-if="currentStep === Steps.Passphrase">
        <Heading size="medium" position="center" :class="spaceSprinkles({ marginBottom: 'medium' })">Enter your wallet passphrase</Heading>
        <Form>
            <template #inputs>
                <Input :status="errorMessage ? 'error' : 'neutral'" placeholder="Passphrase" v-model="passphrase">
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
                        <Button size="small" @click="loadWallet">Load wallet</Button>
                    </div>
                </div>
            </template>
        </Form>

    </template>
    <template v-else>
        <Heading size="medium" position="center" :class="spaceSprinkles({ marginBottom: 'medium' })">Enter your password to encrypt wallet</Heading>

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
                        <Button size="small" @click="saveWithPassword">Save wallet</Button>
                    </div>
                </div>
            </template>
        </Form>

    </template>
</template>

<script lang="ts" setup>
import Heading from '../Heading/Heading.vue';
import { flexSprinkles } from '../../styles/flex.css';
import { spaceSprinkles } from '../../styles/space.css';
import Form from '../Form/Form.vue';
import Input from '../Input/Input.vue';
import Button from '../Button/Button.vue';
import { onMounted, ref, watch } from 'vue';
import Wallet from '../../services/wallet';
import { useWalletStore } from '../../store/wallet';
import { Wallet as EthersWallet } from 'ethers';
import Storage from '../../services/storage'
import { useMainStore } from '../../store/main';
enum Steps {
    Passphrase,
    Password
}

const props = defineProps({
    successCallback: {
        type: Function,
        default: () => { }
    }
})
const { setWalletData } = useWalletStore()
const { setGlobalLoading } = useMainStore()

const currentStep = ref(Steps.Passphrase)
const wallet = ref<EthersWallet>()
const passphrase = ref('')
const password = ref('')
const errorMessage = ref('')

const loadWallet = async () => {
    try {
        wallet.value = Wallet.loadWalletByMnemonic(passphrase.value)
        currentStep.value = Steps.Password
    } catch (error) {
        errorMessage.value = error.message
    }
}

const saveWithPassword = async () => {
    if (!wallet.value) return
    setGlobalLoading(true, 'Saving wallet...')
    try {
        const json = await Wallet.encryptWalletWithPassword(wallet.value, password.value)
        Storage.set('json', json)
        props.successCallback(wallet.value)
    } catch (error) {
        errorMessage.value = error.message
    } finally {
        setGlobalLoading(false)
    }
}

onMounted(() => {
    const json = Storage.get('json')
    if (json) {
        currentStep.value = Steps.Password
    }
})

watch(passphrase, () => {
    errorMessage.value = ''
})
</script>

<style>

</style>