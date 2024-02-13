import { createRouter, createWebHistory } from 'vue-router';
import authRoutes from './routes/auth';
import mainRoutes from './routes/main';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/Error404.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
    },
    authRoutes,
    mainRoutes
  ],
});

export default router;
