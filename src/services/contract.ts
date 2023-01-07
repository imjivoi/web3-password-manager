import { providers, Contract } from 'ethers'

class ContractInteraction {
  private _contractInstance: Contract
  constructor(
    address: string,
    abi: Record<string, unknown>,
    provider: providers.Web3Provider
  ) {
    this._contractInstance = new Contract(address, abi, provider)
  }
}

export { ContractInteraction }
