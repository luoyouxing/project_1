//判断文件是否成功读取文件
//可以判断err对象是否为null
const fs=require('fs')

fs.readFile('1.txt','utf8',function(err,dataStr){
	if(err){
		return console.log('读取文件失败！'+err.message)
	}
	console.log('读取文件成功！'+dataStr)
})