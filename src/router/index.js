import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // outras rotas de projeto...
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
