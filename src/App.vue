<template>

  <div class="header">
    <div class="content">
      <img class="header__logo" src="src/assets/logo.svg" alt="image"/>
      <a class="header__logo-link" @click="goPageMain" > Vite App </a>
      <div class="header__right">
        <a @click="goPageBasket" href="">Корзина</a>
        <a @click="goPageOrdering" href="">Оформление</a>
      </div>
    </div>

  </div>

  <div class="content">
    <RouterView/>
  </div>

</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import {useRouter} from "@/use/router";


const {router} = useRouter();

const goPageMain = () => {
  router.go(-1)
};
</script>

<style scoped lang="scss">

.header {
  width: 100vw;
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 10px 5px;
  margin-bottom: 50px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  &__logo {
    height: 45px;
    float: left;

    &-link {
      font-size: 25px;
      font-weight: bold;
    }
  }

  &__right {
    float: right;
  }
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}


.content {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

</style>
