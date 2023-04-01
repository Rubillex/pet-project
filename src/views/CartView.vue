<template>
  <div>{{ cart }}</div>
</template>

<script setup>
import { cartStore } from '@/stores/cartStore';

const store = cartStore();

const cart = store.getCart;
</script>