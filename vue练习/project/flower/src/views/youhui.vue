<template>
	<div>
		<div class="top">
			<div class="top_1">
				<span @click="btn">
					<van-icon name="arrow-left" />{{$route.query.pri}}减{{$route.query.num}}
				</span>
				<div class="top_2">
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<div class="xian"></div>
					<div class="yuan">
						<div class="xy"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="cen">
			<div class="cen_1">
				<div class="cen_2">
					<span>{{$route.query.num}}<span>元</span></span>
					<button type="button">点击领取</button>
				</div>
				<div class="cen_3">
					<div class="cen_4">
						<span>满{{$route.query.pri}}元可用</span>
						<span>有效期2019.3-2019-12</span>
					</div>
					<div class="cen_4">
						<span>优惠券详情</span>
						<span>满{{$route.query.pri}}元减{{$route.query.num}}元，请在有效期内使用，逾期无效</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Icon
	} from 'vant';

	Vue.use(Icon);
	export default {
		mounted(){
			console.log(this.$route.query)
		},
		methods: {
			btn() {
				this.$router.push({
					path: "/",
				})
			}
		}
	}
</script>

<style scoped>
	.top {
		background-color: #FFFFFF;
	}

	.cen {
		width: 7.5rem;
		background-color: #eeeeee;
		position: absolute;
		top: 0.62rem;
		bottom: 0rem;
		background-image: url(../assets/index/2.png);
		background-size: 7.1rem 98%;
		background-repeat: no-repeat;
		/* background-attachment: fixed; */
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* .cen_1 {
		width: 7.1rem;
		margin-top: 3rem;
	} */

	.cen_2 {
		height: 3.8rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.cen_2 span{
		font-size: 2rem;
		color: #e37198;
	}
	
	.cen_2 span span{
		font-size: 0.5rem;
	}
	
	.cen_2 button{
		height: 0.8rem;
		width: 3rem;
		border: none;
		font-size: 0.45rem;
		color: #FFFFFF;
		border-radius: 0.5rem;
		background-color: #E37198;
	}

	.cen_3 {
		height: 3.1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.cen_4 {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.cen_4 span:first-child {
		font-size: 0.34rem;
		color: #e37198;
	}

	.cen_4 span:last-child {
		font-size: 0.3rem;
	}
</style>
