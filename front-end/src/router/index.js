import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home/index')

import TopCategory from '@/views/category/index'
import SubCategory from '@/views/category/sub'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      { // 一级分类
        path: '/category/:id',
        component: TopCategory
      },
      { // 二级分类
        path: '/category/sub/:id',
        component: SubCategory
      }
    ]
  }
]

const router = createRouter({
  // 使用hash路由模式
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { left: 0, top: 0 }
  }
})

export default router
