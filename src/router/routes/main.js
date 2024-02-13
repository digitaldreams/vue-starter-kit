import LayoutAuth from '@/components/layout/LayoutAuth.vue';
import Services from '@/views/service/Services.vue';
import Portfolios from '@/views/portfolio/Portfolios.vue';

export default {
    path: '/',
    component: LayoutAuth,
    children: [
        {
            path: '/services',
            component: Services
        },
        {
            path: '/portfolios',
            component: Portfolios
        }
        
    ]
}