<template>
    <button :class="connectItem">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { connectItem } from './ConnectItem.css';

</script>

<style>

</style>