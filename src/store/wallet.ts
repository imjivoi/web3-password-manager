import { ethers, providers } from 'ethers'
import { defineStore } from 'pinia'
import { markRaw } from 'vue'
import { useMainStore } from './main'
import { useNotificationStore } from './notification'
import Wallet from '../services/wallet'
import { HmacSHA256, SHA256 } from 'crypto-js'
export const useWalletStore = defineStore('wallet', {
  state: () => ({
    isLoading: false,
    address: '',
    privateKeyHash: '',
    balance: '',
  }),
  actions: {
    setPrivateKeyHash(privateKey: string) {
      const hashedKey = SHA256(privateKey).toString()
      this.privateKeyHash = hashedKey
      sessionStorage.setItem('key', hashedKey)
    },
    setAddress(address: string) {
      this.address = address
    },
    setBalance(balance: string) {
      this.balance = balance
    },
    async connectWallet() {
      const notification = useNotificationStore()
      try {
        this.isLoading = true

        const accounts = await Wallet.getAccounts()
        if (accounts.length > 0) {
          const balanceData = await Wallet.getBalance(accounts[0])
          this.setAddress(accounts[0])
          this.setBalance(balanceData.balance)
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
  getters: {
    isLogged(): boolean {
      return !!this.address
    },
  },
})
