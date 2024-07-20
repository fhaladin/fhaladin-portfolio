import { createRouter, createWebHistory } from 'vue-router'
import ViewAbout from '../views/ViewAbout.vue'
import ViewProject from '../views/ViewProject.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/project' },
    {
      path: '/about',
      name: 'about',
      component: ViewAbout
    },
    {
      path: '/project',
      name: 'project',
      component: ViewProject
    },
  ]
})

export default router
