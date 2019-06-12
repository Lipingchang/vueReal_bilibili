import Vue from 'vue'
import Router from 'vue-router'
import Channel from '@/components/Channel/Channel'
import Home from '@/components/Home/Home'
import News from '@/components/News/News'
import Shopping from '@/components/Shopping/Shopping'
import zhibo from '@/components/Home/zhibo'
import tuijian from '@/components/Home/tuijian'
import remeng from '@/components/Home/remeng'
import zhuifan from '@/components/Home/zhuifan'
import yinshi from '@/components/Home/yinshi'
import senventy from '@/components/Home/senventy'
import body from '@/components/navigationBody/navigationbody'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Body',
      component: body,
      children: [
        {
          path: '/channel',
          name: 'Channel',
          component: Channel
        },
        {
          path: '/home',
          name: 'Home',
          component: Home,
          children: [
            {
              path: '直播',
              component: zhibo
            },
            {
              path: '推荐',
              component: tuijian,
            },
            {
              path: '热门',
              component: remeng,
            },
            {
              path: '追番',
              component: zhuifan,
            },
            {
              path: '影视',
              component: yinshi,
            },
            {
              path: '70年',
              component: senventy,
            }
          ]
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
        }
      ]
    },
    
  ]
})
