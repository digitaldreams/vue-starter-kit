import LayoutAuth from '@/components/layout/LayoutAuth.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import Profile from '@/views/user/Profile.vue';

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
