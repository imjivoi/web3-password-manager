<template>
  <Card>
    <div :class="flexSprinkles({ display: 'flex', flexDirection: 'column' })">
      <div :class="flexSprinkles({ display: 'flex', justifyContent: 'space-between' })">
        <span :class="header">{{ siteName }}</span>
        <Button icon="trash-outline" size="2xsmall" icon-color="red" @click="$emit('remove', id)" />
      </div>
      <div :class="[flexSprinkles({ display: 'flex', flexDirection: 'column' }), spaceSprinkles({ marginTop: 'xsmall', gap: '2xsmall' })]">
        <div :class="flexSprinkles({ display: 'flex', justifyContent: 'space-between' })">
          <Input disabled size="small" type="password" :model-value="login" />
          <Button icon="copy-outline" size="2xsmall" icon-color="primary" @click="copy(login)" />
        </div>
        <div :class="flexSprinkles({ display: 'flex', justifyContent: 'space-between' })">
          <Input disabled size="small" type="password" :model-value="password" />
          <Button icon="copy-outline" size="2xsmall" icon-color="primary" @click="copy(password)" />
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
import { Account } from '../../types/account';
import { useNotificationStore } from '../../store/notification';

interface Props {
  account: Account
}

const emits = defineEmits(['remove'])

const notification = useNotificationStore()

const props = defineProps<Props>()
const { siteName, login, id, password } = props.account

const copy = async (val: string) => {
  await navigator.clipboard.writeText(val)
  notification.show({ type: 'success', content: 'Copied!' })
}


</script>
