import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatorView from '@/views/CreatorView.vue'
import ChartView from '@/views/ChartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/creator',
      name: 'creator',
      component: CreatorView
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartView
    }
  ]
})

export default router
