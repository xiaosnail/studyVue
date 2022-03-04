// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由
import router from './router'
//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
//安装路由
Vue.use(router);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
