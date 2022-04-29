import Vue from "vue"
import Vuex from "vuex"
import abc from "./abc.js"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {//vuex的基本数据，用于存储变量
		bool: true,
		navlist: [{
			tit: "首页"
		}, {
			tit: "分类"
		}, {
			tit: "购物车"
		}, {
			tit: "我的"
		}],
		news: [{
				tit: "1111",
				time: "04-06"
			},
			{
				tit: "2222",
				time: "04-08"
			},
			{
				tit: "3333",
				time: "04-06"
			},
			{
				tit: "4444",
				time: "04-08"
			},
			{
				tit: "5555",
				time: "04-08"
			}
		]
	},
	getters: {//从state派生的数据，相当于state的计算属性，具有返回值的方法
		time: function(state) {
			console.log(1, state)
			return state.news.filter(v => v.time == "04-08")
		},
		tit(state) {
			return function(val) {
				console.log(val)
				return state.news.filter(v => v.tit == val)
			}
		}
	},
	mutations: {//提交更新数据的方法，必须是同步的（异步则使用action），每个mutations都有一个字符串的事件类型和一个回调函数，提交mutation是更改vuex中store中状态的唯一方法
		change: function(state, val) {
			console.log(state, val)
			state.bool = val//修改state中的bool值
		},
		chan:function(state,val){
			state.news[3].tit=val
		}
	},
	actions: {
		// 和mutation功能大致一致，不同的是：
		// 1.action提交的是mutation，而不是直接变更状态
		// 2.action可以包含任意的异步操作
		changes:function(store,val){
			console.log(store,val)
			store.commit("chan",val)
			//异步里面调用同步方法来修改数据
		}
	},
	modules:{//模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理，类似于vue中的组件
		abc
	}
})
