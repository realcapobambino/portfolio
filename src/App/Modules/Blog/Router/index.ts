import Blog from '@/App/Modules/Blog/Views/Blog.vue'

export default [
    {
        path: '/blog',
        component: Blog,
        name: 'Blog',
        meta: {
            title: 'Blog',
            requiresAuth: false,
        }
    }
]