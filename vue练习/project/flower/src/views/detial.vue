<template>
	<div>
		<zxc :text="$route.params.tx"></zxc>
		<div class="pic">
			<img :src="$route.params.txt.pic">
			<div class="det">
				<div class="det_1">
					<div class="det_2">
						<span>{{$route.params.txt.text}}</span>
						<span>{{$route.params.txt.num}}</span>
					</div>
					<div class="share">
						<van-cell title="分享" @click="showShare = true" />
						<van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
					</div>
				</div>
				<div class="det-1">
					<span>{{$route.params.txt.pirce}}</span>
					<button type="button" @click="btn">添加购物车</button>
				</div>
			</div>
			<div class="det_3">
				<div class="card">
					<span>活动</span>
					<span>赠</span>
					<span>满一元赠送精美贺卡一张（需备注贺卡内容）</span>
				</div>
				<div class="order">
					<span>配送</span>
					<span>商家自配</span>
					<span>现在下单，预计最快约15:00送达</span>
				</div>
			</div>
			<div class="shop">
				<span>商品详情</span>
				<span>重量 300克</span>
			</div>
		</div>
	</div>
</template>

<script>
	import asd from '../components/header.vue';
	import Vue from 'vue';
	import {
		ShareSheet,
		Cell,
		Toast
	} from 'vant';

	Vue.use(ShareSheet);
	Vue.use(Cell);
	Vue.use(Toast);
	export default {
		data() {
			return {
				arr: [],
				showShare: false,
				options: [
					[{
							name: '微信',
							icon: 'wechat'
						},
						{
							name: '朋友圈',
							icon: 'wechat-moments'
						},
						{
							name: '微博',
							icon: 'weibo'
						},
						{
							name: 'QQ',
							icon: 'qq'
						},
					],
					[{
							name: '复制链接',
							icon: 'link'
						},
						{
							name: '分享海报',
							icon: 'poster'
						},
						{
							name: '二维码',
							icon: 'qrcode'
						},
						{
							name: '小程序码',
							icon: 'weapp-qrcode'
						},
					],
				],
			}
		},
		methods: {
			onSelect(option) {
				Toast(option.name);
				this.showShare = false;
			},
			btn() {
				let obj = {
					number:1,
					num: this.$route.params.txt.num,
					pic: this.$route.params.txt.pic,
					text: this.$route.params.txt.text,
					pirce: this.$route.params.txt.pirce,
				}
				if (localStorage.getItem("shop") != null) {
					this.arr = JSON.parse(localStorage.getItem("shop")) //把json字符串转换成对应的数组或对象
				}
				var bool = this.arr.some(function(v) {
					console.log(v)
					return v.pic == obj.pic
				})
				
				if (bool) {
					var res = this.arr.findIndex(function(n) {
						return n.pic == obj.pic
					})
					this.arr[res].number++
				} else {
					this.arr.push(obj)
				}
				console.log(this.arr)
				// this.arr.push(obj)
				localStorage.setItem("shop", JSON.stringify(this.arr))
				Toast.success('添加成功');
			}
		},
		mounted() {
			// console.log(this.$route.params)
		},
		components: {
			zxc: asd
		}
	}
</script>

<style scoped>
	.top {
		background-color: #FFFFFF;
	}

	.pic {
		width: 750px;
		text-align: center;
		position: fixed;
		top: 80px;
		overflow: scroll;
		bottom: 0;
	}

	.pic img {
		width: 600px;
		height: 660px;
	}

	.det {
		margin: auto;
		width: 700px;
		height: 150px;
		display: flex;
		flex-direction: column;
		font-size: 28px;
		justify-content: space-around;
		border-bottom: 5px solid #f2f1ed;
	}

	.det span:nth-child(2) {
		font-size: 2px;
	}

	.van-cell {
		width: 150px;
		font-size: 28px;
	}

	.det_1 {
		display: flex;
		justify-content: space-between;
	}

	.det_2 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.van-popup--bottom {
		width: 750px;
	}

	.van-share-sheet__options {
		display: flex;
		justify-content: space-around;
	}

	.det-1 {
		width: 700px;
		margin: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.det_3 {
		width: 700px;
		height: 200px;
		margin: auto;
		font-size: 26pxm;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-evenly;
		border-bottom: 5px solid #f2f1ed;
	}

	.card {
		width: 700px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		opacity: 0.8;
	}

	.card span:nth-child(2) {
		display: inline-block;
		width: 30px;
		height: 30px;
		line-height: 30px;
		background-color: #ffac28;
		color: #ffffff;
		font-size: 24px;
	}

	.card span:last-child {
		width: 590px;
		font-size: 22px;
		text-align: left;
	}

	.order {
		width: 700px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		opacity: 0.8;
	}

	.order span:nth-child(2) {
		display: inline-block;
		width: 100px;
		height: 28px;
		border: 1px solid #000000;
		line-height: 30px;
		font-size: 24px;
	}

	.order span:last-child {
		width: 500px;
		font-size: 22px;
		text-align: left;
	}

	.shop {
		width: 700px;
		height: 100px;
		display: flex;
		margin: auto;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		border-bottom: 5px solid #f2f1ed;
	}

	.shop span:first-child {
		font-size: 32px;
	}

	.shop span:last-child {
		font-size: 24px;
		opacity: 0.8;
	}
</style>
