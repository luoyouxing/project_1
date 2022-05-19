<template>
	<div>
		<abc :title="$store.state.msg"></abc>
		<!-- <div class="center"> -->
			<van-search v-model="value" placeholder="请输入搜索关键词" />
		<!-- </div> -->
	</div>

</template>

<script>
	import def from '../components/top.vue';
	import Vue from 'vue';
	import {
		Search,
	} from 'vant';

	Vue.use(Search);
	export default {
		data() {
			return {
				value: '',
			}
		},
		components: {
			abc: def
		},
		created() {
			this.images = this.$store.state.images
		}
	}
</script>

<style>
	.center {
		background-color: #EEEEEE;
		width: 7.5rem;
		position: fixed;
		top: 0.6rem;
		bottom: 1rem;
		overflow: scroll;
	}
</style>
