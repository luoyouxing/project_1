let http=require("http")
let fs=require("fs")//加载模块

http.createServer((req,res)=>{
	res.setHeader("content-type","text/html;charset=utf-8")
	if(req.url=="/"){
		//异步读取文件内容
		fs.readFile("index.html","utf8",function(err,data){
			if(err) throw err
			console.log(data)
			res.end(data)
		})
	}else if(req.url=="/about.html"){
		//异步写入文件
		fs.writeFile("index.html","123456789",{flag:"a+"},(err)=>{
			if(err) throw err
			console.log("写入成功")
			res.end("关于我们")
		})
	}else{
		res.end("没有了哦")
	}
}).listen("2222",()=>{
	console.log("运行成功")
})