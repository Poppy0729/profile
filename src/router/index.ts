import { getRedirectUrl, RouterName } from '../types/enum/router_name'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/not_found/NotFoundView.vue'
import MobileView from '@/views/mobile/MobileView.vue'
import About from '@/views/about/AboutView.vue'
import ExperienceView from '@/views/experience/ExperienceView.vue'
import AppDetailView from '@/views/app_detail/AppDetailView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: getRedirectUrl[RouterName.Dashboard],
    name: RouterName.Dashboard,
    component: HomeView,
  },
  {
    path: getRedirectUrl[RouterName.Mobile],
    name: RouterName.Mobile,
    component: MobileView,
  },
  {
    path: getRedirectUrl[RouterName.Web],
    name: RouterName.Web,
    component: HomeView,
  },
  {
    path: getRedirectUrl[RouterName.Flutter],
    name: RouterName.Flutter,
    component: HomeView,
  },
  {
    path: getRedirectUrl[RouterName.Backend],
    name: RouterName.Backend,
    component: HomeView,
  },
  {
    path: getRedirectUrl[RouterName.Integration],
    name: RouterName.Integration,
    component: HomeView,
  },
  {
    path: getRedirectUrl[RouterName.Experience],
    name: RouterName.Experience,
    component: ExperienceView,
  },
  {
    path: getRedirectUrl[RouterName.About],
    name: RouterName.About,
    component: About,
  },
  {
    path: getRedirectUrl[RouterName.AppDetail] + '/:id',
    name: RouterName.AppDetail,
    component: AppDetailView,
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