import { getRedirectUrl, RouterName } from '../types/enum/router_name'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/not_found/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: getRedirectUrl[RouterName.Dashboard],
    name: RouterName.Dashboard,
    component: HomeView,
  },
  {
    path: getRedirectUrl[RouterName.NotFound],
    name: RouterName.NotFound,
    component: NotFoundView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router