import { ethers, providers } from 'ethers'
import { defineStore } from 'pinia'
import { markRaw } from 'vue'
import { useMainStore } from './main'
import { useNotificationStore } from './notification'
import Wallet from '../services/wallet'

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    isLoading: false,
    address: '',
    privateKey: '',
    balance: '',
  }),
  actions: {
    setWalletData({
      address,
      privateKey,
    }: {
      address: string
      privateKey: string
    }) {
      this.setAddress(address)
      this.setPrivateKey(privateKey)
    },
    setPrivateKey(privateKey: string) {
      this.privateKey = privateKey
      sessionStorage.setItem('key', privateKey)
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
