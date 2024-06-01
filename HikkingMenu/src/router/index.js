import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';

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
        component: () => import('../views/MenuByDays.vue'),
      },
      {
        path: "/products",
        component: () => import('../views/Products.vue'),
      },
      {
        path: "/schedule",
        component: () => import('../views/Schedule.vue'),
      },
    //   { path: "/cafes/:id", component: CafeView },
    ],
  });
  
  export default router;