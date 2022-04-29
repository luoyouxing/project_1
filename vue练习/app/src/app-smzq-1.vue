<template>
	<div>
		<h2 :style="{opacity}">hello</h2>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				opacity: 1,
			}
		},
		methods: {
			
		},
		//vue完成模板解析并把真实dom元素放入页面后（挂载完毕）调用mounted
		mounted() {
			setInterval(() => {
					this.opacity = this.opacity - 0.01
					if (this.opacity <= 0) this.opacity = 1
				}, 16)
		}
	}
</script>  

<style>
</style>
