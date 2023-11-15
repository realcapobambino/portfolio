export default [
    {
        path: '/',
        component: () => import('../Views/Home.vue'),
        name: 'Home',
        meta: {
            title: 'Homepage',
            requiresAuth: false,
        }
    }
]