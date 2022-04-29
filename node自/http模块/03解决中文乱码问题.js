const http=require('http')
const server=http.createServer()

server.on('request',(req,res)=>{
	//定义一个字符串，包含中文内容
	const str='请求错误'
	//调用res.setHeader()方法 设置Content-Type响应头 解决中文乱码问题
	res.setHeader('Content-Type','text/html;charset=utf-8')
	res.setH
	//res.end()将内容响应给客户端
	res.end(str)
})

server.listen(80,()=>{
	console.log('运行成功，请在http://localhost:80查看页面')
})