<template>
    <VCard class="mx-auto" width="760">
        <VImg
            class="align-end text-black my-4"
            height="400"
            fit
            :src="product.image"
            :alt="product.title"
        >
    </VImg>
    
        <div class="test">This is a test</div>
        <VCardTitle class="mt-8 text-error">{{ product.title }}</VCardTitle>
        <VCardText v-if="isMobile">{{ product.description }}</VCardText>
    </VCard>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core';
const config = useRuntimeConfig()


    const isMobile = useMediaQuery('(min-width: 768px)');
    const route = useRoute();
    const { id } = route.params;

    const { data: product } = await useFetch(`${config.public.apiBase}/products/${id}`);

    if (!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found!', fatal: true })
    }

</script>

<style lang="scss" scoped>
    .test {
        color: $primary;
    }
</style>