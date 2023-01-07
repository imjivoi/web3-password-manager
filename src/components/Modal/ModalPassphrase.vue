<template>
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

<script lang="ts" setup>
import Heading from '../Heading/Heading.vue';
import { flexSprinkles } from '../../styles/flex.css';
import { spaceSprinkles } from '../../styles/space.css';
import Form from '../Form/Form.vue';
import Input from '../Input/Input.vue';
import Button from '../Button/Button.vue';
import { ref, watch } from 'vue';
import Wallet from '../../services/wallet';
import { useWalletStore } from '../../store/wallet';

const props = defineProps({
    successCallback: {
        type: Function,
        default: () => { }
    }
})
const { setAddress, setPrivateKeyHash } = useWalletStore()

const passphrase = ref('')
const errorMessage = ref('')

const loadWallet = async () => {
    try {
        const wallet = Wallet.loadWalletByMnemonic(passphrase.value)
        setAddress(wallet.address)
        setPrivateKeyHash(wallet.privateKey)
        props.successCallback()
    } catch (error) {
        errorMessage.value = error.message
    }
}

watch(passphrase, () => {
    errorMessage.value = ''
})
</script>

<style>

</style>