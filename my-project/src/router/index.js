//专门放路由的页面
import Vue from 'vue';

//
import Router from 'vue-router';

//导入页面
import Content from '../components/Content'
import Home from '../components/Home'
//安装路由
Vue.use(Router);

//配置路由
export default new Router({
    routes: [
        {
            //路由路径
            path: '/content',
            //路由名称
            name: 'content',
            //到转到组件
            component: Content
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        }
    ]
});