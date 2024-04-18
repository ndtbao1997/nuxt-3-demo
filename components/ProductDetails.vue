<script lang="ts">
import { onMounted, toRef, defineProps, ref } from 'vue';

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

const defaultProduct: Product = {
  avg_stars: null,
  benefit: '',
  created_at: '',
  delete_at: null,
  evaluate: null,
  id: 0,
  information: '',
  instruct: '',
  name: '',
  note: '',
  price: 0,
  product_detail_id: 0,
  product_id: 0,
  product_type_id: 0,
  profile: '',
  quantity: 0,
  trademark: '',
  updated_at: '',
  weight: 0,
};

export default {
  props: {
    products: {
      type: Array as () => Product[],
      required: true,
    },
  },
  setup(props) {
    let product = ref(defaultProduct);
    const products = toRef(props, 'products');

    onMounted(() => {
      product.value = products.value[0];
    });

    const handleSelectWeight = (id: number) => {
      product.value = products.value.find((x) => x.product_detail_id === id) || defaultProduct;
    };

    const addToCart = () => {

    }

    return { products, product, handleSelectWeight , addToCart};
  },
};
</script>

<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.profile" alt="product img" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 class="text-2xl my-7">{{ product.name }}</h2>
        <p class="text-xl my-7">Giá sản phẩm: {{ product.price }}</p>
        <h4 class="font-bold border-b-2 mb-4 pb-2">Mô tả sản phẩm</h4>
        <p class="mb-7">{{ product.information }}</p>
        <h4 class="font-bold border-b-2 mb-4 pb-2">Trọng lượng</h4>
        <ul class="flex gap-4" v-for="p in products">
          <li>
            <button type="button" @click="handleSelectWeight(p.product_detail_id)" class="btn-1">{{p.weight}} kg</button>
          </li>
        </ul>
        <button @click="addToCart" class="btn-2">
          Thêm <i class="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-1{
  width: 4rem;
}
img {
  max-width: 400px;
}
</style>