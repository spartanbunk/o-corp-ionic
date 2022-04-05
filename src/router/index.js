import { createRouter, createWebHistory } from '@ionic/vue-router';

import EmployeesPage from '../pages/EmployeesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/employees'
  },
  {
    path: '/employees',
    component: EmployeesPage
  },
  {
    path: '/employees/:id',
    component: () => import('../pages/EmployeeDetailsPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
