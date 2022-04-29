<template>
	<div>
		<button @click="message">点击</button>
		<span>123</span>
		{{asd}}
		<div>
			<slot name="a" ></slot>
			<slot name="b" ></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				child: "子组件数据11",
				meg:"123456"
			}
		},
		props: ['asd'],
		methods:{
			message(){
				this.$emit("xy",this.child)
			}
		}
	}
</script>

<style>
</style>
