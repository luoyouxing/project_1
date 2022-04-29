import Vue from 'vue'
import App from './app-8.vue'
import store from './store'
import router from './router/index.js'//默认解析index.js文件，默认情况下import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue() //使用事件总线

new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')
