<template>
  <div :class="section">
    <div :class="[spaceSprinkles({ marginBottom: 'large' }), flexSprinkles({ display: 'flex', alignItems: 'center' })]">
      <Heading :class="spaceSprinkles({ marginRight: 'medium', marginBottom: 'none' })">Accounts</Heading>
      <div :class="[flexSprinkles({ display: { tablet: 'flex' } }), spaceSprinkles({ gap: 'xsmall' })]">
        <Button size="small" @click="add">Add new</Button> <Button size="xsmall" icon-color="primary" icon="sync-outline" @click="getAll" title="Update"></Button>
      
      </div>
      </div>
      <Grid v-if="isLoading">
        <AccountItemLoading v-for="i in 4" :key="i" />
      </Grid>
      
      <Grid v-else-if="accounts.length">
        <AccountItem v-for="account in accounts" :account="account" :key="account.id" @remove="remove" />
      </Grid>
      <div :class="flexSprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center' })" v-else>
        <span>Empty</span>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { Box, Button, Dropdown, DropdownItem, AccountItem, Card, Grid, Heading, AccountItemLoading } from '@/components'

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
const isLoading = ref(true)
const modal = useModal()

const accounts = ref<Account[]>([])

const add = () => {
  modal.open(ModalAdd, {
    successCallback: (val) => {
      modal.close()
      getAll()
    }
  })
}

const getAll = async () => {
  try {
    isLoading.value = true
    accounts.value = await PasswordManager.getAll()

  } catch (error) {

  } finally {
    isLoading.value = false

  }
}

const remove = async (id: string) => {
  await PasswordManager.delete(id)
}

onMounted(() => {
  getAll()
})
</script>
