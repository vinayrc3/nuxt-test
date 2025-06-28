<template>
    <VCard class="mt-16 pa-8 mx-auto text-center w-75">
        <p class="mt-7 text-4xl font-bold">{{ error?.statusCode }}</p>
        <p class="mt-7 text-2xl ">Ooops.</p>
        <p class="ma-7">{{ error?.message }}</p>
        <VBtn variant="outlined" class="text-primary" @click="handleError">Go Home</VBtn>
    </VCard>
</template>

<script setup lang="ts">
    import type { NuxtError } from '#app';
    const props = defineProps({
        error: Object as () => NuxtError,
    })
    const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped>

</style>