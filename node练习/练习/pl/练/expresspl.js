var express = require('express') //加载框架

var app = express() //运行框架

app.use(express.urlencoded()) 
//配置表单提交post数据时req.body接收

//设置模板引擎的解析文件格式（默认解析views目录下的文件）
app.engine("html", require("express-art-template"))

//修改解析文件的存放目录（可针对单个路由）
app.set("views", "html")

app.get("/", (req, res) => {
	res.render("expresspl.html", {
		arr: arr
	})
})

app.post("/post",(req,res)=>{
	var arrs=req.body;
	arr.unshift(arrs);
	res.redirect('/');
})

var arr = [{
			name: '张三',
			txt: '今天天气不错！',
		},
		{
			name: '张三2',
			txt: '今天天气不错！',
		},
		{
			name: '张三3',
			txt: '今天天气不错！',
		},
		{
			name: '张三4',
			txt: '今天天气不错！',
		},
		{
			name: '张三5',
			txt: '今天天气不错！',
		}
	]
	
//绑定监听端口
app.listen(300, function() {
	console.log('成功')
})
