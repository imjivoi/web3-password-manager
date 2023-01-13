<template>
  <div :class="section">
    <template v-if="true">
      <div :class="[spaceSprinkles({ marginBottom: 'large' }), flexSprinkles({ display: 'flex', alignItems: 'center' })]">
        <Heading :class="spaceSprinkles({ marginRight: 'small', marginBottom: 'none' })">Accounts</Heading> <Button border="round" variant="secondary" size="small" icon="plus-outline" @click="add">Add new</Button><Button border="round" variant="secondary" size="small" @click="getAll">Get all</Button>
      </div>
      <Grid>
        <AccountItem v-for="account in accounts" :account="account" :key="account.id" @remove="remove" />
      </Grid>
    </template>
    <template v-else>
      <div :class="spaceSprinkles({ marginBottom: 'small' })">
        <Heading>Accounts</Heading>
      </div>
      <div :class="flexSprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center' })">
        <Button @click="add">Add new</Button>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Box, Button, Dropdown, DropdownItem, AccountItem, Card, Grid, Heading } from '@/components'

import section from '@/styles/section.css'
import { centerCss } from '../styles/common.css'
import { flexSprinkles } from '../styles/flex.css'
import { spaceSprinkles } from '../styles/space.css'
import { passwordsContainer } from '@/components/Passwords/Passwords.css'
import PasswordManager from '../services/password-manager'
import { onMounted, ref } from 'vue'
import { useModal } from '../store/modal'
import ModalAdd from '../components/Modal/ModalAdd.vue'
import { Account } from '../types/account'


const categories = ['All', 'Passwords', 'Notes']

const activeCategory = ref('All')
const modal = useModal()

const accounts = ref<Account[]>()

const add = () => {
  modal.open(ModalAdd, {
    successCallback: (val) => {
      console.log(val);
      console.log('success cb');
    }
  })
}

const getAll = async () => {
  accounts.value = await PasswordManager.getAll()
}

const remove = async (id: string) => {
  await PasswordManager.delete(id)
}

onMounted(() => {
  getAll()
})
</script>
