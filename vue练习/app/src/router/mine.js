import store from '../store'

export default [{
	path: "/module",
	component: () => import('../views/second.vue'),
	beforeEnter:(to,from,next)=>{
		next(),
		console.log("局部路由守卫",store)
		console.log("到哪个页面去",to)
		console.log("从哪个页面来",from)
	}
}]
