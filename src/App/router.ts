import NotFound from './Views/NotFound.vue'
import HomeRouter from './Home/Router'

const routes = [
    // 404 PAGE
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]


export default [
    ...HomeRouter,
]