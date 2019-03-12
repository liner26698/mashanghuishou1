import Vue from 'vue'
import Router from 'vue-router'


import login from '@/components/login' // 登录页面 
const Index = r => require.ensure([], () => r(require('@/components/index/index')), 'Index');


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index', 
      // component: resolve => require(['@/components/index/index'], resolve)  // 使用按需加载
      component:Index
    },
  ] // routes end.
})
 