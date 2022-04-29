<template>
	<div class="box">
		<ul>
			<!-- <li v-for="v,i in arr" :key="i" :class="meg==v.text?'on':''" @click="meg=v.text"><router-link :to="v.id">{{v.text}}</router-link></li> -->
			<router-link v-for="(v,i) in arr" :key="i" :to="v.id"><li :class="meg==v.text?'on':''" @click="meg=v.text">{{v.text}}</li></router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					arr: [{
					id:"/",
					text:"首页",
				}, {
					id:"/change",
					text:"推荐",
				}, {
					id:"/add",
					text:"我的",
				}],
				meg:"首页"
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.box {
		width: 1200px;
		margin: 0 auto;
	}

	ul {
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #00FFFF;
	}

	li {
		list-style: none;
		float: left;
		width: 400px;
		text-align: center;
	}
	
	a{
		text-decoration: none;
	}
	
	.on{
		background-color: #449D44;
	}
	
	.text {
		margin: 0 auto;
		width: 100%;
		background-color: #67B168;
	}
</style>
