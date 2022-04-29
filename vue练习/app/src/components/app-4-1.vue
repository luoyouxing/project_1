<template>
	<div>
		<!-- <button @click="counts()">你点击了{{count}}次</button> -->
		<h2>{{title}}</h2>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 0,
			}
		},
		methods: {
			counts: function() {
				this.count++
			}
		},
		props: ['title'],
	}
</script>

<style>
</style>
