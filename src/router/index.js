import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import Pos from '@/components/page/Pos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Pos',
      component: Pos
    }
  ]
})
