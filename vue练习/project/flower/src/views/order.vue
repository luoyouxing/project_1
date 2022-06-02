<template>
	<div>
		<zxc></zxc>
		<div class="order">
			<van-tabs v-model="active">
				<van-tab title="全部">
					<ord></ord>
				</van-tab>
				<van-tab title="待付款">
					<tbp></tbp>
				</van-tab>
				<van-tab title="待发货">
					<tbs></tbs>
				</van-tab>
				<van-tab title="待收货">
					<cog></cog>
				</van-tab>
				<van-tab title="已完成">
					<completed></completed>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Tab,
		Tabs
	} from 'vant';

	Vue.use(Tab);
	Vue.use(Tabs);
	import asd from '../components/header.vue'
	export default {
		data() {
			return {
				active: 0,
			}
		},
		created() {
			if (this.$route.params.active != undefined) {
				this.active = this.$route.params.active
				console.log(this.active)
			}
			// this.$nextTick(() => {})
		},
		components: {
			zxc: asd,
			ord: () => import("../components/goods_first.vue"),
			tbp: () => import("../components/goods_second.vue"),
			tbs: () => import("../components/goods_third.vue"),
			cog: () => import("../components/goods_fourth.vue"),
			completed: () => import("../components/goods_fifth.vue"),
		}
	}
</script>

<style>
	.order {
		position: fixed;
		top: 70px;
		bottom: 0;
		width: 750px;
	}

	.van-tab__text--ellipsis {
		height: 70px;
		line-height: 70px;
		font-size: 32px;
	}

	.van-tabs--line .van-tabs__wrap {
		height: 70px;
		border-bottom: 1px solid #eeeeee;
		position: fixed;
		top: 70px;
		right: 0;
		left: 0;
	}

	.van-tabs__content {
		position: fixed;
		top: 140px;
		overflow: scroll;
		bottom: 0;
	}
</style>
