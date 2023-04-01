import {defineStore} from "pinia"
import type {TCart} from '@/types/TCart';
import type {TProduct} from "@/types/TProduct";

type  State = {
    cart: TCart
}

export const cartStore = defineStore({
    id: 'cart',
    state: (): State => {
        return {
            cart: {
                object: []
            }
        }
    },
    getters: {
        getCart({cart}): TCart {
            return cart
        },
    },
    actions: {
        addItemToCart(item: TProduct) {
            const cartItem = this.cart.object.find((el) => el.id === item.id);

            if (cartItem) {
                cartItem.count++;
                return;
            }

            this.cart.object.push({id: item.id, count: 1});
        },
        removeItemFromCart(item: TProduct) {
            const cartItem = this.cart.object.find((el) => el.id === item.id);

            if (cartItem) {
                cartItem.count--;
                if (cartItem.count === 0) {
                    this.cart.object.splice(this.cart.object.indexOf(cartItem), 1);
                }
            }
        },
        clearCart() {
            this.cart.object = [];
        },
    },
    persist: true,
});