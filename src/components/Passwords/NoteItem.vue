<template>
  <div :class="passwordItem">
    <div
      :class="
        flexSprinkles({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })
      "
    >
      <div>
        <div :class="header">Name</div>
        <div :class="itemData">Name</div>
      </div>
      <div>
        <div :class="header">Content</div>
        <div :class="itemData">Content</div>
      </div>
      <div>
        <div>
          <Button size="xsmall" type="white" icon="edit-outline"></Button>
        </div>
        <div>
          <Button size="xsmall" type="white" icon="trash-outline"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components'

import { flexSprinkles } from '../../styles/flex.css'
import { passwordItem, header, itemData } from './Passwords.css'
</script>
