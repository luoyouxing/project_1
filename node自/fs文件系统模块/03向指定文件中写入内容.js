//使用fs.writeFile()方法 向指定的文件中写入内容
//fs.writeFile(file,data[,options],{flag:"a+"},callback)
//参数一：必选参数 需要指定文件路径的字符串 表示文件的存放路径
//参数二：必选参数 表示要写入什么内容
//参数三：可选参数 表示以什么样的格式写入文件内容 默认utf8
//参数四：必选参数，文件写入完成后的回调函数
//{flag:"a+"}：表示在原文本后添加要写入的内容

//注意
//fs.writeFile()方法只能用来创建文件 不能用于创建路径
//重复调用fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的旧内容

//1.导入fs文件系统模块
const fs=require('fs')


//2.调用fs.writeFile()方法 写入文件内容
fs.writeFile('1.txt','abcd',{flag:"a+"},function(err){
	//如果文件写入成功，则err的值等于null
	//如果文件写入失败，则err的值等于一个错误对象
	console.log(err)
	
	if(err){
		return console.log('文件写入失败！'+err.message)
	}
	console.log('文件写入成功！')
})