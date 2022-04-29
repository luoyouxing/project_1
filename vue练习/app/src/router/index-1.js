import Vue from 'vue'
import Router from 'vue-router'
import one from '../views/index-1.vue'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:"/",
			component:one
		},
		{
			path:"/change",
			component:()=>import('../views/index-2.vue')
		},
		{
			path:"/add",
			component:()=>import('../views/index-3.vue')
		}
	],
	mode:"history"//修改路由模式变history模式
})