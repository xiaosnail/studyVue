import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'
import Login from '@/views/Login'
import List from '@/views/user/List'
import Profile from '@/views/user/Profile'
import NotFound from '@/views/NotFound'


Vue.use(Router)

export default new Router({

  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
      // props: true,
      children: [
        {
          path: '/user/profile/:id',
          name: 'Profile',
          component: Profile,
        },
        {
          path: '/user/list/:id/:name',
          name: 'List',
          component: List,
          props: true
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/goHome',
      redirect: Main,
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})