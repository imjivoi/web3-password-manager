import { ethers, Wallet as EthersWallet } from 'ethers'
import { Web3Instance } from './web3-instance'

class Wallet extends Web3Instance {
  async getAccounts() {
    await this._provider.send('eth_requestAccounts', [])
    const accounts = await this._provider.listAccounts()
    return accounts
  }

  async getBalance(address: string) {
    const balance = await this._provider.getBalance(address)

    const formattedBalance = ethers.utils.formatEther(balance)
    return {
      balance: formattedBalance,
    }
  }

  loadWalletByMnemonic(mnemonic: string) {
    return ethers.Wallet.fromMnemonic(mnemonic)
  }

  encryptWalletWithPassword(wallet: EthersWallet, password: string) {
    return wallet.encrypt(password)
  }

  decryptWalletWithPassword(json: string, password: string) {
    return ethers.Wallet.fromEncryptedJson(json, password)
  }
}

export default new Wallet()
