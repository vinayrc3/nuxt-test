<template>
    <VContainer>
        <VRow gap="8">
            <VCol v-for="p in products" cols="4" >
                <VCard :to="`/products/${p.id}`" class="pa-4">{{ p.title }}</VCard>
            </VCol>
        </VRow>
    </VContainer>
</template>

<script setup>
    const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style lang="css" scoped>

</style>