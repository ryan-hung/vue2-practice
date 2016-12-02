import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import store from './store'

import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/time-entries',
    component: TimeEntries,
    children: [
      {
        path: 'log-time',
        // 懒加载
        component: resolve => require(['./components/LogTime', resolve])
      }
    ]
  }
]

const router = new VueRouter({routes})

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App
})
