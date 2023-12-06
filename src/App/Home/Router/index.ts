import Home from '@/App/Home/Views/Home.vue';
import NotFound from '@/App/Views/NotFound.vue';

export default [
    {
        path: '/',
        component: Home,
        name: 'Home',
        meta: {
            title: 'Homepage',
            requiresAuth: false,
        }
    },
    // 404 PAGE
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }

]