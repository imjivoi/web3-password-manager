export type Account = {
  id: string
  siteName: string
  login: string
  password: string
}

export type AccountWithoutId = Omit<Account, 'id'>

export const accountKeys = ['id', 'siteName', 'login', 'password'] as Array<
  keyof Account
>

export const accountKeysWithoutId = ['siteName', 'login', 'password'] as Array<
  keyof AccountWithoutId
>
