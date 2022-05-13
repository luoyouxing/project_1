<template>
	<div>
		<div class="home-nav">
			<!-- 导航 -->
			<van-tabs @change="onNavs">
				<van-tab v-for="item,index in navs" :key="index" :name="item.cid" :title="item.cname"></van-tab>
			</van-tabs>
			<!-- 排序 -->
			<div class="home-sort">
				<div @click="onSort" :class="{'active':isActive==0}">综合排序</div>
				<div @click="saleSort" :class="{'active':isActive==1}">销量</div>
				<div @click="priceSort" style="display: flex;">
					<div>价格</div>
					<div style="margin-left: 5px;">
						<div :class="{'active':isActive==2}" class="iconfont icon-jiantou"></div>
						<div :class="{'active':isActive==3}" class="iconfont icon-jiantouxia"></div>
					</div>
				</div>
				<div>
					<!-- 下拉菜单 -->
					<van-dropdown-menu>
						<van-dropdown-item v-model="value1" :options="option1" @change="screen" />
					</van-dropdown-menu>
				</div>
			</div>
		</div>
		<div style="height: 92px;"></div>


		<!-- 商品卡片 -->
		<van-card v-for="(item,index) in goods" :key="index" :tag="item.shopType == 1 ? '天猫':'淘宝'" :price="item.actualPrice"
			:title="item.title" :thumb="item.mainPic">

			<template #num>
				<span>30天销量：{{item.monthSales}}</span>
			</template>

		</van-card>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				navs: [], //导航数据
				goods: [], //商品数据
				cid: 6,
				value1: -1,
				option1: [{
						text: '店铺类型',
						value: -1
					},
					{
						text: '淘宝',
						value: 0
					},
					{
						text: '天猫',
						value: 1
					}
				],
				isActive: -1 //0综合排序，1销量，2价格升序，3价格降序
			}
		},
		mounted() {
			this.$axios.all([
				this.$axios.get('http://api.kudesoft.cn/tdk/category'),
				this.$axios.get('http://api.kudesoft.cn/tdk/goods', {
					params: {
						cids: this.cid
					}
				})
			]).then(
				this.$axios.spread((navRes, goodsRes) => {
					this.navs = navRes.data.data.data
					this.goods = goodsRes.data.data.data.list
				})
			)
		},
		methods: {
			onNavs(cid) { //导航切换
				this.cid = cid //点击导航的时候把一级导航的cid赋给this.cid
				this.$axios.get('http://api.kudesoft.cn/tdk/goods', {
					params: {
						cids: cid
					}
				}).then(res => {
					this.goods = res.data.data.data.list
				})
			},
			priceSort() { //价格排序
				if (this.isActive < 2) {
					this.isActive = 2
					this.goods.sort((a, b) => {
						return a.actualPrice - b.actualPrice
					})
				} else if (this.isActive == 2) {
					this.isActive = 3
					this.goods.sort((a, b) => {
						return b.actualPrice - a.actualPrice
					})
				} else if (this.isActive == 3) {
					this.isActive = 2
					this.goods.sort((a, b) => {
						return a.actualPrice - b.actualPrice
					})
				}
			},
			onSort() { //综合排序
				this.isActive = 0
				this.goods.sort((a, b) => {
					return b.shopLevel - a.shopLevel
				})
			},
			saleSort() { //销量排序
				this.isActive = 1
				this.goods.sort((a, b) => {
					return b.monthSales - a.monthSales
				})
			},
			screen(value) { //筛选
				this.isActive = -1
				this.goods = []

				if (value == -1) {
					this.$axios.get('http://api.kudesoft.cn/tdk/goods', {
						params: {
							cids: this.cid
						}
					}).then(res => {
						this.goods = res.data.data.data.list
					})
				} else {
					this.$axios.get("http://api.kudesoft.cn/tdk/goods", {
						params: {
							cids: this.cid
						}
					}).then(res => {
						let goods = res.data.data.data.list
						goods.map(item => {
							if (item.shopType == value) {
								this.goods.push(item)
							}
						})
					})
				}
			}

		}

	}
</script>

<style scoped>
	.home-nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}

	.home-sort {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: -1px;
	}

	.iconfont {
		font-size: 8px;
	}

	.active {
		color: red;
	}
</style>
