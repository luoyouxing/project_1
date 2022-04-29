<template>
	<div>
		<!-- <ul>
			<li v-for="v,i in arr" :key="i" @click="txt=='abc'?txt='two':txt='abc'">{{v.text}}</li>
		</ul> -->
		<ul>
			<li v-for="v,i in arr" :key="i" >{{v.text}}</li>
		</ul>
		<component :is="txt"></component>
	</div>
</template>

<script>
	import def from "./components/home.vue"
	export default {
		data() {
			return {
				txt: "abc",
				arr: [{
					text: "首页"
				}, {
					text: "推荐"
				}]
			}
		},
		methods: {

		},
		components: {
			abc: def,
			two: ()=>import('./components/recom.vue')
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	ul {
		width: 200px; 
		height: 20px;
		background-color: #0086B3;
	}

	li {
		width: 100px;
		text-align: center;
		list-style: none;
		float: left;
	}
</style>
