<template>
  <div :class="section">
    <template v-if="true">
      <div :class="[spaceSprinkles({ marginBottom: 'large' }), flexSprinkles({ display: 'flex', alignItems: 'center' })]">
        <Heading :class="spaceSprinkles({ marginRight: 'small', marginBottom: 'none' })">Passwords</Heading> <Button border="round" variant="secondary" size="small" icon="plus-outline" @click="add">Add new</Button>
      </div>
      <Grid>
        <PasswordItem v-for="password in passwords" :password="password" :key="password.id" />
      </Grid>
    </template>
    <template v-else>
      <div :class="spaceSprinkles({ marginBottom: 'small' })">
        <Heading>Passwords</Heading>
      </div>
      <div :class="flexSprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'center' })">
        <Button @click="add">Add new</Button>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Box, Button, Dropdown, DropdownItem, PasswordItem, Card, Grid, Heading } from '@/components'

import section from '@/styles/section.css'
import { centerCss } from '../styles/common.css'
import { flexSprinkles } from '../styles/flex.css'
import { spaceSprinkles } from '../styles/space.css'
import { passwordsContainer } from '@/components/Passwords/Passwords.css'

import { ref } from 'vue'
import { useModal } from '../store/modal'
import ModalAdd from '../components/Modal/ModalAdd.vue'

const categories = ['All', 'Passwords', 'Notes']

const activeCategory = ref('All')
const modal = useModal()

const passwords = [
  {
    id: '1',
    site: 'site',
    login: 'login',
    password: 'password'
  },
  {
    id: '2',
    site: 'site',
    login: 'login',
    password: 'password'
  },
  {
    id: '3',
    site: 'site',
    login: 'login',
    password: 'password'
  },
  {
    id: '4',
    site: 'site',
    login: 'login',
    password: 'password'
  },
]

const add = () => {
  modal.open(ModalAdd, {
    successCallback: (val) => {
      console.log(val);
      console.log('success cb');
    }
  })
}
</script>
