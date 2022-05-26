<template>
	<div>
		<div class="top">
			<div class="top_1">
				<span @click="btn">
					<van-icon name="arrow-left" />{{$route.query.pri}}减{{$route.query.num}}
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
		</div>
		<div class="cen">
			<div class="cen_1">
				<div class="cen_2">
					<span>{{$route.query.num}}<span>元</span></span>
					<button type="button" @click="receive" class="">点击领取</button>
				</div>
				<div class="cen_3">
					<div class="cen_4">
						<span>满{{$route.query.pri}}元可用</span>
						<span>有效期2019.3-2019-12</span>
					</div>
					<div class="cen_4">
						<span>优惠券详情</span>
						<span>满{{$route.query.pri}}元减{{$route.query.num}}元，请在有效期内使用，逾期无效</span>
					</div>
				</div>
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
		data(){
			return{
				number:[]
			}
		},
		mounted() {
			// console.log(this.$route.query)
		},
		methods: {
			btn() {
				this.$router.go(-1)
			},
			receive() {
				let cen_2 = document.getElementsByClassName("cen_2")[0]
				let receive = cen_2.getElementsByTagName("button")[0]
				receive.innerText = "已领取"
				receive.className = "button"
				if (localStorage.getItem("num") != null) {
					this.number = JSON.parse(localStorage.getItem("num")) //把json字符串转换成对应的数组或对象
				}
				this.number.push(this.$route.query)
				// localStorage.setItem("num",JSON.stringify(this.number))
				// var res=this.number.findIndex((v,i)=>{
				// 	console.log(v)
				// 	return v.num==this.number[i].num
				// })
				// console.log(res)
				
			}
		}
	}
</script>

<style scoped>
	.top {
		background-color: #FFFFFF;
		z-index: 999;
	}

	.cen {
		width: 750px;
		background-color: #eeeeee;
		position: absolute;
		top: 62px;
		bottom: 0;
		background-image: url(../assets/index/2.png);
		background-size: 710px 98%;
		background-repeat: no-repeat;
		/* background-attachment: fixed; */
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* .cen_1 {
		width: 7.1rem;
		margin-top: 3rem;
	} */

	.cen_2 {
		height: 380px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.cen_2 span {
		font-size: 200px;
		color: #e37198;
	}

	.cen_2 span span {
		font-size: 50px;
	}

	.cen_2 button {
		height: 80px;
		width: 300px;
		border: none;
		font-size: 45px;
		color: #FFFFFF;
		border-radius: 50px;
		background-color: #E37198;
	}

	.cen_2 button.button {
		background-color: #AEAEAE;
	}

	.cen_3 {
		height: 310px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.cen_4 {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.cen_4 span:first-child {
		font-size: 34px;
		color: #e37198;
	}

	.cen_4 span:last-child {
		font-size: 30px;
	}
</style>
