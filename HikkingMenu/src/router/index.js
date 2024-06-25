import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomeView.vue';

const router = createRouter({
    scrollBehavior() {
      return { top: 0, behavior: "smooth" };
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/menu",
        component: () => import('../views/MenuView.vue'),
      },
      {
        path: "/products",
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: "/schedule",
        component: () => import('../views/ProductsView.vue'),
      },
    
    ],
  });
  
  export default router;