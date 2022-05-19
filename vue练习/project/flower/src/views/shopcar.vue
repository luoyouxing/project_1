<template>
	<div>
		<zxc :text="$route.params.text"></zxc>
	</div>
</template>

<script>
	import asd from '../components/header.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			zxc: asd
		}
	}
</script>

<style>
</style>
