import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import About from '../views/AboutMe.vue'
import ProjectDetailsPage from '../views/ProjectDetailsPage.vue'

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
    path: '/projects/:slug',
    name: 'ProjectDetails',
    component: ProjectDetailsPage
  },
  {
    path: '/aboutme',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(), // ✅ Usar hash history
  routes,
})

export default router
