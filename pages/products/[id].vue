<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isFailed">Failed to fetch products.</p>
    <div v-else>
      <Head>
        <Title>TOMO Shop | {{product.name}}</Title>
        <Meta name="description" :content="product.name" />
      </Head>
      <ProductDetails :products="products" />
    </div>
  </div>
</template>

<script lang="ts">
import {computed, onMounted} from 'vue';
import {useProductsStore} from '@/stores/products/list.js';
import {useRoute} from "vue-router";



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
    let product = ref({} as Product);
    const {id} = useRoute().params;

    onMounted(() => {
      store.fetchProductsByProductId(id);
      if (isFailed.value) {
        throw createError({statusCode: 404, statusMessage: "Product not found", fatal: true})
      }
      product.value = products.value[0];
      console.log(product.value.name)
    });

    definePageMeta({
      layout: 'products'
    })

    return {isLoading, products, fetchProducts, isFailed, store, product};
  }
}
</script>

<style lang="scss" scoped>

</style>