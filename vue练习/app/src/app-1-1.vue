<template>
	<div>
		<div class="box on">{{num}}</div>
		<div :class="[a,b]">{{num}}</div>
		<div :class="{box:bool1,on:bool1}">{{num}}</div>
		<div>
			<span :title="message">
				鼠标悬停几秒钟查看此处动态绑定的提示信息！
			</span>
		</div>
		<div>
			<p v-if="bool1">12345</p>
			<p v-else>1234</p>
		</div>
		<div>
			<p :class="bool1?b:''">12345</p>
		</div>
		<div>
			<ul>
				<li v-for="v,i in arr" :key="i">
					{{v.text}}
				</li>
			</ul>
		</div>
		<div>
			<p>{{text}}</p>
			<button @click="en">翻转</button>
		</div>
		<div>
			<input v-model="txt" />
			<p>{{txt}}</p>
		</div>
		<hr>
		<div>
			<ul>
				<li v-for="v,i in arr1" :key="i">
					{{i}}:{{v}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr1: {
					title: '123',
					name: 'luo',
				},
				txt: "",
				arr: [{
					text: '苹果'
				}, {
					text: '梨子'
				}, {
					text: '菠萝'
				}],
				num: "123456",
				a: "box",
				b: "on",
				bool1: true,
				message: "页面加载于" + new Date().toLocaleString(),
				text: "helloword"
			}
		},
		methods: {
			en() {
				this.text = this.text.split('').reverse().join('')
			}
		},
		watch: {
			txt(a) {
				if (a.length > 10) {
					this.txt = a.substr(0, 10)
				}
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.box {
		width: 100px;
	}

	.on {
		background-color: #0077AA;
	}

	ul {
		list-style: none;
		/* position: absolute;
		left: 10px; */
	}
</style>
