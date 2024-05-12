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
    path: '/dashboard',
    component: () => import("../components/Dashboard.vue"),
    name: 'dashboard'
  },
  {
    path: '/forgot-password',
    component: () => import("../components/Forgotpassword.vue"),
    name: 'forgotpassword'
  },
  {
    path: '/password-reset/:token',
    component: () => import("../components/ResetPassword.vue"),
    name: 'resetpassword'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

