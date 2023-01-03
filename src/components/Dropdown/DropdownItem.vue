<template>
  <li :class="dropdownListItem"><slot /></li>
</template>

<script lang="ts" setup>
import { dropdownListItem } from './Dropdown.css'
</script>
