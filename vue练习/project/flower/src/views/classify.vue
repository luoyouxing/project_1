<template>
	<div>
		<div class="top">
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
			<van-search v-model="value" shape="round" placeholder="请输入商品关键字" />
		</div>
		<div class="center">
			<ul class="daohang">
				<li v-for="(v,i) in arr" :key="i">{{v.txt}}</li>
			</ul>
			<div class="gou">
				<ul>
					<li v-for="(v,i) in shop" :key="i"><img :src="v.pic">
						<div class="center_1">
							<div class="box1">
								<span>{{v.name}}</span>
								<span>{{v.num}}</span>
							</div>
							<div class="box2">
								<span>{{v.pri}}</span>
								<div class="a">
									<span :class="v.car"></span>
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
		Icon
	} from 'vant';

	Vue.use(Icon);
	export default {
		data() {
			return {
				value: '',
			}
		},
		created() {
			this.arr=this.$store.state.arr
			this.shop=this.$store.state.shop
		}
	}
</script>

<style scoped>
	.top {
		background-color: #FFFFFF;
	}

	.van-search {
		background-color: #FFFFFF;
	}

	.en .van-icon {
		right: 0.1rem;
	}

	.daohang {
		width: 2rem;
		background-color: #FFFFFF;
		position: fixed;
		top: 1.8rem;
		bottom: 1rem;
		overflow: scroll;
	}

	.daohang li {
		width: 2rem;
		height: 0.9rem;
		font-size: 0.34rem;
		line-height: 0.9rem;
		text-align: center;
		list-style: none;
	}

	.gou {
		position: absolute;
		right: 0;
		width: 5.5rem;
	}

	.gou ul {
		width: 5.1rem;
		margin: auto;
	}

	.gou li {
		width: 5.1rem;
		height: 2rem;
		margin: 0.2rem 0;
		background-color: #FFFFFF;
		display: flex;
	}

	.gou img {
		height: 2rem;
		width: 2.1rem;
	}

	.center_1 {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.box1:first-child {
		font-size: 0.24rem;
		height: 1.1rem;
		width: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.box1 span:nth-child(2) {
		font-size: 0.2rem;
		margin-left: 0.1rem;
	}

	.box2 {
		font-size: 0.32rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #E37198;
	}

	.a {
		width: 0.45rem;
		height: 0.35rem;
	}

	.a span {
		width: 0.35rem;
		height: 0.35rem;
		border: 0.02rem solid #e37198;
		border-radius: 0.5rem;
	}

	.box2 .iconfont {
		font-size: 0.3rem;
		color: #e37198;
	}
</style>
