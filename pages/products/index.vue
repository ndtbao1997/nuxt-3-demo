<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isFailed">Failed to fetch products.</p>
    <div v-else class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, onMounted} from 'vue';
import {useProductsStore} from '@/stores/products/list.js';

interface Product {
  avg_stars: number | null;
  benefit: string;
  created_at: string;
  delete_at: string | null;
  evaluate: string | null;
  id: number;
  information: string;
  instruct: string;
  name: string;
  note: string;
  price: number;
  product_detail_id: number;
  product_id: number;
  product_type_id: number;
  profile: string;
  quantity: number;
  trademark: string;
  updated_at: string;
  weight: number;
}

export default {
  setup() {
    const store = useProductsStore();
    const isLoading = computed(() => store.getIsLoading);
    const isFailed = computed(() => store.getIsFailed);
    const products = computed<Product[]>(() => store.getProducts);
    const fetchProducts = computed(() => store.fetchProducts);

    onMounted(() => {
      store.fetchProducts();
    });

    useHead({
      title: 'TOMO Shop | Danh sách sản phẩm',
      meta: [
        {name: 'description', content: 'TOMO Shop | Danh sách sản phẩm | Mô tả'},
      ]
    });

    definePageMeta({
      layout: 'products'
    })

    return {isLoading, products, fetchProducts, isFailed, store};
  }
}
</script>

<style lang="scss" scoped>

</style>