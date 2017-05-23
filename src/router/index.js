import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: r => require.ensure([], () => r(require('../pages/home')), 'home')
    },
    {
      path: '/home',
      component: r => require.ensure([], () => r(require('../pages/home')), 'home')
    },
    {
      path: '/item',
      component: r => require.ensure([], () => r(require('../pages/item')), 'item')
    },
    {
      path: '/score',
      component: r => require.ensure([], () => r(require('../pages/score')), 'score')
    }
  ]
})
