import { ethers, providers } from 'ethers'

export class Web3Instance {
  readonly _provider: providers.JsonRpcProvider
  readonly _signer: providers.JsonRpcSigner

  constructor() {
    const providerUrl = import.meta.env.VITE_PROVIDER_URL
    this._provider = new ethers.providers.JsonRpcProvider(providerUrl)
    this._signer = this._provider.getSigner()
  }
}
