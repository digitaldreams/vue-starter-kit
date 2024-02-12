import { createRouter, createWebHistory } from 'vue-router';
import authRoutes from './routes/auth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/Error404.vue'),
    },
    {
      path: '/',
      component: () => import('@/components/home/Home.vue'),
    },
    authRoutes,
  ],
});

export default router;
