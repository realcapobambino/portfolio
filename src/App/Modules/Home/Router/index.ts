import Home from '@/App/Modules/Home/Views/Home.vue';

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

]