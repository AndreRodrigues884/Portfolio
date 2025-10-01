import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import About from '../views/AboutMe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/aboutme',
    name: 'About',
    component: About
  }
  // outras rotas de projeto...
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
