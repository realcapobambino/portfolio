export default [
    {
        path: '/blog',
        component: () => import('../Views/Blog.vue'),
        name: 'Blog',
        meta: {
            title: 'Blog',
            requiresAuth: false,
        }
    }
]