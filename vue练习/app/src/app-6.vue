<template>
	<div>
		<!-- 
		状态管理vuex（https://vuex.vuejs.org/zh/）
		用于管理数据和状态
		使用步骤：（注意版本问题）
		1 安装vuex（n为版本号）
		npm install vuex@n -s
		2 配置store/index.js文件
		3 配置main.js文件
		4 页面中，通过$store调用vuex数据 
		-->
		{{$store.state.bool}}
		<ul>
			<li v-for="v in nav" :key="v.tit">{{v.tit}}</li>
		</ul>
		<hr>
		<h3>新闻：</h3><br>
		<ul>
			<li v-for="v in $store.state.news" :key="v.tit">{{v.tit}}--{{v.time}}</li>
		</ul>
		<hr>
		<h3>热门新闻：</h3>（getters做属性引用）<br>
		<ul>
			<li v-for="v in $store.getters.time" :key="v.tit">{{v.tit}}--{{v.time}}</li>
		</ul>
		<hr>
		<h3>推荐新闻：</h3>（getters做函数引用）<br>
		<ul>
			<li v-for="v in $store.getters.tit('1111')" :key="v.tit">{{v.tit}}--{{v.time}}</li>
		</ul>
		<hr>
		<button @click="add">同步方法</button>
		<button @click="jia">异步方法</button>
		<hr >
		<span v-if="$store.state.bool">123456</span><br>
		<button @click="btn">点击切换</button>
		<hr >
		<h2>{{$store.state.abc.num}}</h2>
		<ul>
			<li v-for="v in $store.state.abc.arr" :key="v.name">{{v.name}}{{v.age}}</li>
		</ul>
		<button @click="btns">点击修改</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nav: [],
			}
		},
		created() {
			console.log(this.$store.state.navlist) //调用vuex里面的数据
			this.nav = this.$store.state.navlist //dom未渲染前，把数据加载进去（赋址）
		},
		methods:{
			add(){
				this.$store.commit("change",false)
				//调用vuex中的mutations里面的同步 方法，修改其中的数据
			},
			jia(){
				this.$store.dispatch("changes",7777)
				//调用vuex中actions里面的异步方法，修改其中的数据
			},
			btn(){
				this.$store.state.bool=!this.$store.state.bool
			},
			btns(){
				this.$store.dispatch("bto",20)
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	ul {
		list-style: none;
	}
</style>
