const arr = {
	arr: [{
		name: '孟天佑',
		txt: '121245'
	}, {
		name: '若有心',
		txt: '132135'
	}]
}
const http = require('http')
const fs = require('fs')
const url = require('url')
const at = require("art-template")
const qs = require("querystring")
http.createServer((req, res) => {
	res.setHeader("content-type", "text/html;charset=utf-8") //防止乱码
	if (req.url == "/") {
		fs.readFile("./pinglun2.html", "utf8", (err, data) => {
			if (err) throw err
			let str = at.render(data.toString(), arr); //将对象形式的数据 通过{{}}的形式渲染到html模板中显示
			res.end(str)
		})
	} else if (req.url == "/pl") { 
		const gets = qs.parse(req.body) //拿到GET数据字符串转对象
		arr.arr.unshift(gets) //添加至数组中
		fs.readFile("./pinglun1.html", "utf8", (err, data) => {
			if (err) throw err
			let str = at.render(data.toString(), arr); //将对象形式的数据 通过{{}}的形式渲染到html模板中显示
			res.end(str)
		})
	}
}).listen(200, () => {
	console.log('运行成功，请在localhost:200查看')
})
