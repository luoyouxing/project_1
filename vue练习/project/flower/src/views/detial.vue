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
			btn(){
				Toast.success('添加成功');
			}
		},
		mounted() {
			console.log(this.$route.params)
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
		width: 7.5rem;
		text-align: center;
		position: fixed;
		top: 0.8rem;
		overflow: scroll;
		bottom: 0;
	}

	.pic img {
		width: 6rem;
		height: 6.6rem;
	}

	.det {
		margin: auto;
		width: 7rem;
		height: 1.5rem;
		display: flex;
		flex-direction: column;
		font-size: 0.28rem;
		justify-content: space-around;
		border-bottom: 0.05rem solid #f2f1ed;
	}

	.det span:nth-child(2) {
		font-size: 0.2rem;
	}

	.van-cell {
		width: 1.5rem;
		font-size: 0.28rem;
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
		width: 7.5rem;
	}

	.van-share-sheet__options {
		display: flex;
		justify-content: space-around;
	}

	.det-1 {
		width: 7rem;
		margin: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.det_3 {
		width: 7rem;
		height: 2rem;
		margin: auto;
		font-size: 0.26rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-evenly;
		border-bottom: 0.05rem solid #f2f1ed;
	}

	.card {
		width: 7rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		opacity: 0.8;
	}

	.card span:nth-child(2) {
		display: inline-block;
		width: 0.3rem;
		height: 0.3rem;
		line-height: 0.3rem;
		background-color: #ffac28;
		color: #ffffff;
		font-size: 0.24rem;
	}

	.card span:last-child {
		width: 5.9rem;
		font-size: 0.22rem;
		text-align: left;
	}

	.order {
		width: 7rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		opacity: 0.8;
	}

	.order span:nth-child(2) {
		display: inline-block;
		width: 1rem;
		height: 0.28rem;
		border: 0.01rem solid #000000;
		line-height: 0.3rem;
		font-size: 0.24rem;
	}

	.order span:last-child {
		width: 5rem;
		font-size: 0.22rem;
		text-align: left;
	}

	.shop {
		width: 7rem;
		height: 1rem;
		display: flex;
		margin: auto;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		border-bottom: 0.05rem solid #f2f1ed;
	}

	.shop span:first-child {
		font-size: 0.32rem;
	}

	.shop span:last-child {
		font-size: 0.24rem;
		opacity: 0.8;
	}
</style>
