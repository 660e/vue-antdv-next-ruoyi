import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('@/views/playground/index.vue'),
    },
  ],
});

export default router;
