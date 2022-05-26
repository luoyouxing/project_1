<template>
	<div>
		<abc :title="$store.state.msg"></abc>
		<div class="center">
			<div class="center_1">
				<van-search v-model="value" shape="round" placeholder="请输入商品关键字" />
			</div>
			<div class="center_2">
				<ul class="daohang">
					<li v-for="(v,i) in $store.state.arr" :key="i" @click="change(i)" :class="text==v.txt?'on':''">
						{{v.txt}}</li>
				</ul>
				<div class="gou" @scroll="top_box">
					<div v-for="(v,i) in $store.state.arr" :key="i" class="gou_box">
						<ul>
							<li v-for="(o,n) in shop[i]" :key="n"><img :src="o.pic">
								<div class="cent_1">
									<div class="box1">
										<span>{{o.name}}</span>
										<span>{{o.num}}</span>
									</div>
									<div class="box2">
										<span>{{o.pri}}</span>
										<div class="a">
											<span :class="o.car"></span>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import def from '../components/top.vue';
	import Vue from 'vue';
	import {
		Icon,
		Search,
	} from 'vant';

	Vue.use(Icon);
	Vue.use(Search);
	export default {
		data() {
			return {
				top: [],
				value: '',
				text: "鲜花"
			}
		},
		components: {
			abc: def,
		},
		created() {
			// this.arr = this.$store.state.arr
			this.shop = this.$store.state.shop
		},
		mounted() {
			this.top = []
			let box = document.getElementsByClassName("gou_box")
			for (let i = 0; i < box.length; i++) {
				this.top.push(box[i].offsetTop)
			}
			console.log(this.top)
		},
		methods: {
			change(i) {
				// this.text = this.$store.state.arr[i].txt
				let gou = document.getElementsByClassName("gou")[0]
				gou.scrollTo({
					top: this.top[i],
					behavior: 'smooth'
				})
				// console.log(this.top[i])
			},
			top_box(e) {
				// let _this=this
				// this.top.map(function(v,i){
				// 	if(e.target.scrollTop+20>=v){
				// 		_this.text = _this.$store.state.arr[i].txt
				// 	}
				// })
				this.top.map((v, i) => {
					if (e.target.scrollTop + 20 >= v) {
						this.text = this.$store.state.arr[i].txt
					}
				})
			}
		},

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
		right: 10px;
	}

	.daohang {
		width: 200px;
		background-color: #FFFFFF;
		position: fixed;
		top: 190px;
		bottom: 100px;
		overflow: scroll;
		color: #aeaeae;
	}

	.on {
		background-color: #f4f4f4;
		color: #000000;
	}

	.daohang li {
		width: 200px;
		height: 90px;
		font-size: 34px;
		line-height: 90px;
		text-align: center;
		list-style: none;
	}

	.gou {
		position: fixed;
		top: 190px;
		right: 0;
		bottom: 100px;
		overflow: scroll;
		width: 550px;
	}

	.gou_box {}

	.gou ul {
		width: 510px;
		margin: auto;
	}

	.gou li {
		width: 510px;
		height: 200px;
		margin: 20px 0;
		background-color: #FFFFFF;
		display: flex;
	}

	.gou img {
		height: 200px;
		width: 210px;
	}

	.cent_1 {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.box1:first-child {
		font-size: 24px;
		height: 110px;
		width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.box1 span:nth-child(2) {
		font-size: 20px;
		margin-left: 10px;
	}

	.box2 {
		font-size: 32px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #E37198;
	}

	.a {
		width: 45px;
		height: 35px;
	}

	.a span {
		width: 35px;
		height: 35px;
		border: 2px solid #e37198;
		border-radius: 50px;
	}

	.box2 .iconfont {
		font-size: 30px;
		color: #e37198;
	}
</style>
