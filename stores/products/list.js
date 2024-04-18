import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductsStore = defineStore('store', {
    state: () => ({
        isLoading: false,
        isFailed: false,
        products: [],
    }),
    getters: {
        getIsLoading: (state) => state.isLoading,
        getIsFailed: (state) => state.isFailed,
        getProducts: (state) => state.products
    },

    actions: {
        async fetchProducts() {
            this.isLoading = true;
            try {
                const res = await axios.get('http://localhost:3000/api/product_details/find_all_small_lest');
                this.products = res.data;
                this.isLoading = false;
                console.log(res.data)
            } catch (error) {
                this.isLoading = false;
                this.isFailed = true;
            }
        },
        async fetchProductsByProductId(id) {
            this.isLoading = true;
            try {
                const res = await axios.get(`http://localhost:3000/api/product_details/find_all_by_product_id/${id}`);
                this.products = res.data;
                this.isLoading = false;
                if (res.data.length === 0) {
                    this.isFailed = true;
                }
            } catch (error) {
                this.isLoading = false;
                this.isFailed = true;
            }
        }
    }
})