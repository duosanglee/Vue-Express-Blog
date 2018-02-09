import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/views/AboutMe'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: AboutMe
    }
  ]
})
