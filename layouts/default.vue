<template>
    <div>
        <VAppBar :elevation="2">
            <VAppBarTitle>
                <VBtn to="/">Home</VBtn>
            </VAppBarTitle>

            <nav>
                <VBtn to="/about">About</VBtn>
                <VBtn to="/products">Products</VBtn>
                <VBtn to="/products/5">Product 5</VBtn>
            </nav>
        </VAppBar>
        

        <VContainer class="mt-16">
            <slot></slot>
        </VContainer>
    </div>
</template>

<style lang="css" scoped>
    .router-link-exact-active {
        color: chocolate;
    }
</style>