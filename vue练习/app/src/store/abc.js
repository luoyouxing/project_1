export default {
	state: {
		num: 12354,
		arr: [{
			name: "张三",
			age: 15
		}, {
			name: "李四",
			age: 18
		}, {
			name: "王五",
			age: 20
		}, ]
	},
	mutations:{
		btos:function(state,val){
			state.arr[1].age=val
		}
	},
	actions:{
		bto:function(store,val){
			store.commit("btos",val)
		}
	}
}
