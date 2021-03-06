// import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)

// const _import_ = file => () => import('views/' + file + '.vue')

// const router = new Router({
//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             component: _import_('home/index'),
//             redirect: 'blog/all',
//             children: [
//                 {
//                     path: 'blog/:classify',
//                     component: _import_('home/blog')
//                 }
//             ]
//         },
//         {
//             path: '/article/:id',
//             component: _import_('Article/index')
//         }
//     ]
// })

// export default
import AboutMe from '@/views/Client/AboutMe'
import Home from '@/views/Client/Home'
import ArticlesDetail from '@/views/Client/ArticlesDetail'

export const routes = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/aboutMe',
    component: AboutMe,
    name: 'aboutMe',
    meta: {
      title: '关于我'
    }
  },
  {
    path: '/articles/:id',
    component: ArticlesDetail,
    name: 'articlesDetail',
    meta: {
      title: ''
    }
  }
]
