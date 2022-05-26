<template>
	<div>
		<zxc :text="$route.params.text"></zxc>
		<div class="top-1">
			<van-search v-model="value" shape="round" placeholder="商品搜索:请输入商品关键字" />
			<div class="paixu">
				<ul>
					<li>综合<div><span class="iconfont icon-102fangxiang_xiangxia"></span></div>
					</li>
					<li>销量<div><span class="iconfont icon-102fangxiang_xiangxia"></span></div>
					</li>
					<li>价格<div><span class="iconfont icon-100fangxiang_xiangshang"></span><span
								class="iconfont icon-102fangxiang_xiangxia"></span>
						</div>
					</li>
					<li>上新时间<div><span class="iconfont icon-100fangxiang_xiangshang"></span><span
								class="iconfont icon-102fangxiang_xiangxia"></span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="center">
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
</template>

<script>
	import asd from '../components/header.vue'
	export default {
		data() {
			return {
				value: '',
			}
		},
		components: {
			zxc: asd
		},
		created() {
			this.ar = this.$store.state.ar
		}
	}
</script>

<style scoped>
	.top {
		background-color: #FFFFFF;
	}

	.top-1 {
		position: fixed;
		top: 70px;
	}

	.van-search {
		background-color: #FFFFFF;
	}

	.paixu ul {
		list-style: none;
		width: 750px;
		height: 70px;
		font-size: 30px;
		/* line-height: 0.7rem; */
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		align-items: center;
	}

	.paixu li {
		height: 35px;
		display: flex;
		align-items: center;
	}

	.paixu div {
		margin-left: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.paixu div span {
		font-size: 16px;
		color: #9f9f9f;
	}

	.center {
		position: fixed;
		overflow: scroll;
		top: 250px;
		bottom: 0;
	}

	.center ul {
		width: 750px;
		height: 1050px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.center ul li {
		height: 500px;
		list-style: none;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-bottom-right-radius: 50px;
	}

	.center ul li img {
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
