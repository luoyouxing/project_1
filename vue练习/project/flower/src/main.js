import Vue from 'vue'
import App from './flower.vue'
import './assets/fonts/iconfont.css'
import router from './router/index.js' //默认解析index.js文件，默认情况下import router from './router'
import store from './store'
import '@/rem/rem.js'

Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')