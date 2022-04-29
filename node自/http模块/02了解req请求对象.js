const http=require('http')
const server=http.createServer()

//req时是请求对象 包含了与客户端相关的数据和属性
server.on('request',(req,res)=>{
	//req.url 是客户端请求的url地址
	const url=req.url
	
	//req.method 客户端请求的method类型
	const method=req.method
	
	const str=`321354${url},${method}`
	console.log(str)
	//调用res.end方法，向客户端响应内容
	res.end(str)
})

server.listen(80,()=>{
	console.log('运行成功，请在http://localhost:80查看页面')
})