<template>
	<div>
		<button @click="text">点击</button><br />
		<!-- {{text()}}--{{text()}}--{{text()}}--{{text()}}<br /> -->
		<!-- 放入函数中有几次就会执行几次，计算中不会 -->
		{{num}}--{{num}}--{{num}}--{{num}}
		<br />
		<input type="text" v-bind:value="cal" />
		<!-- <input type="text" v-model="cal" /> -->
		<input type="text" v-model.lazy="cal" />{{cal}}
		<!-- lazy懒加载鼠标移出时点击生效 -->
		<br>
		<input type="text" v-model="xing" />
		<input type="text" v-model="ming" />
		<input type="text" v-model="xm">
		<div :class="cla">123456</div>
		<div :class="[a,b]">123456</div>
		<div :class="{box:bool1,on:bool2}">123456</div>
		<div style="width: 200px;background-color: #00FFFF;">465879</div>
		<div :style="sty">465879</div>
		<div :style="c">465879</div>
		<div :style="[d,e]">465879</div>
		<template v-if="bool1">123456789</template>
		<div v-html="tit"></div>
		<ul>
			<!-- <div v-for="v,i in arr" :key="i">
				<li :key="i">{{i}}</li>
				<li :key="v.id">{{v.name}}</li>
			</div> -->
			<!-- 用div写html会出现li被div包住 -->
			<template v-for="v,i in arr">
				<li :key="i">{{i}}</li>
				<li :key="v.id">{{v.name}}</li>
			</template>
		</ul>
		<input type="checkbox" v-model="checked">
		<label>{{ checked }}</label>
		<hr>
		<input type="checkbox" value="苹果" v-model="checkeds" />
		<label>苹果</label>
		<input type="checkbox" value="菠萝" v-model="checkeds" />
		<label>菠萝</label>
		<input type="checkbox" value="梨子" v-model="checkeds" />
		<label>梨子</label>
		<br>
		<span>你选择: {{ checkeds }}</span>
		<hr>
		<input type="radio" value="苹果" v-model="shop" />
		<label>苹果</label>
		<input type="radio" value="梨子" v-model="shop" />
		<label>梨子</label>
		<br>
		<span>你选择: {{ shop }}</span>
		<hr>
		<select v-model="selected">
			<option></option>
			<option>苹果</option>
			<option>菠萝</option>
			<option>梨子</option>
		</select>
		<br>
		<span>你选择: {{selected}}</span>
		<hr>
		<select v-model="selecteds" multiple style="width: 50px;">
			<option>苹果</option>
			<option>菠萝</option>
			<option>梨子</option>
		</select>
		<br>
		<span>你选择: {{selecteds}}</span>
		<hr> 
		<select v-model="sel">
			<option v-for="v,i in options" :key="i" :value="v.value">{{v.text}}</option>
		</select>
		<br>
		<span>你选择: {{sel}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: true,
				checkeds: [],
				shop: '',
				selected: '',
				selecteds: '',
				sel: '',
				options: [{
						text: 'One',
						value: 'A'
					},
					{
						text: 'Two',
						value: 'B'
					},
					{
						text: 'Three',
						value: 'C'
					}
				],
				arr: [{
						name: "aa",
						id: "1001"
					},
					{
						name: "bb",
						id: "1002"
					},
					{
						name: "cc",
						id: "1003"
					},
				],
				cal: "123456",
				xing: "luo",
				ming: "youxing",
				cla: "box on",
				a: "box",
				b: "on",
				bool1: true,
				bool2: true,
				sty: "width: 200px;background-color: #00FFFF;",
				c: {
					width: " 200px",
					backgroundColor: "#00FFFF",
				},
				d: {
					width: " 200px",
					backgroundColor: "#00FFFF",
				},
				e: {
					color: "red"
				},
				tit: "<h1>111</h1>",
				meg: "hello",
			}
		},
		methods: {
			text() {
				this.meg = "word"
				console.log(123)
				return 456
			}
		},
		computed: {
			num() {
				console.log(this.meg)
				return 789
			},
			xm: {
				get: function() {
					return this.xing + " " + this.ming
				},
				set(val) {
					this.xing = val.split(" ")[0]
					this.ming = val.split(" ")[1]
				}
			}
		},
		watch: {
			cal(a, b) {
				// a是新值,b是旧值
				console.log("cal发生了变化，由" + b + "变成了" + a)
				if (a.length > 10) {
					this.cal = a.substr(0, 10)
				}
			}
		}
	}
</script>

<style>
	.box {
		width: 200px;
	}

	.on {
		background-color: #0086B3;
	}
</style>
