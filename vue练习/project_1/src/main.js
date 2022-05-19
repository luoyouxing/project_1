import Vue from 'vue'
import App from './flower.vue'
import './assets/fonts/iconfont.css'
import router from './router/index.js' //默认解析index.js文件，默认情况下import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')

const setHtmlFontSize = () => {
	const htmlDom = document.getElementsByTagName('html')[0];
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	if (htmlWidth >= 750) {
		htmlWidth = 750;
	}
	if (htmlWidth <= 375) {
		htmlWidth = 375;
	}
	htmlDom.style.fontSize = `${htmlWidth/7.5}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();
