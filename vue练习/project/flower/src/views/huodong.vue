<template>
	<div>
		<div class="top">
			<div class="top_1">
				<span @click="btn">
					<van-icon name="arrow-left" />限时秒杀
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
			<span>没有更多数据了~</span>
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
		methods: {
			btn() {
				this.$router.push({
					path: "/",
				})
			}
		}
	}
</script>

<style scoped>
	.cen {
		width: 750px;
		position: absolute;
		top: 62px;
		bottom: 0;
		background-color: #EEEEEE;
		background-image: url(../assets/index/1.png);
		background-size: 550px 550px;
		background-repeat: no-repeat;
		/* background-attachment: fixed; */
		background-position: center;
	}

	.cen span {
		font-size: 40px;
		position: absolute;
		top: 80%;
		left: 30%;
	}
</style>
