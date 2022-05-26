<template>
	<div>
		<abc :title="$store.state.msg"></abc>
		<div class="center">
			<div class="center_1">
				<van-search v-model="value" shape="round" placeholder="满天星" />
			</div>
			<div class="center_2">
				<van-swipe :autoplay="3000">
					<van-swipe-item v-for="(image, index) in images" :key="index">
						<img v-lazy="image.pic" />
					</van-swipe-item>
				</van-swipe>
				<div class="tupian">
					<ul>
						<li v-for="(v,i) in img" :key="i" @click="change(i)"><img :src="v.pic"><span>{{v.text}}</span>
						</li>
					</ul>
				</div>
				<div class="huodong" @click="huodong"><img :src="require('../assets/index/10.jpg')">
				</div>
				<div class="quan">
					<!-- <img :src="require('../assets/index/11.jpg')" @click="youhui(10)">
				<img :src="require('../assets/index/12.jpg')" @click="youhui(20)"> -->
					<div v-for="(v,i) in $store.state.you" :key="i" @click="youhui(i)"><img :src="v.pic"></div>
				</div>
				<div class="wenzi">
					<p>热卖<span></span></p>
				</div>
				<div class="gouwu">
					<ul>
						<li v-for="(v,i) in ar" :key="i" @click="add(i)"><img :src="v.pic">
							<div class="bottom_1">
								<div class="jia">
									<span class="a1">{{v.text}}</span>
									<span class="a2">{{v.pirce}}</span>
									<span class="a3">{{v.num}}</span>
								</div>
								<div id="en">
									<div id="enn">
										<span class="iconfont icon-gouwuche"></span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import def from '../components/top.vue';
	import Vue from 'vue';
	import {
		Search,
		Lazyload,
		Swipe,
		SwipeItem,
	} from 'vant';

	Vue.use(Swipe);
	Vue.use(SwipeItem);
	Vue.use(Search);
	Vue.use(Lazyload);
	export default {
		data() {
			return {
				// txt:"雨花亭花坊"
				value: ""
			}
		},
		components: {
			abc: def,
		},
		methods: {
			change(i) {
				this.$router.push({
					name: "liebiao",
					params: {
						text: this.$store.state.img[i].text,
					},
				})
				console.log(this.$store.state.img[i].text)
			},
			add(i) {
				this.$router.push({
					name: "detial",
					params: {
						tx: this.$store.state.msg,
						txt: this.$store.state.ar[i]
					}
				})
				console.log(this.$store.state.ar[i].pic)
			},
			huodong() {
				this.$router.push({
					path: "/huodong"
				})
			},
			youhui(i) {
				console.log(this.$store.state.you[i].pri)
				this.$router.push({
					// name:"youhui",
					path: "/youhui",
					query: {
						pri: this.$store.state.you[i].pri,
						num: this.$store.state.you[i].num,
					}
				})
			}
		},
		created() {
			this.images = this.$store.state.images
			this.img = this.$store.state.img
			this.ar = this.$store.state.ar
			// this.you=this.$store.state.you
		}
	};
</script>

<style>
	.center {
		background-color: #EEEEEE;
		width: 750px;
	}

	.center_1 {
		position: fixed;
		top: 70px;
		width: 750px;
	}

	.center_2 {
		width: 750px;
		position: fixed;
		top: 190px;
		bottom: 100px;
		overflow: scroll;
		background-color: #EEEEEE;
	}

	.tupian ul {
		width: 750px;
		height: 390px;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: space-around;
		justify-content: center;
	}

	.tupian ul li {
		width: 140px;
		height: 160px;
		list-style: none;
		font-size: 28px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tupian ul li img {
		height: 90px;
		width:90px;
	}

	.huodong {
		width: 750px;
		height: 200px;
	}

	.huodong img {
		width: 100%;
		height: 100%;
	}

	.quan {
		width: 750px;
		height:290px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.quan img {
		width: 350px;
		height:215px;
	}

	.wenzi {
		height: 65px;
		width: 750px;
		font-size: 36px;
		display: flex;
		justify-content: space-evenly;
	}

	.wenzi p {
		width: 710px;
		position: relative;
		z-index: 1;
	}

	.wenzi p span {
		width: 55px;
		height: 5px;
		border-radius: 5px;
		background-color: #e37198;
		display: inline-block;
		position: absolute;
		bottom: 2px;
		left: 8px;
		z-index: -1;
	}

	.gouwu ul {
		width: 750px;
		height: 1050px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.gouwu ul li {
		height: 500px;
		list-style: none;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-bottom-right-radius: 50px;
	}

	.gouwu ul li img {
		width: 345px;
		height: 374px;
	}

	.bottom_1 {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
	}

	.jia {
		height: 110px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	#en {
		width: 70px;
		height: 50px;
	}

	#en span {
		font-size: 30px;
		color: #e37198;
	}

	#enn {
		width: 35px;
		height: 35px;
		border: 2px solid #e37198;
		border-radius: 50px;
		display: flex;
	}

	.a1 {
		font-size: 32px;
	}

	.a2 {
		font-size: 28px;
		color: #e37198;
	}

	.a3 {
		font-size: 22px;
		color: #999999;
	}
</style>
