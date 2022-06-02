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
						<div class="center3" @click="total" ref="dingdan"><span>订单</span>
							<van-icon name="arrow" />
						</div>
						<ul>
							<li v-for="v,i in data" :key="i" @click="order(i)"><img :src="v.pic">{{v.text}}</li>
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
						<ul class="gw">
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
			total() {
				this.$router.push({
					path: "/order"
				})
				// console.log(this.$refs.dingdan.childNodes[0].innerText)
			},
			order(i) {
				this.$router.push({
					// path: "/order",
					name:"order",
					params: {
						active: i + 1
					}
				})
			},
			car(i) {
				if (this.$store.state.data_2[i].text == "购物车") {
					this.$router.push({
						path: "/shopcar",
						name: "shopcar",
						params: {
							text: this.$store.state.data_2[i].text,
						},
					})
				}else{
					this.$router.push({
						path:"/address"
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
		width: 750px;
		position: fixed;
		bottom: 100px;
		top: 0;
		overflow: scroll;
		background-color: #eeeeee;
	}

	.top_1 {
		margin: auto;
	}

	.tou {
		height: 185px;
		font-size: 32px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.tou img {
		width: 135px;
		height: 135px;
	}

	.size {
		height: 165px;
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
		font-size: 30px;
	}

	.size span:nth-child(2) {
		font-size: 24px;
	}

	.center1 {
		width: 710px;
		margin: auto;
	}

	.center2 {
		background-color: #FFFFFF;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		border-top-left-radius: 20px;
		border-bottom-right-radius: 20px;
		margin-bottom: 30px;
	}

	.center3 {
		font-size: 32px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.center3 span {
		padding-left: 20px;
	}

	.gw {
		width: 345px;
	}

	.center1 ul {
		font-size: 24px;
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
		width: 54px;
		height: 54px;
	}

	.van-icon {
		width: 80px;
	}

	.xiao {
		width: 710px;
		height: 90px;
		margin: auto;
		font-size: 32px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		border-top-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}

	.bg {
		background-image: url(../assets/mine/1-1.jpg);
		background-repeat: no-repeat;
		background-size: 750px 450px;
	}
</style>
