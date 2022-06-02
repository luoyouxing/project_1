<template>
	<div>
		<zxc :text="$store.state.msg"></zxc>
		<div v-if="bool" class="add_center">
			<div v-for="v,i in arr" :key="i" class="address_center1">
				<div class="address_center_top">
					<div class="address_center_top_top">
						<span>{{v.name}}</span>
						<span>{{v.tel}}</span>
					</div>
					<div class="address_center_top_bottom">
						<span>{{v.province}}</span>
						<span>{{v.city}}</span>
						<span>{{v.county}}</span>
						<span>{{v.addressDetail}}</span>
					</div>
				</div>
				<div class="address_center_bottom">
					<div class="address_center_bottom_ord">
						<van-radio-group v-model="radio">
							<van-radio :name="i" ref="check">默认地址</van-radio>
						</van-radio-group>
						<div class="address_center_bottom_right">
							<span @click="modify(i)">
								<van-icon name="label-o" />编辑
							</span>
							<span @click="del(i)">
								<van-icon name="delete-o" />删除
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="add_center_f">
			<span class="add_center_f_span">没有地址，快去添加一个吧</span>
		</div>
		<div class="add_bottom" @click="btn">
			<span>添加收货地址</span>
		</div>
	</div>
</template>

<script>
	import asd from '../components/header.vue'
	import Vue from 'vue';
	import {
		AddressList,
		Toast,
		Icon,
		RadioGroup,
		Radio,
	} from 'vant';

	Vue.use(Radio);
	Vue.use(RadioGroup);
	Vue.use(Icon);
	Vue.use(AddressList);
	Vue.use(Toast);
	export default {
		data() {
			return {
				bool: true,
				arr: [],
				radio: '',
			}
		},
		created() {
			// console.log(this.$store.state.address.length)
			// console.log(this.$store.state.address)
			// console.log(this.$store.state.address[0].county)
			// console.log(localStorage.getItem("address"))
			this.$nextTick(() => {
				if (localStorage.getItem("address") == null) {
					this.bool = false
				}
			})
			this.arr = JSON.parse(localStorage.getItem("address"))
			// console.log(this.arr)
			var res = this.arr.findIndex(function(v) {
				// console.log(v)
				return v.isDefault
			})
			// console.log(res)

			this.$nextTick(() => {
				// console.log(this.$refs.check[0].name)
				if (res >= 0) {
					this.radio = this.$refs.check[res].name
				}
			})
			// console.log(this.arr[0].name)
		},
		methods: {
			btn() {
				this.$router.push({
					path: "/add"
				})
			},
			modify(i) {
				// console.log(i)
				this.$router.push({
					path: "/add",
					query: {
						obj: this.arr[i],
					}
				})
			},
			del(i) {
				this.arr.splice(i, 1)
				localStorage.setItem("address", JSON.stringify(this.arr))
			},
		},
		components: {
			zxc: asd
		}
	}
</script>

<style>
	.add_center {
		position: fixed;
		width: 750px;
		top: 70px;
		bottom: 80px;
		background-color: #EEEEEE;
		overflow: scroll;
	}

	.add_center_f {
		position: fixed;
		top: 70px;
		width: 750px;
	}

	.add_center_f_span {
		position: absolute;
		top: 255px;
		font-size: 30px;
		left: 195px;
	}

	.add_bottom {
		position: fixed;
		bottom: 0;
		width: 750px;
		height: 80px;
		line-height: 80px;
		background-color: #FF5E46;
		text-align: center;
	}

	.add_bottom span {
		color: #FFFFFF;
		font-size: 28px;
	}

	.address_center_top {
		height: 140px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		border-bottom: 1px solid #eeeeee;
	}

	.address_center_top_top {
		width: 670px;
		margin: 0 auto;
		font-size: 28px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.address_center1 {
		margin-bottom: 20px;
		background-color: #FFFFFF;
	}

	.address_center_top_bottom {
		width: 670px;
		margin: 0 auto;
		font-size: 24px;
	}

	.address_center_top_bottom span {
		margin-right: 30px;
	}

	.address_center_bottom_ord {
		width: 670px;
		height: 75px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 24px;
	}

	.address_center_bottom_right span {
		margin-left: 15px;
	}
</style>
