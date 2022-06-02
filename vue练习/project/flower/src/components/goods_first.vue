<template>
	<div class="h">
		<div v-for="v,i in $store.state.goods" :key="i" class="box">
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
</script>

<style>
	.h {
		width: 750px;
	}

	.box {
		width: 710px;
		height: 290px;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 20px;
		border: 1px solid #EEEEEE;
		border-radius: 15px;
	}

	.box_1 {
		width: 670px;
		height: 250px;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.center_top {
		font-size: 0.74667rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.center_bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.center_bottom img {
		width: 200px;
		height: 200px;
	}

	.center_bottom_right {
		width: 450px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.center_bottom_right_top {
		font-size: 28px;
	}
	
	.center_top_span{
		color: #FF5E46;
	}

	.center_bottom_right_bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.center_bottom_right_bottom_right {
		display: flex;
		height: 70px;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.center_bottom_right_bottom_right span:first-child {
		font-size: 22px;
	}

	.center_bottom_right_bootom_right span:last-child {
		font-size: 32px;
	}

	.center_bottom_right_bottom_bottom{
		font-size: 28px;
		width: 130px;
		height: 50px;
		background-color: #ff5e46;
		text-align: center;
		line-height: 50px;
		border-radius: 30px;
		color: #FFFFFF;
	}
</style>
