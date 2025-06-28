<template>
    <div>
        <header>
          <nav>
            <NuxtLink to="/products">Products</NuxtLink>
          </nav>
        </header>
        
        <div>
            <slot></slot>
        </div>


        <footer>
            <ul>
              <li>  <NuxtLink to="/">Home</NuxtLink> </li>
              <li>  <NuxtLink to="/about">About</NuxtLink> </li>
              <li>  <NuxtLink to="/products">Products</NuxtLink> </li>
            </ul>
        </footer>
    </div>
</template>

<style lang="css" scoped>
    .router-link-exact-active {
        color: chocolate;
    }
</style>