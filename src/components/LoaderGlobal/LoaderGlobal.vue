<template>
    <div v-if="globalLoading.isActive" :class="loaderGlobal">
        <Grid gap="small" :columns="1" place-items="center">
            <Loader color="blue" />
            <span :class="colorSprinkles({ color: 'blue' })" v-if="globalLoading.text">{{ globalLoading.text }}</span>
        </Grid>
    </div>
</template>

<script lang="ts" setup>
import Loader from '../Loader/Loader.vue';
import { loaderGlobal } from './LoaderGlobal.css';


import { computed } from "vue";
import { useMainStore } from "../../store/main";
import { flexSprinkles } from '../../styles/flex.css';
import { Grid } from '..';
import { colorSprinkles } from '../../styles/colors.css';

const mainStore = useMainStore()

const globalLoading = computed(() => mainStore.globalLoading)

</script>

<style>

</style>