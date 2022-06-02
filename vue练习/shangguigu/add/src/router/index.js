//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由插件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
//配置路由
export default new VueRouter({
	//配置路由
	routes: [{
		path: "/home",
		component: Home
	}, {
		path: "/search",
		component: Search
	},{
		path:"/login",
		component:()=>import ('@/pages/Login')
	},{
		path:"/register",
		component:()=>import ('@/pages/Register')
	},{//重定向，在项目运行时，访问/回到首页
		path:"/",
		redirect:"/home"
	}]
})
