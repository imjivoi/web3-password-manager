<template>
  <teleport to="body">
    <transition name="fade-top">
      <div :class="modalOverflow" @click.self="modal.close" v-if="isOpen">
        <div :class="modalBox">
          <div :class="modalContent">
            <component :is="view" v-bind="props" @close="modal.close" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { modalBox, modalOverflow, modalContent } from './Modal.css'
import ModalAdd from './ModalAdd.vue'

import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useModal } from '@/store/modal';


const modal = useModal();

// reactive container to save the payload returned by the mounted view
const model = reactive({});

// convert all state properties to reactive references to be used on view
const { isOpen, view, props } = storeToRefs(modal);
</script>
