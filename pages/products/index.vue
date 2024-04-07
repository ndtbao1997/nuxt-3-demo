<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {useFetch} from "#app";

definePageMeta({
  layout: 'products'
})

const {data: products} = await useFetch(`https://fakestoreapi.com/products`);

useHead({
  title: 'Nuxt Dojo | Products',
  meta: [
    {name: 'description', content: 'Nuxt Dojo | Products | Description'},
  ]
})
</script>

<style lang="scss" scoped>

</style>