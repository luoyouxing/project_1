var arr = ""
const http = require('http')
const fs = require('fs')
// const url = require('url')
// const at = require("art-template")
const querystring = require("querystring")
http.createServer((req, res) => {
	res.setHeader("content-type", "text/html;charset=utf-8") //防止乱码
	if (req.url == "/pl") {
		fs.readFile("./pinglun1.html", "utf8", (err, data) => {
			req.on('data', (chunk) => {
				arr += chunk
			})
			req.on('end', () => {
				arr = querystring.parse(arr)
				if (arr.name$$arr.txt) {
					res.write(arr.name)
					res.write(arr.txt)
				}
				res.end()
			})
		})
	}
}).listen(200, () => {
	console.log('运行成功，请在localhost:200查看')
})
http.createServer((req, res) => {
	res.setHeader("content-type", "text/html;charset=utf-8") //防止乱码
	if (req.url == "/pl") {
		fs.readFile("./pinglun1.html", "utf8", (err, data) => {
			let arr=
		})
	}
}).listen(200, () => {
	console.log('运行成功，请在localhost:200查看')
})
