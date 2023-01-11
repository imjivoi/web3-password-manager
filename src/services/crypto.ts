import cryptoJs from 'crypto-js'

export const encryptWithAES = (data: string, key: string) => {
  return cryptoJs.AES.encrypt(data, key).toString()
}

export const decryptWithAES = (encryptedData: string, key: string) => {
  const bytes = cryptoJs.AES.decrypt(encryptedData, key)
  const originalText = bytes.toString(cryptoJs.enc.Utf8)
  return originalText
}

export const hash = (data: string) => cryptoJs.SHA256(data).toString()
