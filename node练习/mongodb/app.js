const express = require('express') //加载框架

const app = express() //运行框架

const jwt = require('jsonwebtoken') //token令牌

const multer = require('multer') //文件上传

// const upload = multer({ storage: storage })//应用存储设置

const path = require('path') //路径模块

const fs = require('fs') //记载模块

const mongoose = require('mongoose') //连接数据库

//数据连接
mongoose.connect('mongodb://localhost/us').then(() => {
	console.log('连接成功')
}).catch(() => {
	console.log('连接失败')
})

//创建字段
const en = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	password: String
})
const em = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	sex: String,
	age: Number,
	hobbies: String
})

//创建集合 返回集合构造函数
const p = mongoose.model('User', en);
const pro = mongoose.model("student", em)

// pro.deleteMany({name:'zhang'}).then(data=>{
// 	console.log("成功")
// })

//插入数据
// var zs=new p({
// 	name:"zhangsan",
// 	password:"123456"
// })
// zs.save().then(()=>{
// 	console.log("插入成功")
// }).catch(()=>{
// 	console.log("插入失败")
// })

//配置表单提交post数据时req.body接收
app.use(express.urlencoded())

//设置模板引擎的解析文件格式（默认解析views目录下的文件）
app.engine("html", require("express-art-template"))

//修改解析文件的存放目录（可针对单个路由）
app.set("views", "html")

app.get("/", (req, res) => {
	pro.find().then((data) => {
		res.render("shouye.html", {obj: data})
	})
})

app.get("/index", (req, res) => {
	res.render("index.html")
})

app.post("/index", (req, res) => {
	p.findOne(req.body).then((data) => {
		if (data) {
			jwt.sign({a: 123}, "lyx", {expiresIn: 2000}, (err, token) => {
				pro.find().then((data) => {
					res.render("shouye.html", {obj: data,token: token})
				})
				// res.send(token)
			})
		} else {
			res.render("index.html")
		}
	})
})

//token验证
app.post("/token", (req, res) => {
	jwt.verify(req.body.b, "lyx", (event) => {
		if (event) { //记录token是是否有效，有值则说明token过期或者无效
			res.send("登录失败")
		} else {
			res.send("登录成功")
		}
	})
})

//添加
app.post("/add", (req, res) => {
	var obj = req.body
	pro.find({name: obj.name}).then((data) => {
		var bool = function() {
			for (var key in data) {
				return true
			}
			return false
		}
		if (bool()) {
			res.redirect("/")
		} else {
			new pro(obj).save()
			res.redirect("/")
		}
	})
})

//删除
app.get("/del", (req, res) => {
	pro.deleteOne(req.query).then(data => {
		console.log("成功")
	})
	res.redirect("/")
})

//修改
app.post("/mod", (req, res) => {
	pro.findOne({name: req.body.name}).then((data) => {
		pro.updateOne({name: req.body.name},req.body).then(() => {
			res.redirect("/")
		})
	})
})

//查找
app.get("/find",(req,res)=>{
	res.render("find.html",{obj:""})
})


app.post("/find",(req,res)=>{
	pro.findOne(req.body).then((data)=>{
		if(data){
			res.render("find.html",{obj:data})
		}else{
			res.redirect("/find")
		}
		console.log(data)
	})
})

//静态资源加载
app.use("/css", express.static(path.join(__dirname, "css")))
app.use("/js", express.static(path.join(__dirname, "js")))

//监听
app.listen(2000, () => {
	console.log('成功')
})
