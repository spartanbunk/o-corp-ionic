import { createRouter, createWebHistory } from '@ionic/vue-router';

import EmployeesPage from '../pages/EmployeesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/employees'
  },
  {
    path: '/employees',
    name: 'Employees',
    component: EmployeesPage //loads everytime
  },
  {
    path: '/employees/:nid',
    name: 'Employee Details',
    component: () => import('../pages/EmployeeDetailsPage.vue'), //loads when called
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
