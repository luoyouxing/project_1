//1.1导入http模块
const http=require('http')
//1.2导入fs模块
const fs=require('fs')
//1.3导入path模块
const path=require('path')


//2.1创建web服务器
const server=http.createServer()

//2.2监听web服务器的request事件
server.on('request',(req,res)=>{
	//3.1获取到客户端请求的url地址
	const url=req.url
	
	//3.2把请求的url地址映射为具体文件的存放路径
	// const fpath=path.join(__dirname,url)
	
	//5.1预定义一个空的文件存放路径
	let fapth=''
	if(url==='/'){
		fpath=path.join(__dirname,'./click/index.html')
	}
	else{
		fpath=path.join(__dirname,'/click',url)
	}
	
	//4.1根据"映射"过来的文件路径读取文件内容
	fs.readFile(fpath,'utf8',(err,data)=>{
		//4.2文件读取失败，向客户端返回错误
		if(err) return res.end('404')
		//4.3读取成功
		res.end(data)
	})
})

//2.3启动服务器
server.listen(80,()=>{
	console.log('打开localhost:80查看')
})