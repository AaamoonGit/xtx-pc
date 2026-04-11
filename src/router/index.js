import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from '@/views/Layout/Layout.vue'
import HomeView from '@/views/Layout/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
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
        },
        {
          path: '/category/sub/:id',
          component: () =>
            import('@/views/Layout/components/SubCategoryComponents/index.vue')
        },
        {
          path: '/category/detail/:id',
          component: () =>
            import('@/views/Layout/components/GoodDetail/index.vue')
        },
        {
          path: '/cart',
          component: () => import('@/views/Layout/MyCart.vue')
        },
        {
          path: '/checkout',
          component: () => import('@/views/Layout/CheckOut.vue')
        },
        {
          path: '/pay/:orderId',
          component: () => import('@/views/Layout/Pay.vue')
        },
        {
          path: '/payresult',
          component: () => import('@/views/Layout/PayResult.vue')
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
