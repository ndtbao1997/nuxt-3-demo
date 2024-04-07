<script setup lang="ts">
const handleLogin = () => {
  navigateTo('/login')
}

const handleProducts = () => {
  navigateTo('/products')
}
</script>

<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt dojo</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <button type="button" @click="handleProducts" class="btn-1">Products</button>
          </li>
          <li>
            <button type="button" @click="handleLogin" class="btn-1">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
@import '@/assets/css/tailwind.css';
.router-link-exact-active {
  color: #12b488;
}

</style>