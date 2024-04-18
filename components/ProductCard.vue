<script setup lang="ts">
const {product} = defineProps(['product'])
</script>

<template>
<div class="card text-center">
  <img :src="product.profile" alt="product" class="thumb">
  <p class="font-bold text-gray-500 m-4 truncate">{{product.name}}</p>
  <NuxtLink :to="`/products/${product.product_id}`">
    <p class="btn my-4">Chi tiết sản phẩm</p>
  </NuxtLink>
</div>
</template>

<style scoped>
.thumb{
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>