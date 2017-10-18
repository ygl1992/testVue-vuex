import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi1 from '@/components/Hi1'
import Count from '@/components/Count'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/Hi1',
      component: Hi1,
      alias: '/xiaopang'
    },
    {
      path: '/Count',
      component: Count
    },
    {
      path: '*',
      component: Error
    }
  ]
})
