import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import item from '@/page/item'
import sub from '@/page/sub'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: home,
  }, {
    path: '/item',
    name: 'item',
    component: item
  }, {
    path: '/',
    redirect: '/home'
  },{
    path:'/sub',
    component:sub
  }]
})
