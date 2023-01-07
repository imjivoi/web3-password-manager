export default {
  address: '0xa28A9d2d744c4Be5Eeb47206305Ddad6e4dafcFD',
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'siteName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'login',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'password',
          type: 'string',
        },
      ],
      name: 'addNewAccount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'allAccounts',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'siteName',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'login',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'password',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
          ],
          internalType: 'struct PasswordManager.Account[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'recordID',
          type: 'uint256',
        },
      ],
      name: 'deleteAccount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'recordID',
          type: 'uint256',
        },
      ],
      name: 'getAccountByID',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'siteName',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'login',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'password',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
          ],
          internalType: 'struct PasswordManager.Account',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'recordID',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'siteName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'login',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'password',
          type: 'string',
        },
      ],
      name: 'updateAccount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
}
