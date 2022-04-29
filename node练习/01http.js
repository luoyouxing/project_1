var http=require("http");//加载http模块

//创建服务，并设置reques请求和response响应
var app=http.createServer(function(request,response){
	console.log(request.url)//请求路径
	console.log(request.method)//请求方式
	
	response.setHeader("content-type","text/html;charset=utf8")//设置响应头，防止乱码
	response.write("<h1>首页</h1>")//设置响应内容（设置响应头，防止乱码）
	response.end()//结束响应（后面的代码不会运行）
})

//设置监听端口
app.listen("2222",function(){
	console.log("运行成功，请打开http://localhost:2222查看页面")
})