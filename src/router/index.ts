import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import moduleRoutes from '..//App/router'

//
let routes: Array<RouteRecordRaw> = moduleRoutes


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
