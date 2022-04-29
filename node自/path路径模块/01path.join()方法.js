//path模块 处理路径的模块 提供一系列的方法和属性 用来满足用户对路径的处理需求

//path.join()方法 将多个路径片段拼接成一个完整的路径字符串
//path.basename()方法 从路径字符串中 将文件名解析出来

//导入方法 const path=require('path')

const path=require('path')
const fs=require('fs')

//注意:../会抵消前面的路径
// const pathStr=path.join('/a','/b/c','../','./d','e')
// console.log(pathStr)//\a\b\d\e

// const pathStr=path.join('/a','/b/c','../../','./d','e')
// console.log(pathStr)//\a\d\e

fs.readFile(path.join(__dirname,'1.txt'),'utf8',function(err,dataStr){
	if(err){
		return console.log(err.message)
	}
	console.log(dataStr)
})