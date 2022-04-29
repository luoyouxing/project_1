//使用fs模板操作文件时，提供的路径以./或者../开头的相对路径时，很容易出现路径拼接错误的问题
//原因：代码在运行时，会执行node命令时所处的目录

// const fs=require('fs');
// fs.readFile('1.txt','utf8',function(err,dataStr){
// 	if(err){
// 		return console.log('读取文件失败！'+err.message)
// 	}
// 	console.log('读取文件成功！'+dataStr)
// })


//移植性差，不利于维护
// const fs=require('fs');
// fs.readFile('C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\node自\\1.txt','utf8',function(err,dataStr){
// 	if(err){
// 		return console.log('读取文件失败！'+err.message)
// 	}
// 	console.log('读取文件成功！'+dataStr)
// })



//__dirname 表示当前文件位置所在目录
// console.log(__dirname)

const fs=require('fs');
fs.readFile(__dirname+'/1.txt','utf8',function(err,dataStr){
	if(err){
		return console.log('读取文件失败！'+err.message)
	}
	console.log('读取文件成功！'+dataStr)
})
