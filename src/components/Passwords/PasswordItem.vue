<template>
  <Card>
    <div :class="flexSprinkles({ display: 'flex', flexDirection: 'column' })">
      <span :class="header">{{ password.site }}</span>
      <div :class="[flexSprinkles({ display: 'flex', flexDirection: 'column' }), spaceSprinkles({ marginTop: 'xsmall', gap: '2xsmall' })]">
        <Input disabled size="small" :model-value="password.login" />
        <Input disabled size="small" :model-value="password.password" />
      </div>

    </div>
  </Card>
</template>

<script lang="ts" setup>
import { Button, Card, Input } from '@/components'

import { flexSprinkles } from '../../styles/flex.css'

import { spaceSprinkles } from '../../styles/space.css'
import { passwordItem, header, itemData } from './Passwords.css'
import { IPassword } from '../../types/password';

interface Props {
  password: IPassword
}

const { password } = defineProps<Props>()
</script>
