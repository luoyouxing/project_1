<template>
	<div>
		<button v-on:click="change">点击切换</button><br>
		<span>{{num}}</span>--<span>{{bool?num:""}}</span>--<span v-once>{{bool?num:""}}</span>
		<div v-show="display">1231534</div>
		<div v-show="bool">1231534</div>
		<div v-if="bool">123</div>
		<div v-else>12345</div>
		{{txt}}
		<div v-html="txt" v-bind:[name]="cal"></div>
		<img src="./assets/logo.png" >
		<img v-bind:src="pic">
		<input type="text" v-on:keydown="key" />
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:123456,
				bool:true,
				display:"block",
				txt:"<h2>标题</h2>",
				name:"id",
				cal:"red",
				pic:require("./assets/logo.png")
			}
		},
		methods:{
			change(){
				this.bool=!this.bool
				this.display=!this.display
			},
			key(){
				var inp=document.getElementsByTagName("input")[0].value
				if(inp=="a"){
					console.log("嗯")
				}
			},
		}
	}
</script>

<style>
	#red{
		background-color: red;
	}
</style>
