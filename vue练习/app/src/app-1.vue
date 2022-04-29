<template>
	<div class="box">
		<input type="text" v-model="num" />
		<p>{{num}}</p>
		<button type="button" v-on:click="en()">点击隐藏/显示</button>
		<div v-bind:class="bool?el:''">
			<h1>{{bool?text:""}}</h1>
			<ul>
				<li v-for="v,i in arr" v-bind:key="i">
					{{bool?v:""}}
				</li>
			</ul>
		</div>
		<!-- <div v-bind:class="bool?a:''">
			<div v-bind:class="bool?b:''">

			</div>
		</div> -->
		<adc></adc>
	</div>

</template>

<script>
	import def from "./components/new_file.vue"
	export default {
		data() {
			return {
				// a:"center",
				// b:"center1",
				el: "box1",
				text: "Hello",
				bool: false,
				arr: ["aa", "bb", "cc"],
				num: "123456"
			}
		},
		methods: {
			en: function() {
				this.bool = !this.bool
				// var o = document.getElementsByClassName("center1")[0]
				// // console.log(o)
				// setInterval(function() {
				// 	var m = (Math.random() * 450) + "px"
				// 	var n = (Math.random() * 130) + "px"
				// 	o.style.left = m
				// 	o.style.top = n
				// }, 100)
			}
		},
		components: {
			adc: def
		}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	.box {
		width: 500px;
		height: 400px;
		border: 1px solid #7FFF00;
		margin: auto;
	}

	.box1 {
		width: 200px;
		height: 160px;
		text-align: center;
		margin: auto;
	}

	ul {
		list-style: none;
	}

	.center {
		width: 499px;
		height: 175px;
		border: 1px solid #00FFFF;
		position: relative;
	}

	.center1 {
		width: 40px;
		height: 40px;
		position: absolute;
		background-color: #288BC4;
	}
</style>
