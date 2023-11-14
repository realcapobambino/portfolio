export default [
    {
        path: '/',
        component: () => import('./Views/Home.vue'),
        name: 'Home',
        meta: {
            requiresAuth: false,
            title: 'Home'
        }
    }
]