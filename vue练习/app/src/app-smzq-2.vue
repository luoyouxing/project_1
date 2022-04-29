<template>
	<div>
		<h2>当前的n值：{{n}}</h2>
		<button @click="add">点我n+1</button>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				n:0,
			}
		},
		methods:{
			add(){
				this.n++
			}
		},
		beforeCreate() {
			console.log(this)
			// debugger;
		}
	}
</script>

<style>
</style>
