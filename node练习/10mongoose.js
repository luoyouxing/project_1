var mongoose=require("mongoose")

//连接user数据库(不存在会自动创建)
mongoose.connect("mongodb://localhost/user").then(res=>{
	console.log("连接成功")
}).catch(err=>{
	console.log(err,"连接失败")
})

//设置字段
var people=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	password:String,
	age:Number,
	friends:{
		type:Array,
		default:["aa","bb"]
	}
})

var p=mongoose.model("username",people)//设计库里面的集合

