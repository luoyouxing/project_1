<template>
	<div>
		<div class="top">
			<div class="top_1">
				<span>女花亭花坊</span>
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
			<van-search v-model="value" shape="round" placeholder="满天星" />
		</div>

		<div class="center">
			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img v-lazy="image.pic" />
				</van-swipe-item>
			</van-swipe>
			<div class="tupian">
				<ul>
					<li v-for="(v,i) in img" :key="i" @click="change"><img :src="v.pic"><span>{{v.text}}</span></li>
				</ul>
			</div>
			<div class="huodong" @click="huodong"><img :src="require('../assets/index/10.jpg')">
			</div>
			<div class="quan">
				<!-- <img :src="require('../assets/index/11.jpg')" @click="youhui(10)">
				<img :src="require('../assets/index/12.jpg')" @click="youhui(20)"> -->
				<div v-for="(v,i) in $store.state.you" :key="i" @click="youhui(i)"><img :src="v.pic" ></div>
			</div>
			<div class="wenzi">
				<p>热卖<span></span></p>
			</div>
			<div class="gouwu">
				<ul>
					<li v-for="(v,i) in ar" :key="i"><img :src="v.pic">
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
</template>

<script>
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
				value: '',
			}
		},
		methods: {
			change() {
				this.$router.push({
					name: "liebiao"
				})
			},
			huodong(){
				this.$router.push({
					path:"/huodong"
				})
			},
			youhui(i){
				console.log(this.$store.state.you[i].pri)
				this.$router.push({
					// name:"youhui",
					path:"/youhui",
					query:{
						pri:this.$store.state.you[i].pri,
						num:this.$store.state.you[i].num,
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
	.van-search {
		background-color: #EEEEEE;
		height: 1.2rem;
	}

	.van-search .van-cell {
		height: 0.7rem;
	}

	.van-field__left-icon .van-icon {
		font-size: 0.25rem;
		line-height: 0.6rem;
	}

	.van-field__control[type=search] {
		/* 属性选择器：只对包含有中括号里面的 */
		font-size: 0.26rem;
		line-height: 0.6rem;
	}

	.van-swipe {
		height: 3rem;
	}

	.van-swipe-item img {
		height: 3rem;
		width: 7.5rem;
	}

	.van-swipe__indicator {
		width: 0.1rem;
		height: 0.1rem;
	}

	.center {
		background-color: #EEEEEE;
		width: 7.5rem;
		position: fixed;
		top: 1.8rem;
		bottom: 1rem;
		overflow: scroll;
	}

	.tupian ul {
		width: 7.5rem;
		height: 3.9rem;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: space-around;
		justify-content: center;
	}

	.tupian ul li {
		width: 1.4rem;
		height: 1.6rem;
		list-style: none;
		font-size: 0.28rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tupian ul li img {
		height: 0.9rem;
		width: 0.9rem;
	}

	.huodong {
		width: 7.5rem;
		height: 2rem;
	}

	.huodong img {
		width: 100%;
		height: 100%;
	}

	.quan {
		width: 7.5rem;
		height: 2.9rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.quan img {
		width: 3.5rem;
		height: 2.15rem;
	}

	.wenzi {
		height: 0.65rem;
		width: 7.5rem;
		font-size: 0.36rem;
		display: flex;
		justify-content: space-evenly;
	}

	.wenzi p {
		width: 7.1rem;
		position: relative;
		z-index: 1;
	}

	.wenzi p span {
		width: 0.55rem;
		height: 0.05rem;
		border-radius: 0.5rem;
		background-color: #e37198;
		display: inline-block;
		position: absolute;
		bottom: 0.2rem;
		left: 0.08rem;
		z-index: -1;
	}

	.gouwu ul {
		width: 7.5rem;
		height: 10.5rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.gouwu ul li {
		height: 5rem;
		list-style: none;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-bottom-right-radius: 0.5rem;
	}

	.gouwu ul li img {
		width: 3.45rem;
		height: 3.74rem;
	}

	.bottom_1 {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
	}

	.jia {
		height: 1.1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	#en {
		width: 0.7rem;
		height: 0.5rem;
	}

	#en span {
		font-size: 0.3rem;
		color: #e37198;
	}

	#enn {
		width: 0.35rem;
		height: 0.35rem;
		border: 0.02rem solid #e37198;
		border-radius: 0.5rem;
		display: flex;
	}

	.a1 {
		font-size: 0.32rem;
	}

	.a2 {
		font-size: 0.28rem;
		color: #e37198;
	}

	.a3 {
		font-size: 0.22rem;
		color: #999999;
	}
</style>
