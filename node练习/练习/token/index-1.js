const express=require('express')//加载框架

const app=express()//运行框架

const jwt=require('jsonwebtoken')//token令牌

const multer=require("multer") 

const path=require('path')

const fs=require('fs')

// 设置文件保存路径和命名规则
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'img')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname
    cb(null,uniqueSuffix)
  }
})

//应用存储设置
const upload = multer({ storage: storage })

const mongoose=require('mongoose')
//连接数据库
mongoose.connect("mongodb://localhost/users").then((res)=>{
	console.log("连接成功")
}).catch((err)=>{
	console.log(err, "连接失败")
})

//设置字段
var people=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	password:String
})

//设置form的字段
var product=new mongoose.Schema({
	name:String,
	pic:String,
	num:Number,
	money:String,
	classify:Array
})

//设置form表单的集合
var pro=mongoose.model("pro",product)
//设置集合
var p = mongoose.model("username", people)

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
app.engine("html",require("express-art-template"))

//修改解析文件的存放目录（可针对单个路由）
app.set("views","html")

app.get("/",(req,res)=>{
	pro.find().then((data)=>{
		res.render("shouye.html",{obj:data})
	})
})

app.get("/index",(req,res)=>{
	res.render("index.html")
})

app.post("/post",(req,res)=>{
	p.findOne(req.body).then(data=>{
		if (data) { //data==data!=null
			jwt.sign({a: 123}, "lyx", {expiresIn: 20000}, (err, token) => {
				pro.find().then((data)=>{
					res.render("shouye.html",{obj:data,token:token})
				})
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

app.post("/add",upload.single("pic"),(req,res)=>{
	var obj=req.body
	obj.pic=req.file.filename
	new pro(obj).save()
	res.redirect("/")
})

//修改
app.get("/change",(req,res)=>{
	pro.findOne(req.query).then(data=>{
		// console.log(data)
		res.render("form.html",{obj:data})
	})
})

app.post("/change",upload.single("pic"),(req,res)=>{
	var obj=req.body
	obj.pic=req.file && req.file.filename//如过前一个存在使用后一个的值
	// console.log(req.file)
	pro.findOne({name:obj.name}).then((data)=>{
		if(obj.pic){
			fs.unlink("img/"+data.pic,()=>{
				pro.updateOne({name:obj.name},obj).then(()=>{
					res.redirect("/")
				})
			})
		}else{
			pro.updateOne({name:obj.name},obj).then(()=>{
		res.redirect("/")
			})
		}
	})
})

//删除
app.post("/del",(req,res)=>{
	pro.findOne(req.body).then((data)=>{
		fs.unlink("img/"+data.pic,()=>{
			pro.deleteOne(req.body).then(()=>{
				res.send("成功")
			})
		})
	})
})

//查找
app.get("/find",(req,res)=>{
	res.render("find.html",{obj:""})
})


app.post("/find",upload.single("pic"),(req,res)=>{
	pro.findOne(req.body).then((data)=>{
		console.log(data)
		res.render("find.html",{obj:data})
		// res.send(data.pic)
	})
})

//外用数据接口（不限定get/post）
//跨域问题：出于安全考虑：协议不同 端口不同 网址不同等数据无法相互访问
//解决问题： cors jsonp（限定get方式）
app.get("/data",(req,res)=>{
	pro.find(req.query).then((data)=>{
		res.setHeader("Access-Control-Allow-Origin","*")//CORS解决跨域
		res.send(data)
	})
})
app.post("/data",(req,res)=>{
	pro.find(req.body).then((data)=>{
		res.setHeader("Access-Control-Allow-Origin","*") //CORS解决跨域
		res.send(data)
	})
})


app.use("/",express.static(path.join(__dirname,"img")))

//设置监听
app.listen(2020,()=>{
	console.log('成功')
})