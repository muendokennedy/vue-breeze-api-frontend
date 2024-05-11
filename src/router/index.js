import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/login',
    component: () => import("../components/Login.vue"),
    name: 'login'
  },
  {
    path: '/register',
    component: () => import("../components/Register.vue"),
    name: 'register'
  },
  {
    path: '/forgot-password',
    component: () => import("../components/Forgotpassword.vue"),
    name: 'forgotpassword'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

