import { Contract, utils } from 'ethers'
import contractInfo from '../contract'
import {
  Account,
  AccountWithoutId,
  accountKeys,
  accountKeysWithoutId,
} from '../types/account'
import { Web3Instance } from './web3-instance'
import { decryptWithAES, encryptWithAES } from './crypto'

class PasswordManager extends Web3Instance {
  private _contract: Contract
  private _privateKey: string
  constructor() {
    super()
    this._contract = new Contract(
      contractInfo.address,
      contractInfo.abi,
      this._signer
    )
    this._privateKey = sessionStorage.getItem('key') as string
  }

  async add(newAccount: AccountWithoutId) {
    const encryptedAccount = this._encryptAccount(newAccount)
    return await this._contract.addNewAccount(
      encryptedAccount.siteName,
      encryptedAccount.login,
      encryptedAccount.password
    )
  }
  update() {}
  delete(id: string) {
    return this._contract.deleteAccount(utils.parseEther(id))
  }
  async getAll() {
    const accounts: Account[] = await this._contract.allAccounts()

    return accounts.map((account) => {
      return this._decryptAccount(account)
    })
  }
  getById() {}

  private _encryptAccount(accountData: AccountWithoutId) {
    const result = {} as AccountWithoutId
    accountKeysWithoutId.slice(0).forEach((key) => {
      result[key] = encryptWithAES(accountData[key], this._privateKey)
    })

    return result
  }

  private _decryptAccount(accountData: Account) {
    const result = {} as Account
    accountKeys.forEach((key) => {
      const value = accountData[key]
      console.log(value)
      try {
        if (key === 'id') {
          result[key] = String(
            Math.round(parseFloat(utils.formatEther(value)) * 10 ** 18)
          )
        } else {
          result[key] = decryptWithAES(value, this._privateKey)
        }
      } catch (error) {
        result[key] = value
      }
    })

    return result
  }
}

export default new PasswordManager()
