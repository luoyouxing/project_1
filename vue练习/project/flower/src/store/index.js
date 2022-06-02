import Vue from "vue"
import Vuex from "vuex"
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
	storage: window.localStorage
})



Vue.use(Vuex)

export default new Vuex.Store({
	state: { //vuex的基本数据，用于存储变量
		images: [{
			pic: require("../assets/index/1.jpg")
		}, {
			pic: require("../assets/index/10.jpg")
		}],
		img: [{
			text: "推荐",
			pic: require("../assets/index/2.jpg")
		}, {
			text: "鲜花",
			pic: require("../assets/index/3.jpg")
		}, {
			text: "永生花",
			pic: require("../assets/index/4.jpg")
		}, {
			text: "鲜花礼盒",
			pic: require("../assets/index/5.jpg")
		}, {
			text: "绿植",
			pic: require("../assets/index/6.jpg")
		}, {
			text: "送爱人",
			pic: require("../assets/index/7.jpg")
		}, {
			text: "送挚友",
			pic: require("../assets/index/8.jpg")
		}, {
			text: "送长辈",
			pic: require("../assets/index/9.jpg")
		}],
		ar: [{
			pic: require("../assets/index/13.jpg"),
			text: "绣花香 128",
			pirce: "￥128.00",
			num: "销量：22",
		}, {
			pic: require("../assets/index/14.jpg"),
			text: "遇见时光遇见你",
			pirce: "￥198.00",
			num: "销量：99",
		}, {
			pic: require("../assets/index/15.jpg"),
			text: "芬芳",
			pirce: "￥326.00",
			num: "销量：66",
		}, {
			pic: require("../assets/index/16.jpg"),
			text: "晴空万里",
			pirce: "￥239.00",
			num: "销量：333",
		}, ],
		arr: [{
			txt: "鲜花",
		}, {
			txt: "绿植",
		}, {
			txt: "永生花",
		}, {
			txt: "送挚友",
		}, {
			txt: "送爱人",
		}, {
			txt: "送长辈",
		}, {
			txt: "七夕推荐",
		}, {
			txt: "新品预售",
		}, {
			txt: "热卖专区",
		}],
		shop: [
			[{
				pic: require("../assets/classify/1.jpg"),
				name: "【遇见时光遇见你】 玫瑰...",
				num: "库存 200",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/2.jpg"),
				name: "【如初之光】 表白·纪念...",
				num: "库存 180",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/3.jpg"),
				name: "【希冀微光】 生日·纪念...",
				num: "库存 200",
				pri: "￥218.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/4.jpg"),
				name: "【晴空万里】 9枝粉佳人...",
				num: "库存 200",
				pri: "￥239.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/5.jpg"),
				name: "【浪漫土耳其】 11枝粉玫...",
				num: "库存 200",
				pri: "￥290.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/6.jpg"),
				name: "【混搭满天星】 家居花...",
				num: "库存 200",
				pri: "￥129.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/7.jpg"),
				name: "【芬芳】 1朵粉色秀+16...",
				num: "库存 200",
				pri: "￥326.00",
				car: "iconfont icon-gouwuche",
			}],
			[{
				pic: require("../assets/classify/1.jpg"),
				name: "【遇见时光遇见你】 玫瑰...",
				num: "库存 200",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/2.jpg"),
				name: "【如初之光】 表白·纪念...",
				num: "库存 180",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/3.jpg"),
				name: "【希冀微光】 生日·纪念...",
				num: "库存 200",
				pri: "￥218.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/4.jpg"),
				name: "【晴空万里】 9枝粉佳人...",
				num: "库存 200",
				pri: "￥239.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/5.jpg"),
				name: "【浪漫土耳其】 11枝粉玫...",
				num: "库存 200",
				pri: "￥290.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/6.jpg"),
				name: "【混搭满天星】 家居花...",
				num: "库存 200",
				pri: "￥129.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/7.jpg"),
				name: "【芬芳】 1朵粉色秀+16...",
				num: "库存 200",
				pri: "￥326.00",
				car: "iconfont icon-gouwuche",
			}],
			[{
				pic: require("../assets/classify/1.jpg"),
				name: "【遇见时光遇见你】 玫瑰...",
				num: "库存 200",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/2.jpg"),
				name: "【如初之光】 表白·纪念...",
				num: "库存 180",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/3.jpg"),
				name: "【希冀微光】 生日·纪念...",
				num: "库存 200",
				pri: "￥218.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/4.jpg"),
				name: "【晴空万里】 9枝粉佳人...",
				num: "库存 200",
				pri: "￥239.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/5.jpg"),
				name: "【浪漫土耳其】 11枝粉玫...",
				num: "库存 200",
				pri: "￥290.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/6.jpg"),
				name: "【混搭满天星】 家居花...",
				num: "库存 200",
				pri: "￥129.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/7.jpg"),
				name: "【芬芳】 1朵粉色秀+16...",
				num: "库存 200",
				pri: "￥326.00",
				car: "iconfont icon-gouwuche",
			}],
			[{
				pic: require("../assets/classify/1.jpg"),
				name: "【遇见时光遇见你】 玫瑰...",
				num: "库存 200",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/2.jpg"),
				name: "【如初之光】 表白·纪念...",
				num: "库存 180",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/3.jpg"),
				name: "【希冀微光】 生日·纪念...",
				num: "库存 200",
				pri: "￥218.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/4.jpg"),
				name: "【晴空万里】 9枝粉佳人...",
				num: "库存 200",
				pri: "￥239.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/5.jpg"),
				name: "【浪漫土耳其】 11枝粉玫...",
				num: "库存 200",
				pri: "￥290.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/6.jpg"),
				name: "【混搭满天星】 家居花...",
				num: "库存 200",
				pri: "￥129.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/7.jpg"),
				name: "【芬芳】 1朵粉色秀+16...",
				num: "库存 200",
				pri: "￥326.00",
				car: "iconfont icon-gouwuche",
			}],
			[{
				pic: require("../assets/classify/1.jpg"),
				name: "【遇见时光遇见你】 玫瑰...",
				num: "库存 200",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/2.jpg"),
				name: "【如初之光】 表白·纪念...",
				num: "库存 180",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/3.jpg"),
				name: "【希冀微光】 生日·纪念...",
				num: "库存 200",
				pri: "￥218.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/4.jpg"),
				name: "【晴空万里】 9枝粉佳人...",
				num: "库存 200",
				pri: "￥239.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/5.jpg"),
				name: "【浪漫土耳其】 11枝粉玫...",
				num: "库存 200",
				pri: "￥290.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/6.jpg"),
				name: "【混搭满天星】 家居花...",
				num: "库存 200",
				pri: "￥129.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/7.jpg"),
				name: "【芬芳】 1朵粉色秀+16...",
				num: "库存 200",
				pri: "￥326.00",
				car: "iconfont icon-gouwuche",
			}],
			[{
				pic: require("../assets/classify/1.jpg"),
				name: "【遇见时光遇见你】 玫瑰...",
				num: "库存 200",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/2.jpg"),
				name: "【如初之光】 表白·纪念...",
				num: "库存 180",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/3.jpg"),
				name: "【希冀微光】 生日·纪念...",
				num: "库存 200",
				pri: "￥218.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/4.jpg"),
				name: "【晴空万里】 9枝粉佳人...",
				num: "库存 200",
				pri: "￥239.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/5.jpg"),
				name: "【浪漫土耳其】 11枝粉玫...",
				num: "库存 200",
				pri: "￥290.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/6.jpg"),
				name: "【混搭满天星】 家居花...",
				num: "库存 200",
				pri: "￥129.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/7.jpg"),
				name: "【芬芳】 1朵粉色秀+16...",
				num: "库存 200",
				pri: "￥326.00",
				car: "iconfont icon-gouwuche",
			}],
			[{
				pic: require("../assets/classify/1.jpg"),
				name: "【遇见时光遇见你】 玫瑰...",
				num: "库存 200",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/2.jpg"),
				name: "【如初之光】 表白·纪念...",
				num: "库存 180",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/3.jpg"),
				name: "【希冀微光】 生日·纪念...",
				num: "库存 200",
				pri: "￥218.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/4.jpg"),
				name: "【晴空万里】 9枝粉佳人...",
				num: "库存 200",
				pri: "￥239.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/5.jpg"),
				name: "【浪漫土耳其】 11枝粉玫...",
				num: "库存 200",
				pri: "￥290.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/6.jpg"),
				name: "【混搭满天星】 家居花...",
				num: "库存 200",
				pri: "￥129.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/7.jpg"),
				name: "【芬芳】 1朵粉色秀+16...",
				num: "库存 200",
				pri: "￥326.00",
				car: "iconfont icon-gouwuche",
			}],
			[{
				pic: require("../assets/classify/1.jpg"),
				name: "【遇见时光遇见你】 玫瑰...",
				num: "库存 200",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/2.jpg"),
				name: "【如初之光】 表白·纪念...",
				num: "库存 180",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/3.jpg"),
				name: "【希冀微光】 生日·纪念...",
				num: "库存 200",
				pri: "￥218.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/4.jpg"),
				name: "【晴空万里】 9枝粉佳人...",
				num: "库存 200",
				pri: "￥239.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/5.jpg"),
				name: "【浪漫土耳其】 11枝粉玫...",
				num: "库存 200",
				pri: "￥290.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/6.jpg"),
				name: "【混搭满天星】 家居花...",
				num: "库存 200",
				pri: "￥129.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/7.jpg"),
				name: "【芬芳】 1朵粉色秀+16...",
				num: "库存 200",
				pri: "￥326.00",
				car: "iconfont icon-gouwuche",
			}],
			[{
				pic: require("../assets/classify/1.jpg"),
				name: "【遇见时光遇见你】 玫瑰...",
				num: "库存 200",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/2.jpg"),
				name: "【如初之光】 表白·纪念...",
				num: "库存 180",
				pri: "￥198.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/3.jpg"),
				name: "【希冀微光】 生日·纪念...",
				num: "库存 200",
				pri: "￥218.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/4.jpg"),
				name: "【晴空万里】 9枝粉佳人...",
				num: "库存 200",
				pri: "￥239.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/5.jpg"),
				name: "【浪漫土耳其】 11枝粉玫...",
				num: "库存 200",
				pri: "￥290.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/6.jpg"),
				name: "【混搭满天星】 家居花...",
				num: "库存 200",
				pri: "￥129.00",
				car: "iconfont icon-gouwuche",
			}, {
				pic: require("../assets/classify/7.jpg"),
				name: "【芬芳】 1朵粉色秀+16...",
				num: "库存 200",
				pri: "￥326.00",
				car: "iconfont icon-gouwuche",
			}]
		],
		name: [{
			num: "0.00",
			id: "储值余额"
		}, {
			num: "100",
			id: "剩余积分"
		}, {
			num: "— —",
			id: "可用优惠券"
		}],
		data: [{
			pic: require("../assets/mine/2.jpg"),
			text: "待付款",
		}, {
			pic: require("../assets/mine/3.jpg"),
			text: "待发货",
		}, {
			pic: require("../assets/mine/4.jpg"),
			text: "待收货",
		}, {
			pic: require("../assets/mine/5.jpg"),
			text: "售后",
		}],
		data_1: [{
			pic: require("../assets/mine/6.jpg"),
			text: "会员卡",
		}, {
			pic: require("../assets/mine/7.jpg"),
			text: "优惠券",
		}, {
			pic: require("../assets/mine/8.jpg"),
			text: "储值金",
		}, {
			pic: require("../assets/mine/9.jpg"),
			text: "积分",
		}],
		data_2: [{
			pic: require("../assets/mine/10.jpg"),
			text: "地址管理",
		}, {
			pic: require("../assets/mine/11.jpg"),
			text: "购物车",
		}],
		you: [{
			pic: require('../assets/index/11.jpg'),
			pri: 99,
			num: 10
		}, {
			pic: require('../assets/index/12.jpg'),
			pri: 199,
			num: 20
		}],
		goods: [{
			goodsid: 60293425243633,
			goodsname: "绣花香 128",
			goodsnum: "销量：22",
			goodsprice: "￥149",
			goodspic: require("../assets/index/13.jpg"),
			goodsdetails: "已完成",
			goodstext: "查看订单",
		}, {
			goodsid: 60293425243633,
			goodsname: "遇见时光遇见你",
			goodsnum: "销量：99",
			goodsprice: "￥198.00",
			goodspic: require("../assets/index/14.jpg"),
			goodsdetails: "待支付",
			goodstext: "去支付",

		}, {
			goodsid: 60293425243633,
			goodsname: "芬芳",
			goodsnum: "销量：66",
			goodsprice: "￥326.00",
			goodspic: require("../assets/index/15.jpg"),
			goodsdetails: "已发货",
			goodstext: "查看物流",
		}, ],
		// address: [],
		msg: "首页"
	},
	getters: {

	},
	plugins: [vuexLocal.plugin]
})
