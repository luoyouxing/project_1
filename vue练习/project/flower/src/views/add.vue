<template>
	<div>
		<zxc></zxc>
		<van-address-edit :area-list="areaList" show-delete show-set-default
			:area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" ref="data" />
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		areaList
	} from '@vant/area-data';
	import {
		AddressEdit,
		Toast
	} from 'vant';

	Vue.use(AddressEdit);
	Vue.use(Toast);
	import asd from '../components/header.vue'
	export default {
		data() {
			return {
				areaList,
				arr: [],
			}
		},
		created() {
			this.$nextTick(() => {
				// console.log(this.$refs.data.data.name);
				if (this.$route.query.obj != undefined) {
					this.$refs.data.data = this.$route.query.obj
				}
			})
		},
		methods: {
			onSave(val) {
				Toast('保存成功');
				// console.log(val)
				if (localStorage.getItem("address") != null) {
					this.arr = JSON.parse(localStorage.getItem("address"))
				}
				this.arr.unshift(val)
				// console.log(JSON.stringify(this.arr))
				localStorage.setItem("address", JSON.stringify(this.arr))
				this.$router.go(-1)
				// this.$store.state.address.push(val)
			},
			onDelete(val) {
				Toast('删除成功');
				console.log(val)
			}
		},
		components: {
			zxc: asd
		}
	}
</script>

<style>
	.van-address-edit {
		width: 750px;
		position: fixed;
		top: 70px;
		bottom: 0;
		padding: 0;
	}
</style>
