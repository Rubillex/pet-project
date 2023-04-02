import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShowView from '@/views/ShowView.vue'
import CartView from '@/views/CartView.vue'
import CheckoutView from "@/views/CheckoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/show/:itemId',
      name: 'show',
      component: ShowView,
      meta: {
        interactions: {
          idParam: 'itemId',
        },
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    }
  ]
});

export default router
