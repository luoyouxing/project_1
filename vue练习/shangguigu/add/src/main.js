import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由：底下的写法kv一致省略v【router小写】
  //注册路由信息：当书写router时，组件身上拥有$router和$route属性
  router
}).$mount('#app')
