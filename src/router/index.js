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
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Se houver posição guardada (ex: voltar no histórico), usa-a
    if (savedPosition) {
      return { top: 0 }
    } else {
      return { top: 0 }
    }
  }
})

export default router
