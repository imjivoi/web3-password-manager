<template>
  <teleport to="body">
    <transition name="fade-top">
      <div :class="modalOverflow" @click.self="modal.close" v-if="isOpen">
        <div :class="modalBox">
          <div :class="flexSprinkles({ display: { tablet: 'none', mobile: 'flex' }, justifyContent: 'flex-end' })">
            <Button icon="close-outline" :style="{ color: vars.theme.textColorPrimary }" @click="modal.close()" />
          </div>
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
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useModal } from '@/store/modal';
import { flexSprinkles } from '../../styles/flex.css';
import { Button } from '..';
import { colorSprinkles } from '../../styles/colors.css';
import { vars } from '../../styles/root.css';

const modal = useModal();


const { isOpen, view, props } = storeToRefs(modal);
</script>
