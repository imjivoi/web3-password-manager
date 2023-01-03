import { ethers, providers } from 'ethers'
import { defineStore } from 'pinia'
import { markRaw } from 'vue'
import { useMainStore } from './main'
import { useNotificationStore } from './notification'
interface Balances {
  luna: string
  ust: string
  usd: string
}
export const useWalletStore = defineStore('wallet', {
  state: () => ({
    isLoading: false,
    provider: {} as providers.Web3Provider,
    signer: {},
    account: { address: '', balance: '' },
  }),
  actions: {
    async setAccount(address: string) {
      const balance = await this.provider.getBalance(address)

      const formattedBalance = ethers.utils.formatEther(balance)

      this.account = { address, balance: formattedBalance }
    },
    async connectWallet() {
      const notification = useNotificationStore()
      try {
        this.isLoading = true
        const { ethereum } = window

        if (ethereum) {
          this.provider = markRaw(new ethers.providers.Web3Provider(ethereum))
          await this.provider.send('eth_requestAccounts', [])
          this.signer = this.provider.getSigner()
          const accounts = await this.provider.listAccounts()
          if (accounts.length > 0) {
            await this.setAccount(accounts[0])
          }
        } else {
          notification.show({
            content: 'For use this app you need to install metamask',
            type: 'warning',
          })
        }
      } catch (error) {
        notification.show({
          content: 'For use this app you need to connect metamask',
          type: 'warning',
        })
      } finally {
        this.isLoading = false
      }
    },
  },
})
