<template>
	<div>
		<div class="top">
			<div class="top_1">
				<span class="en">
					<van-icon name="arrow-left" />女花亭花坊
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
		<div class="tips">

		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Icon
	} from 'vant';

	Vue.use(Icon);
	export default {}
</script>

<style scoped>
	.tips {
		width: 750px;
		position: absolute;
		top: 70px;
		bottom: 100px;
		overflow: scroll;
		background-color: #EEEEEE;
	}
</style>
