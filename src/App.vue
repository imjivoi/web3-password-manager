<template>
  <div :class="[containerCss, spaceSprinkles({ paddingX: 'medium' })]">
    <Header />
    <router-view />
  </div>
  <Notification />
  <Modal />
  <LoaderGlobal />
</template>

<script lang="ts" setup>
import { Header, Notification } from '@/components'

import { computed, onMounted, ref, watch } from 'vue'
import { useMainStore } from './store/main'
import Modal from './components/Modal/Modal.vue';
import LoaderGlobal from './components/LoaderGlobal/LoaderGlobal.vue';

import containerCss from './styles/container.css'
import { darkTheme, lightTheme } from './styles/theme.css'
import { spaceSprinkles } from './styles/space.css'

const mainStore = useMainStore()

const isDark = computed(() => mainStore.isDark)
const toggleTheme = () => {
  if (isDark.value) {
    document.body.classList.add(darkTheme)
    document.body.classList.remove(lightTheme)
  } else {
    document.body.classList.remove(darkTheme)
    document.body.classList.add(lightTheme)
  }
}

watch(isDark, (val) => toggleTheme())
onMounted(() => toggleTheme())
</script>
