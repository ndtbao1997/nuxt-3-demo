<script setup lang="ts">
</script>

<template>
  <div>
    <Header />
  </div>
  <div class="container mx-auto p-4 flex justify-between border-t-2">
    <slot></slot>
  </div>
</template>

<style scoped>
@import '@/assets/css/tailwind.css';
.router-link-exact-active {
  color: #12b488;
}

</style>