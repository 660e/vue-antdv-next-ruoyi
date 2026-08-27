export default {
  path: '/',
  redirect: { name: 'home' },
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: 'login',
      name: 'login',
      component: () => import('@/login/index.vue'),
      meta: {
        title: '登录',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue'),
    },
  ],
};
