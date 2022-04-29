//使用tab键 快速补全路径
//esc键 清空当前已输入的命令
//cls命令 清空终端

//fs.readFile()方法 读取指定文件中的内容
//fs.writeFile()方法 向指定的文件中写入内容

//使用fs模块操作文件 则需要先进行导入
//const fs=require('fs')

//使用fs.readFile()方法 读取指定文件 语法格式
//fs.readFile(path[,options],callback)
//参数一 必选参数 字符串 表示文件的路径
// 参数二 可选参数 表示以什么编码格式来读取文件
// 参数三 必选参数 文件读取完成之后 通过回调函数拿到读取的结果


//1.导入fs模块 操作文件
const fs=require('fs')

//2.导入fs.readFile()方法读取文件
//参数1：读取文件的存放路径
//参数2：读取文件时采用的编码格式 默认是utf8 utf8
//参数3：回调函数，拿到读取失败和成功的结果
fs.readFile('1.txt','utf8',function(err,dateStr){
	//2.1打印失败的结果
	//如果读取成功 err的值为null
	//读取失败 err的值为错误对象，dataStr的值为undefined
	console.log(err)
	console.log('-----') 
	//2.2打印成功的结果
	console.log(dateStr)
})
