<template>
	<div class="top">
		<div class="top_1">
			<span @click="btn">
				<van-icon name="arrow-left" />{{text}}
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
</template>

<script>
	import Vue from 'vue';
	import {
		Icon
	} from 'vant';

	Vue.use(Icon);
	export default {
		props: ["text"],
		data() {
			return {

			}
		},
		methods: {
			btn() {
				this.$router.go(-1)
			}
		},
	}
</script>

<style>
</style>
