<template>
	<div>
		过滤器：
		<textarea v-model="num"></textarea>
		已输入{{num|len}}字节
		<hr >
		自定义指令
		<div v-res>1213246</div>
		<div v-res1="num"></div>
		<hr >
		混入：利用模块化，把部分js独立出去
		<br>
		调用混入函数：{{str}}
		<hr >
		渲染函数：用js实现组件化
		<abc xy="666"></abc>
	</div>
</template>

<script>
	import mn from './components/mixin.js'
	import def from './components/render.js'
	var that = null
	export default {
		data() {
			return {
				str:"同名冲突，会覆盖混入数据",
				num: "123456",
			}
		},
		mixins:[mn],
		components:{
			abc:def
		},
		created() {
			that = this
			this.fn()//调用混入的方法
		},
		directives:{
			res:function(el){
				el.innerText=el.innerText.split("").reverse().join("")
			},
			res1:{
				update:function(el,binding){
					el.innerText=binding.value.split("").reverse().join("")
				}
			}
		},
		filters: {
			len: function(val) {
				//console.log(123,this,that)//注意this指向的问题
				if (val.length > 10) {
					that.num = that.num.substr(0, 10)
				}
				return val.length
			}
		}
	}
</script>

<style>
</style>
