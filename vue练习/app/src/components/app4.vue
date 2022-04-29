<template>
	<div class="on">
		<button @click="message">子传父</button>
		<b ref="box">第一个组件（vue不推荐Dom操作，推荐使用ref命名）</b>
		<input type="text" v-model="meg">
		{{meg}}--{{asd}}--{{zxc}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				meg: "测试",
				child: "子组件数据11"
			}
		},
		// props: {
		// 	asd: {
		// 		type: Number,
		// 		required: true
		// 	},
		// 	zxc: {
		// 		type: String,
		// 		required: false,
		// 		default: "默认数据"
		// 	}
		// },
		methods: {
			message() {
				// 创建自定义xy事件并携this.child数据
				this.$emit("xy", this.child)
			}
		},
		props: ["asd", "zxc"],
		mounted(){
			this.message()//调用方法里面的message执行
			// 在事件总线上创建自定义mn事件并携this.child数据
			this.$bus.$emit("mn",this.child)
		},
		activated() {
			console.log("页面显示")
		},
		deactivated() {
			console.log("页面隐藏")
		},
	}
</script>

<style scoped>
	.on {
		background-color: #00FFFF !important;
	}
</style>
