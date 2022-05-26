<template>
	<div>
		<router-view></router-view>
		<ul class="bottom" v-if="!$route.meta.showFooter">
			<!-- <li v-for="v,i in arr" :key="i">
				<span :class="v.ref"></span>
				<router-link :to="v.id">{{v.text}}</router-link>
			</li> -->
			<router-link v-for="v,i in arr" :key="i" :to="v.id">
				<li @click="$store.state.msg=v.text" :class="$store.state.msg==v.text?'on':''"><span :class="v.ref"></span>{{v.text}}</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// meg: "首页",
				arr: [{
					id: "/",
					text: "首页",
					ref: "iconfont icon-shouye",
				}, {
					id: "/classify",
					text: "分类",
					ref: "iconfont icon-fenlei",
				}, {
					id: "/gpdc",
					text: "分销中心",
					ref: "iconfont icon-021shoutidai",
				}, {
					id: "/mine",
					text: "我的",
					ref: "iconfont icon-31wode",
				}]
			}
		},
		methods: {}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.bottom {
		width: 750px;
		height: 100px;
		font-size: 22px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0;
		background-color: white;
	}

	.bottom li {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bottom li span {
		font-size: 30px;
	}

	.on {
		color: #e37198;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	.top {
		background-color: #EEEEEE;
		width: 750px;
		/* position: fixed; */
	}

	.top_1 {
		font-size: 34px;
		color: #333333;
		width: 710px;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.top_2 {
		width: 160px;
		height:58px;
		border-radius: 40px;
		border: 1px solid #333333;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	.top_2 ul {
		list-style: none;
		width: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.top_2 li:first-child,
	.top_2 li:last-child {
		width: 7px;
		height: 7px;
		border-radius: 50px;
		background-color: #333333;
	}

	.top_2 li:nth-child(2) {
		width: 12px;
		height: 12px;
		border-radius:5px;
		background-color: #333333;
	}

	.xian {
		height:40px;
		width: 2px;
		background-color: #d0d0d0;
	}

	.yuan {
		width: 24px;
		height: 24px;
		border-radius: 50px;
		border:3px solid #333333;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.xy {
		width: 15px;
		height:15px;
		border-radius: 50px;
		background-color: #333333;
	}
</style>
