<script setup lang="ts">
const handleLogin = () => {
  navigateTo('/login')
}
</script>

<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">TOMO Shop</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Trang chủ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">Tin tức</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/event">Sự kiện</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Danh sách sản phẩm</NuxtLink>
          </li>
          <li>
            <button type="button" @click="handleLogin" class="btn-1">Đăng nhập</button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
@import '@/assets/css/tailwind.css';
.router-link-exact-active {
  color: #12b488;
}

</style>