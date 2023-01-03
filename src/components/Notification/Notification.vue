<template>
  <div :class="notificationOverflow">
    <transition-group name="top">
      <div
        :class="notification({ type: item.type })"
        v-for="item in notifications"
        :key="item.id"
      >
        {{ item.content }}
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue-demi'
import { useNotificationStore } from '../../store/notification'

import { notification, notificationOverflow } from './Notification.css'

const notificationStore = useNotificationStore()

const notifications = computed(() => notificationStore.notifications)
</script>
