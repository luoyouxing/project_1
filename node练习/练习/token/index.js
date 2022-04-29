const express = require('express') //加载框架

const app = express() //运行框架

const multer=require("multer") 

const path=require('path')

const jwt = require("jsonwebtoken") //加载token令牌

const mongoose = require('mongoose')
//连接数据库
mongoose.connect("mongodb://localhost/user").then(res => {
	console.log("连接成功")
}).catch(err => {
	console.log(err, "连接失败")
})

//设计数据字段
var people = new mongoose.Schema({
	name: {
		type: String,
		required: true //设置必填
	},
	password: String
})

var product=new mongoose.Schema({
	name:String,
	pic:String,
	num:Number,
	money:String,
	classify:Array
})

//设置集合
var p = mongoose.model("username", people)
var pro=mongoose.model("pro",product)

// var zs=new p({
// 	name:"zhangsan",
// 	password:"123456",
// })
// zs.save().then(()=>{
// 	console.log("插入成功")
// }).catch(err=>{
// 	console.log(err)
// })

app.use(express.urlencoded())
//配置表单提交post数据时req.body接收

//设置模板引擎的解析文件格式（默认解析views目录下的文件）
app.engine("html", require("express-art-template"))

//修改解析文件的存放目录（可针对单个路由）
app.set("views", "html")

var ojp={}
app.use((req,res,next)=>{
	pro.find().then((val)=>{
		ojp.arr= val 
		next()
	})
})

app.get("/", (req, res) => {
	res.render("shouye.html",ojp)
})

app.get("/index", (req, res) => {
	res.render("index.html")
})

app.post("/post", (req, res) => {
	// let arr = req.body;
	p.findOne(req.body).then((data) => {
		if (data) { //data==data!=null
			jwt.sign({a: 123}, "lyx", {expiresIn: 2000}, (err, token) => {
				// console.log(token)
				ojp.token=token
				res.render("shouye.html", ojp)
			})
		} else {
			res.render("index.html")
		}
	})
})

//token验证
app.post("/verify",(req,res)=>{
	jwt.verify(req.body.b,"lyx",(event)=>{
		if(event){
			res.send("重新登录")
		}else{
			res.send("登录有效")
		}
	})
})

//提交
app.get("/add",(req,res)=>{
	res.render("form.html")
})

app.post("/add",(req,res)=>{
	var obj=req.body
	console.log(obj)
	new pro(obj).save().then(()=>{
		res.redirect("/")
	})
})

// 静态资源加载
app.use("/css",express.static(path.join(__dirname,"css")))
app.use("/",express.static(path.join(__dirname,"img")))

//设置监听
app.listen(2000, () => {
	console.log('成功')
})
