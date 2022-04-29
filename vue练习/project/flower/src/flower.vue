<template>
	<div>
		<router-view></router-view>
		<ul class="bottom">
			<!-- <li v-for="v,i in arr" :key="i">
				<span :class="v.ref"></span>
				<router-link :to="v.id">{{v.text}}</router-link>
			</li> -->
			<router-link v-for="v,i in arr" :key="i" :to="v.id">
				<li @click="meg=v.text" :class="meg==v.text?'on':''"><span :class="v.ref"></span>{{v.text}}</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				meg: "首页",
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
		width: 7.5rem;
		height: 1rem;
		font-size: 0.22rem;
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
		font-size: 0.3rem;
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
		width: 7.5rem;
		position: fixed;
	}

	.top_1 {
		font-size: 0.34rem;
		color: #333333;
		width: 7.1rem;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.top_2 {
		width: 1.6rem;
		height: 0.58rem;
		border-radius: 0.4rem;
		border: 0.01rem solid #333333;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	.top_2 ul {
		list-style: none;
		width: 0.4rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.top_2 li:first-child,
	.top_2 li:last-child {
		width: 0.07rem;
		height: 0.07rem;
		border-radius: 0.5rem;
		background-color: #333333;
	}

	.top_2 li:nth-child(2) {
		width: 0.12rem;
		height: 0.12rem;
		border-radius: 0.5rem;
		background-color: #333333;
	}

	.xian {
		height: 0.4rem;
		width: 0.02rem;
		background-color: #d0d0d0;
	}

	.yuan {
		width: 0.24rem;
		height: 0.24rem;
		border-radius: 0.5rem;
		border: 0.03rem solid #333333;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.xy {
		width: 0.15rem;
		height: 0.15rem;
		border-radius: 0.5rem;
		background-color: #333333;
	}
</style>
