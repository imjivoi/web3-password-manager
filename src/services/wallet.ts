import { ethers, providers } from 'ethers'

class Wallet {
  private _provider: providers.Web3Provider
  private _signer: providers.JsonRpcSigner

  constructor() {
    const { ethereum } = window
    if (!ethereum) {
      throw new Error('Metamask missing')
    }
    this._provider = new ethers.providers.Web3Provider(ethereum)
    this._signer = this._provider.getSigner()
  }

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
}

export default new Wallet()
