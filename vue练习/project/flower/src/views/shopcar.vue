<template>
	<div>
		<zxc :text="$route.params.text"></zxc>
		<van-checkbox-group v-model="result" ref="checkboxGroup">
			<div v-for="v,i in arr" :key="i" class="card">
				<van-checkbox :name="i" @click="check(i)" ref="checke"></van-checkbox>
				<van-card :price="(v.pirce.match(/\d/ig).join('')/100).toFixed(2)" :desc="v.num" :title="v.text"
					:thumb="v.pic" />
				<van-stepper @plus="plus(i)" @minus="minus(i)" ref="num" />
			</div>
		</van-checkbox-group>
		<div class="btn">
			<div class="btn_1">
				<van-checkbox v-model="checked" type="primary" @click="checkAll"></van-checkbox>
				<van-icon name="delete-o" @click="del" />
			</div>
			<div class="btn_2">
				<span>合计:</span>
				<span ref="price">￥0.00</span>
				<span>结算</span>
			</div>
		</div>
	</div>
</template>

<script>
	import asd from '../components/header.vue'
	import Vue from 'vue';
	import {
		Card,
		Stepper,
		Checkbox,
		CheckboxGroup,
		Button,
		Icon
	} from 'vant';

	Vue.use(Card);
	Vue.use(Stepper);
	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	Vue.use(Button);
	Vue.use(Icon);
	export default {
		data() {
			return {
				arr: [],
				result: [],
				checked: false,
				ar: [],
			}
		},
		created() {
			this.arr = JSON.parse(localStorage.getItem("shop"))
			// console.log(this.arr[0].number)
			this.$nextTick(() => { //$nextTick防止created渲染加载未完成
				for (let i = 0; i < this.arr.length; i++) {
					this.$refs.num[i].currentValue = this.arr[i].number
					this.ar.push(this.$refs['checke'][i].checked)
				}
				// console.log(this.ar)
			})
			// console.log((this.arr[0].pirce.match(/\d/ig).join("") / 100).toFixed(2))输出本地存储中存入的价格，match取数字转成字符串
		},
		methods: {
			number(i) { //计算商品数量，存入本地存储
				this.arr[i].number = this.$refs.num[i].currentValue
				localStorage.setItem("shop", JSON.stringify(this.arr))
			},
			price() { //计算总价
				let total = 0
				for (let i = 0; i < this.$refs['checke'].length; i++) {
					if (this.$refs['checke'][i].checked == true) {
						total += (this.arr[i].pirce.match(/\d/ig).join('') / 100) * this.arr[i].number
					}
				}
				this.$refs.price.innerText = "￥" + total.toFixed(2)
			},
			checkAll() { //全选，反选
				this.$refs.checkboxGroup.toggleAll(this.checked);
				// console.log(this.checked)
				// console.log(this.$refs['checke'])
				for (let i = 0; i < this.ar.length; i++) {
					this.ar[i] = !this.$refs['checke'][i].checked
				}
				// console.log(!this.$refs['checke'][0].checked)
				// console.log(this.ar)
				let total = 0
				for (let i = 0; i < this.ar.length; i++) {
					if (this.ar[i] == true) {
						total += (this.arr[i].pirce.match(/\d/ig).join('') / 100) * this.arr[i].number
					}
				}
				this.$refs.price.innerText = "￥" + total.toFixed(2)
			},
			plus(i) {
				// console.log(this.$refs.num[0].currentValue)使用ref输出步进器中input里面的值
				this.number(i)
				this.price()
			},
			minus(i) {
				this.number(i)
				this.price()
			},
			check(i) {
				// console.log(this.$refs['checke'][i].checked);输出选中时当前商品卡的checked的值
				console.log(i)
				this.price()
				// console.log(this.$refs.price.innerText)输出计算完成时总价的值
				this.ar[i] = this.$refs['checke'][i].checked
				// console.log(this.ar)
				var bool = this.ar.some(function(a) {
					// console.log(a)
					return a == false
				})
				bool ? this.checked = false : this.checked = true;
				console.log(this.ar)
			},
			del() {
				let ann = []
				let an = []
				for (let i = 0; i < this.ar.length; i++) {
					if (this.ar[i] == true) {
						ann.push(this.arr[i])
						an.push(this.ar[i])
					}
				}
				for (let i =ann.length-1; i >=0; i--) {
					var res = this.arr.findIndex(function(v) {
						return v == ann[i]
					})
					// console.log(res,i)
					this.arr.splice(res, 1)
					this.ar.splice(i,1)
					localStorage.setItem("shop", JSON.stringify(this.arr))
				}
				// console.log(this.arr)
				// for (let i = 0; i < an.length; i++) {
				// 	var re=this.ar.findIndex(function(v){
				// 		return v==an[i]
				// 	})
				// 	console.log(re)
				// 	console.log(this.ar[re])
				// 	this.ar.splice(re,1)
				// 	an.splice(i,1)
				// }
				for (let ind = 0; ind < this.arr.length; ind++) {
					this.$refs['checke'][ind].checked = false
				}
				this.$refs.price.innerText = "￥" + 0.00
				console.log(this.ar)
				if(this.ar.length==0){
					this.checked=false
				}
			}
		},
		components: {
			zxc: asd
		}
	}
</script>

<style>
	.van-checkbox-group {
		position: fixed;
		top: 70px;
		bottom: 100px;
		width: 750px;
		background-color: #eeeeee;
		overflow: scroll;
	}

	.card {
		margin-top: 20px;
		position: relative;
	}

	.van-card {
		width: 710px;
		margin: auto;
		height: 200px;
		border-top-left-radius: 20px;
		border-bottom-right-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.van-card__header {
		height: 160px;
	}

	.van-card__content {
		width: 460px;
		display: flex;
		justify-content: space-around;
	}

	.van-card__thumb {
		width: 170px;
		height: 160px;
	}

	.van-card__title {
		font-size: 24px;
		line-height: normal;
	}

	.van-card__price {
		font-size: 32px;
	}

	.van-card__price-integer {
		font-size: 32px;
	}

	/* .van-checkbox {
		position: absolute;
		left: 38px;
		top: 85px;
		z-index: 9999;
	} */

	.van-stepper {
		position: absolute;
		bottom: 20px;
		right: 30px;
		border: 2px solid #f0f0f0;
	}

	.card .van-checkbox__icon {
		position: absolute;
		z-index: 999;
		top: 95px;
		left: 35px;
		font-size: 25px;
	}

	.van-stepper__minus,
	.van-stepper__input,
	.van-stepper__plus {
		background-color: #fff;
	}

	.btn {
		position: fixed;
		bottom: 0;
		width: 750px;
		height: 100px;
		background-color: #EEEEEE;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.btn_1 {
		display: flex;
		width: 130px;
		flex-direction: row;
		justify-content: space-around;
	}

	.btn_2 {
		display: flex;
		width: 490px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.btn .van-checkbox__icon {
		font-size: 35px;
	}

	.btn_2 span:first-child,
	.btn_2 span:nth-child(2) {
		font-size: 34px;
		color: #e37198;
	}

	.btn_2 span:last-child {
		width: 200px;
		height: 100px;
		background-color: #E37198;
		text-align: center;
		line-height: 100px;
		color: #FFFFFF;
	}
</style>
