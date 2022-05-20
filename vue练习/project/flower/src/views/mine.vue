<template>
	<div>
		<div class="top1">
			<div class="bg">
				<div class="top_1">
					<span class="en">
						<van-icon name="arrow-left" />女花亭花坊
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
				<div class="tou">
					<img src="../assets/mine/1-2.jpg">
					<span>凯乐_jackie</span>
				</div>
				<ul class="size">
					<li v-for="(v,i) in name" :key="i"><span>{{v.num}}</span><span>{{v.id}}</span></li>
				</ul>
				<div class="center1">
					<div class="center2">
						<div class="center3"><span>订单</span>
							<van-icon name="arrow" />
						</div>
						<ul>
							<li v-for="v,i in data" :key="i"><img :src="v.pic">{{v.text}}</li>
						</ul>
					</div>
					<div class="center2">
						<div class="center3"><span>我的营销</span></div>
						<ul>
							<li v-for="v,i in data_1" :key="i"><img :src="v.pic">{{v.text}}</li>
						</ul>
					</div>
					<div class="center2">
						<div class="center3"><span>我的工具</span></div>
						<ul style="width: 3.45rem;">
							<li v-for="v,i in data_2" :key="i" @click="car(i)"><img :src="v.pic">{{v.text}}</li>
						</ul>
					</div>
					<div class="xiao"><span>小程序首页</span>
						<van-icon name="arrow" />
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
		data() {
			return {

			}
		},
		methods: {
			car(i) {
				// if(i==1){
				// 	this.$router.push({
				// 		path: "/shopcar"
				// 	})
				// }
				if (this.$store.state.data_2[i].text == "购物车") {
					this.$router.push({
						path: "/shopcar",
						name: "shopcar",
						params:{
							text: this.$store.state.data_2[i].text,
						},
					})
				}
			}
		},
		created() {
			this.name = this.$store.state.name
			this.Data = this.$store.state.Data
			this.data = this.$store.state.data
			this.data_1 = this.$store.state.data_1
			this.data_2 = this.$store.state.data_2
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.top1 {
		width: 7.5rem;
		position: fixed;
		bottom: 1rem;
		top: 0;
		overflow: scroll;
		background-color: #eeeeee;
	}

	.top_1 {
		margin: auto;
	}

	.tou {
		height: 1.85rem;
		font-size: 0.32rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.tou img {
		width: 1.35rem;
		height: 1.35rem;
	}

	.size {
		height: 1.65rem;
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.size li {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.size span:first-child {
		font-size: 0.3rem;
	}

	.size span:nth-child(2) {
		font-size: 0.24rem;
	}

	.center1 {
		width: 7.1rem;
		margin: auto;
	}

	.center2 {
		background-color: #FFFFFF;
		height: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		border-top-left-radius: 0.2rem;
		border-bottom-right-radius: 0.2rem;
		margin-bottom: 0.3rem;
	}

	.center3 {
		font-size: 0.32rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.center3 span {
		padding-left: 0.2rem;
	}

	.center1 ul {
		font-size: 0.24rem;
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.center1 li {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.center1 img {
		width: 0.54rem;
		height: 0.54rem;
	}

	.van-icon {
		width: 0.8rem;
	}

	.xiao {
		width: 7.1rem;
		height: 0.9rem;
		margin: auto;
		font-size: 0.32rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		border-top-left-radius: 0.2rem;
		border-bottom-right-radius: 0.2rem;
	}

	.bg {
		background-image: url(../assets/mine/1-1.jpg);
		background-repeat: no-repeat;
		background-size: 7.5rem 4.5rem;
	}
</style>
