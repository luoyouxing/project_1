//1.导入http模块
const http=require('http')

//2.创建web服务器实例
const server=http.createServer()

//3.为服务器绑定request事件 监听客户端请求
server.on('request',function(req,res){
	console.log('123165')
})

//4.启动服务器
server.listen(1111,()=>{
	console.log("运行成功，请打开http://localhost:2000查看页面")
})