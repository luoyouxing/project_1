import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: "/",
		component: index,
	},{
		path: "/classify",
		component: ()=>import('../views/classify.vue'),
	},{
		path: "/gpdc",
		component: ()=>import('../views/gpdc.vue'),
	},{
		path: "/mine",
		component: ()=>import('../views/mine.vue'),
	},{
		path:"/lie",
		name:"liebiao",
		component:()=>import('../views/liebiao.vue'),
		meta:{
			showFooter:true
		}
	},{
		path:"/huodong",
		component:()=>import('../views/huodong.vue'),
		meta:{
			showFooter:true
		}
	},{
		path:"/youhui",
		name:"youhui",
		component:()=>import('../views/youhui.vue'),
		meta:{
			showFooter:true
		}
	}],
	mode: "history" //修改路由模式变history模式
})
