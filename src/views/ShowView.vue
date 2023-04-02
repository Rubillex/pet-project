<template>
  <div>
    <div class="item-block">
      <span class="item-block__name" v-html="product.name" />
      <img class="untouchable item-block__image" :src="product.image" alt="image" />
      <span class="item-block__description" v-html="product.description" />

    </div>
    <div>{{ cart }}</div>
    <button @click="addItemToCart">Добавить</button>
    <button @click="removeItemFromCart">Убрать</button>
    <button @click="clearCart">Очистить корзину</button>
  </div>
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

<style scoped lang="scss">

  .item-block {

    padding: 12px;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;


    &__name {
      font-size: 21px;
      font-weight: 600;
      color: #000;
      font-style: normal;
      margin-left: auto;
      margin-right: auto;
    }

    &__image {
      border-radius: 3px;
      width: 30%;
      height: 30%;
      margin: 25px auto;
    }

    &__description {
      margin-left: auto;
      margin-right: auto;
      font-size: 21px;
      font-weight: 300;
      color: #000;
      font-style: normal;
    }
  }

  button {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    margin: 20px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }

  button:hover {
    background-color: #ddd;
    color: black;
  }

</style>