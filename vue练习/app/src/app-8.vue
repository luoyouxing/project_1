<template>
	<div>
		<router-link to="/module">路由模块化</router-link>
		<button @click="btn">事件跳转</button>
		<router-link to="/adds">新增路由</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		methods: {
			btn() {
				// this.$router.push({
				// 	name:"three"
				// })


				// this.$router.addRoute({//新增一级路由
				// 	path: "/adds",
				// 	component: () => import('./views/thired.vue')
				// })

				this.$router.addRoute("firstone",{ //新增子级路由
					path: "/adds",
					component: () => import('./views/thired.vue')
				})
				
				// this.$router.go(-1)//页面回退
				// this.$router.forward()//页面前进
				// this.$router.back()//页面回退
			}
		}
	}
</script>

<style>
</style>
