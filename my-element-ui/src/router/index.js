import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'
import Login from '@/views/Login'
import List from '@/views/user/List'
import Profile from '@/views/user/Profile'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/user/profile/:id',
          name: Profile,
          component: Profile,
        },
        {
          path: '/user/list',
          component: List,
          props: ['id']
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})