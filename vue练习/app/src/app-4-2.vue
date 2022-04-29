<template>
	<div>
		<abc></abc>
		<hr >
		<abc :asd="num"></abc>
		<hr >
		<abc>
			<template v-slot:a>{{num}}</template>
			<template v-slot:b>{{str}}</template>
		</abc>
		<abc @xy="btn"></abc>
		ref
		<abc ref="tic">
		</abc>
		<button @click="en">触发</button>
	</div>
</template>

<script>
	import def from './components/app-4-2.vue'
	export default {
		data() {
			return {
				num: "123456",
				str: "父组件元素",
				child: null,
			}
		},
		components: {
			abc: def
		},
		methods: {
			btn(val) {
				console.log(val)
				// this.child=val
			},
			en() {
				console.log(123)
				console.log(this.$refs.tic.meg)
			}
		}
	}
</script>

<style>
</style>
