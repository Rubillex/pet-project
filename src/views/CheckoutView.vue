<template>
  <div class="checkout">
    <div class="form">
        <input class="form__input" v-model="surname" placeholder="Фамилия"/>
        <input class="form__input" v-model="name" placeholder="Имя"/>
        <input class="form__input" v-model="address" placeholder="Адрес"/>
        <input class="form__input" v-model="email" placeholder="Email" type="email"/>
        <div class="form__button" @click="final">Продолжить</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { cartStore } from "@/stores/cartStore";
import { userApiStore } from "@/stores/usersApi";
import { orderApiStore } from "@/stores/ordersApi";
import { productApiStore } from "@/stores/productsApi";
import { orderProductApiStore } from "@/stores/orderPropuctsApi";
import { useRouter } from "@/use/router";
import { productStore } from "@/stores/productStore";

const { router } = useRouter();
const name = ref('');
const surname = ref('');
const address = ref('');
const email = ref('');

const cartsStore = cartStore();
const usersApiStore = userApiStore();
const ordersApiStore = orderApiStore();
const productsApiStore = productApiStore();
const orderProductsApiStore = orderProductApiStore();

const cart = cartsStore.getCart;
const productsStore = productStore();

const allPrice = computed(() => {
    let sum = 0;
    cart.object.forEach((el) => sum += (productsStore.getProductById(el.id).price) * el.count);

    return sum;
});

const final = async () => {

    //Создаем запись в таблице users
     usersApiStore.storeUser({
        name: name.value,
        surname: surname.value,
        address: address.value,
        email: email.value,
    });
    //создаем запись в таблице orderd
    const order = await ordersApiStore.storeOrder({
        price: allPrice.value,
        surname: surname.value,
    });

    //перебираем товары в корзине
    for (const el of cart.object) {
      //поулчаем товар из таблицы
      const product = await productsApiStore.getProduct(el.id);
      //привязываем полученный товар к заказу
      await orderProductsApiStore.storeOrderProduct({
        productId: product.data.id,
        orderId: order.data.id,
      });
    }
    //очищаем корзину
    clearCart();

    router.push({name: 'home'});
};


const clearCart = () => {
  cartsStore.clearCart();
}
</script>

<style lang="scss">
.checkout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 3px 11px 11px 11px rgba(166, 166, 166, 0.12), 0 6px 10px 7px rgba(0, 0, 0, 0.07);

  padding: 40px;
  background: rgba(86, 11, 173, 0.49);
  border-radius: 20px;

  &__input {
    max-width: 290px;
    background-color: #f5f5f5;
    color: #242424;
    padding: .15rem .5rem;
    min-height: 40px;
    border-radius: 4px;
    outline: none;
    border: none;
    line-height: 1.15;
    box-shadow: 0 10px 20px -18px;

    &:focus {
      border-bottom: 2px solid #560bad;
      border-radius: 4px 4px 2px 2px;
    }

    &:hover {
      outline: 1px solid lightgrey;
    }
  }

  &__button {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    --color: #ffffff;
    font-family: inherit;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      background: var(--color);
      height: 150px;
      width: 200px;
      border-radius: 50%;
    }

    &:hover {
      color: #560bad;
    }

    &:before {
      top: 100%;
      left: 100%;
      transition: all .7s;
    }

    &:hover:before {
      top: -30px;
      left: -30px;
    }

    &:active:before {
      background: #ffffff;
      transition: background 0s;
    }
  }
}
</style>