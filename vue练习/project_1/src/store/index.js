import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		images: [{
			pic: require("../assets/index/1.jpg")
		}, {
			pic: require("../assets/index/10.jpg")
		}],	
		msg:"首页"
	}
})