import vue from 'vue'

import router from 'vue-router'
import Login from '../view/Login'
import Home from '../components/HelloWorld'
vue.use(router);



export default new router({
    routes: [
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/Home',
            name: 'home',
            component: Home,
        }
    ]
})