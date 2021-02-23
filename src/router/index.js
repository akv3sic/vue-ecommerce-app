import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Home")
  },
  {
    path: '/prijava',
    name: 'login',
    component: () => import("@/views/auth/Login")
  },
  {
    path: '/trgovina',
    name: 'shopHome',
    component: () => import("@/views/shop/ShopHome")
  },
  // pojedinačni proizvod
  {
    path: '/proizvod/:id/:slug',
    name: 'product',
    component: () => import("@/views/shop/Product"),
    props: true
  },
  // pojedinačna kategorija
  {
    path: '/kategorija/:id/:slug',
    name: 'category',
    component: () => import("@/views/shop/ShopCategory"),
    props: true
  },
  // about project page
  {
    path: '/projekt',
    name: 'project',
    component: () => import("@/views/Project")
  },
  // 404 redirect
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import("@/views/NotFound")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
