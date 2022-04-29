<template>
	<div>
		<button @click="btn">点击</button>
		<span>{{num}}----{{bool}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bool:true,
				num: 123456,
			}
		},
		methods: {
			btn() {
				this.bool=false
				console.log("123456")
			}
		},
		beforeCreate() {
			console.log("vue实例化之前，自动触发", this.num)//打开页面时触发，数据未加载
		},
		created() {
			console.log("vue实例之后，自动触发",this.num)//打开页面时，输出页面加载完成的数据
		},
		beforeMount() {
			console.log("vue页面渲染挂载之前，自动触发",document.querySelector("button"))//打开页面时，找到数据，但不进行渲染
		},
		mounted() {
			console.log("vue页面渲染挂载之后，自动触发",document.querySelector("button"))//打开页面，将需要的数据渲染出来
		},
		beforeUpdate() {
			console.log("页面数据更新前，自动触发",this.num,document.querySelector("span").innerText)//数据更新后输出的修改前的数据
		},
		updated() {
			console.log("页面显示数据更新后，自动触发",this.num,document.querySelector("span").innerHTML)//数据更新后输出修改后的数据
		}
	}
</script>

<style>
</style>
