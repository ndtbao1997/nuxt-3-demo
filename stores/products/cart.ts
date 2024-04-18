// ~/store/cart.ts
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[]
    }),
    actions: {
        addToCart(item: CartItem) {
            const cart = this.decodeCartCookie();
            cart.push(item);
            this.saveCartToCookie(cart);
            this.items = cart;
        },
        decodeCartCookie(): CartItem[] {
            const cartCookie = Cookies.get('cart');
            return cartCookie ? JSON.parse(decodeURIComponent(cartCookie)) : [];
        },
        saveCartToCookie(cart: CartItem[]) {
            Cookies.set('cart', encodeURIComponent(JSON.stringify(cart)));
        }
    }
});
