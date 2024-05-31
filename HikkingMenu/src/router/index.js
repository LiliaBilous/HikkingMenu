import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';

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
        component: () => import('../components/views/MenuByDays.vue'),
      },
    //   { path: "/cafes/:id", component: CafeView },
    // ],
  });
  
  export default router;