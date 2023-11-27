export default [
    {
        path: '/login',
        component: () => import('../Views/Login.vue'),
        name: 'Login',
        meta: {
            requiresAuth: false,
            strictNoAuth: true,
            title: 'Home',
        },
    },
];