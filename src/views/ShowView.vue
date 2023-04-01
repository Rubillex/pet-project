<template>
  <div>{{ product }}</div>
  <div>{{ cart }}</div>
  <button @click="addItemToCart">Добавить</button>
  <button @click="removeItemFromCart">Убрать</button>
  <button @click="clearCart">Очистить корзину</button>
</template>

<script setup>
import { useRouter } from '@/use/router';
import { computed } from 'vue';
import { productStore } from '@/stores/productStore';
import { cartStore } from '@/stores/cartStore';

const { router  } = useRouter();

const itemId = computed(() => parseInt(router.currentRoute.value.params.itemId));
const productsStore = productStore();

const product = productsStore.getProductById(itemId.value);

const cartsStore = cartStore();

const cart = cartsStore.getCart;

const addItemToCart = () => {
  cartsStore.addItemToCart(product);
};

const removeItemFromCart = () => {
  cartsStore.removeItemFromCart(product);
};

const clearCart = () => {
  cartsStore.clearCart();
}
</script>
