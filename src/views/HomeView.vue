<template>
    <div v-for="product in allProducts">
      <span v-html="product.name" />
      <span v-html="product.description" />
      <span v-html="product.price" />
      <img :src="product.image" />
    </div>
</template>

<script setup lang="ts">
import { productStore } from "@/stores/productStore";
import { storeToRefs } from "pinia";

const store = productStore();

const { allProducts } = storeToRefs(store);
</script>