import Vue from 'vue'
import Router from 'vue-router'
import Channel from '@/components/Channel/Channel'
import Home from '@/components/Home/Home'
import News from '@/components/News/News'
import Shopping from '@/components/Shopping/Shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/channel',
      name: 'Channel',
      component: Channel
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
  ]
})
