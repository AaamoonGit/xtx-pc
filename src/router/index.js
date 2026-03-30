import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from '@/views/Layout/Layout.vue'
import HomeView from '@/views/Layout/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // redirect:'/home',
      component: LayoutPage,
      children: [
        {
          // 置空设置默认二级路由
          path: '',
          component: HomeView
        },
        {
          path: '/category/:id',
          component: () => import('@/views/Layout/CategoryView.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue')
    }
  ],
  linkExactActiveClass: 'active'
  // linkActiveClass:'active'
})

export default router
