const arr = {
	arr: [{
			txt: '1231654'
		},
		{
			txt: '12312543654'
		},
		{
			txt: '12316536554'
		}
	]
}
const http = require('http')
const fs = require('fs')
const url=require('url')
let at=require("art-template");// 模板引擎 
let qs=require('querystring')

http.createServer((req, res) => {
	res.setHeader("content-type", "text/html;charset=utf-8")//防止乱码
	if (req.url == "/") {
		//异步读取文件内容
		fs.readFile("./pinglun.html", "utf8", (err,data) => {
			if (err) throw err
			let str=at.render(data.toString(),arr);//将对象形式的数据 通过{{}}的形式渲染到html模板中显示
			res.end(str)
		})
	}else if(/^\/pl?/ig.test(req.url)){
		res.statusCode=302;//设置响应状态码为302(重定向)
		res.setHeader("location","/")//设置响应头location 告诉浏览器重定向地址 如果不加这两项 则会出现一直刷新后一直重复插入
		let gets=qs.parse(url.parse(req.url).query)//拿到get数据并转成对象 
		arr.arr.unshift(gets)//添加至数组中
		fs.readFile("./pinglun.html", "utf8", (err,data) => {
			if (err) throw err
			let str=at.render(data.toString(),arr);//将对象形式的数据 通过{{}}的形式渲染到html模板中显示 
			res.end(str)
		})
	}
}).listen(2000, () => {
	console.log('运行成功')
})