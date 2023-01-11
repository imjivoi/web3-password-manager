<template>
    <div :class="card">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { card } from './Card.css'

</script>

