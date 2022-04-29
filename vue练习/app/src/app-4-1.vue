<template>
	<div>
		<!-- <abc></abc>
		<abc></abc>
		<abc></abc> -->
		<abc title="hello"></abc>
		<abc v-for="v in posts" :key="v.id" :title="v.tit"></abc>
	</div>
</template>

<script>
	import abc from "./components/app-4-1.vue"
	export default {
		data() {
			return {
				posts: [{
						id: 1,
						tit: 'My journey with Vue'
					},
					{
						id: 2,
						tit: 'Blogging with Vue'
					},
					{
						id: 3,
						tit: 'Why Vue is so fun'
					}
				],
			}
		},
		components: {
			abc //注意不要使用标签
		},
	}
</script>

<style>
</style>
