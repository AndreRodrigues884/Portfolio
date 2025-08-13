import { createRouter, createWebHistory } from 'vue-router'
import ProjectDetails from '../views/ProjectDetails.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
   { path: '/projects/:id', name: 'ProjectDetails', component: ProjectDetails }
  // outras rotas de projeto...
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
