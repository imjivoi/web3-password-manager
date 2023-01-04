<template>
  <Card>
    <div :class="flexSprinkles({ display: 'flex', flexDirection: 'column' })">
      <span :class="header">{{ site }}</span>
      <div :class="[flexSprinkles({ display: 'flex', flexDirection: 'column' }), spaceSprinkles({ marginTop: 'xsmall', gap: '2xsmall' })]">
        <div :class="flexSprinkles({ display: 'flex', justifyContent: 'space-between' })">
          <Input disabled size="small" type="password" :model-value="login" />
          <Button icon="copy-outline" size="2xsmall" icon-color="purple" @click="copy(login)" />
        </div>
        <div :class="flexSprinkles({ display: 'flex', justifyContent: 'space-between' })">
          <Input disabled size="small" type="password" :model-value="password" />
          <Button icon="copy-outline" size="2xsmall" icon-color="purple" @click="copy(password)" />
        </div>
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
import { useNotificationStore } from '../../store/notification';

interface Props {
  password: IPassword
}

const notification = useNotificationStore()

const props = defineProps<Props>()
const { site, login, id, password } = props.password

const copy = async (val: string) => {
  await navigator.clipboard.writeText(val)
  notification.show({ type: 'success', content: 'Copied!' })
}
</script>
