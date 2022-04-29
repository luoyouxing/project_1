//1.导入需要的fs文件系统模块
//2.使用fs.readFile()方法 读取01成绩.txt文件
//3.判断文件是否读取失败
//4.文件读取成功后 处理成绩数据
//5.将处理完成的成绩数据 调用fs.writeFile()方法，写入到新的文件中


//1.导入需要的fs文件系统模块
const fs=require('fs')

//2.调用fs.readFile()方法读取内容
fs.readFile('01成绩.txt','utf8',function(err,dataStr){
	//判断是否读取成功
	if(err){
		return console.log('读取失败！'+err.message)
	}
	// console.log('文件读取成功'+dataStr)
	
	//4.1把成绩的数据 按空格进行分割
	const arrOld=dataStr.split(' ')
	// console.log(arrOld)
	//4.2循环分割后的数组，对每一项数据进行字符串的替换操作
	const arrNew=[]
	arrOld.forEach(item=>{
		arrNew.push(item.replace('=','：'))
	})
	// console.log(arrNew)
	//4.3把新数组中的每一项进行合并，得到一个新的字符串
	const newStr=arrNew.join('\r\n')
	// console.log(newStr)
	
	//5.调用fs.writeFile()方法 把处理完毕的成绩 放入新的文件中
	fs.writeFile('01成绩-1.txt',newStr,function(err){
		if(err){
			return console.log('写入文件失败！'+err.message)
	}
	console.log('文件写入成功！')
	})
})