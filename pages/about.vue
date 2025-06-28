<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id quis autem eaque sit ducimus provident perspiciatis veniam consequuntur. Modi.</p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/ninja?name=tom');
</script>

<style lang="css" scoped>
    h2 {
        color: blueviolet;
        font-size: 3rem;
    }
</style>