<template>
    <Heading size="medium" position="center">Choose connect method</Heading>
    <div>
        <ul>
            <li v-for="(item, idx) in items" :key="idx">
                <ConnectItem :disabled="!item.enable" :class="spaceSprinkles({ marginTop: 'small' })" @click="connect(item.code)">
                    {{ currentMethod === item.code && isConnecting ? 'Connecting...' : item.name }}
                    <Icon :name="item.icon" />
                </ConnectItem>
            </li>
        </ul>

    </div>
</template>
<script lang="ts">
export default {
    name: 'ModalConnect'
}
</script>
<script lang="ts" setup>
import { spaceSprinkles } from '../../styles/space.css';
import ConnectItem from '../ConnectItem/ConnectItem.vue';
import Heading from '../Heading/Heading.vue';
import Icon from '../Icon/Icon.vue';
import { useWalletStore } from '../../store/wallet';
import { ref } from 'vue';
import { useMainStore } from '../../store/main';


const walletStore = useWalletStore()
const mainStore = useMainStore()

const items = [
    {
        name: 'Metamask',
        icon: 'metamask',
        code: 'metamask',
        enable: true
    },
    {
        name: 'WalletConnect (soon...)',
        icon: 'walletconnect',
        code: 'walletconnect',
        enable: false
    }
]

const isConnecting = ref(false)
const currentMethod = ref('')

const connect = async (method: string) => {
    currentMethod.value = method
    isConnecting.value = true
    mainStore.setGlobalLoading(true, 'Connecting wallet...')
    try {
        if (method === 'metamask') {
            await walletStore.connectWallet()
        }
    } catch (error) {

    } finally {
        isConnecting.value = false
    }
    mainStore.setGlobalLoading(false)

}

</script>

<style>

</style>