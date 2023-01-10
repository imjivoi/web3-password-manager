import ModalPassphrase from '../components/Modal/ModalPassphrase.vue'
import ModalPassword from '../components/Modal/ModalPassword.vue'
import Storage from '../services/storage'
import { useModal } from '../store/modal'
import { useWalletStore } from '../store/wallet'
import { useRouter } from 'vue-router'
export const useLoadWallet = () => {
  const router = useRouter()
  const modal = useModal()
  const walletStore = useWalletStore()

  const json = Storage.get('json')

  const successCallback = (wallet) => {
    walletStore.setWalletData({
      address: wallet.address,
      privateKey: wallet.privateKey,
    })

    modal.close()
    router.push('/app')
  }

  const open = () => {
    if (json) {
      modal.open(ModalPassword, { successCallback })
    } else {
      modal.open(ModalPassphrase, { successCallback })
    }
  }

  return { open }
}
