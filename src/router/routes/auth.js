import LayoutAuth from '@/components/layout/LayoutAuth.vue';
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import Profile from '@/components/profile/Profile.vue';

export default {
  path: '/auth',
  component: LayoutAuth,
  children: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/profile/:username',
      component: Profile,
    },
  ],
};
