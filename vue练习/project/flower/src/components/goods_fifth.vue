<template>
	<div class="h">
		<div v-for="v,i in arr" :key="i" class="box">
			<div class="box_1">
				<div class="center_top">
					<span>订单编号：<span>{{v.goodsid}}</span></span>
					<span class="center_top_span">{{v.goodsdetails}}</span>
				</div>
				<div class="center_bottom">
					<img :src="v.goodspic">
					<div class="center_bottom_right">
						<div class="center_bottom_right_top">
							<span>{{v.goodsname}}</span>
						</div>
						<div class="center_bottom_right_bottom">
							<div class="center_bottom_right_bottom_right">
								<span>{{v.goodsnum}}</span>
								<span>{{v.goodsprice}}</span>
							</div>
							<span class="center_bottom_right_bottom_bottom">{{v.goodstext}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: []
			}
		},
		created() {
			this.goods = this.$store.state.goods
			var res = this.goods.filter(function(v) {
				return v.goodsdetails == "已完成"
			})
			this.arr = res
			console.log(this.arr)
		},
		methods: {
	
		},
	}
</script>

<style>
</style>
