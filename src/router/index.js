import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/home/Home') //异步组件加载
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/components/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/components/detail/Detail')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})