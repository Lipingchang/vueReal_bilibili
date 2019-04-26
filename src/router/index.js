import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainScaffold from '@/components/MainScaffold/MainScaffold'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/MainScaffold',
      name: 'MainScaffold',
      component: MainScaffold
    }
  ]
})
