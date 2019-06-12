// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mockjs from 'mockjs'


import MockR from './api/mock'
import axios from 'axios'
import myapi from './api'

Vue.config.productionTip = false
Vue.prototype.$Random = Mockjs.Random

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.kingofsingledog.club/fakebilibili/api1/' // 设置默认请求的url
Vue.prototype.$http = axios
Vue.prototype.$myapi = myapi

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
