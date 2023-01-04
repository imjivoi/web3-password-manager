<template>
  <div :class="section">
    <Grid>
      <PasswordItem v-for="password in passwords" :password="password" :key="password.id" />
    </Grid>
  </div>
</template>

<script lang="ts" setup>
import { Box, Button, Dropdown, DropdownItem, PasswordItem, Card, Grid } from '@/components'

import section from '@/styles/section.css'
import { centerCss } from '../styles/common.css'
import { flexSprinkles } from '../styles/flex.css'
import { spaceSprinkles } from '../styles/space.css'
import { passwordsContainer } from '@/components/Passwords/Passwords.css'

import { ref } from 'vue'

const categories = ['All', 'Passwords', 'Notes']

const activeCategory = ref('All')

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
</script>
