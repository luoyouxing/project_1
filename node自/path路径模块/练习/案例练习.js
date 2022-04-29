//1.1 导入fs模块
const fs = require('fs')

//1.2 导入path模块
const path = require('path')

//1.3 定义正则表达式，匹配<style></style><script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regSprit = /<script>[\s\S]*<\/script>/

//2.1 调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, '键盘控制方向.html'), 'utf8', function(err, dataStr) {
	//2.2 读取html文件失败
	if (err) return console.log('读取html文件失败！' + err.message)
	//2.3 读取文件成功后，调用对应的三个方法，分别拆解出css，js，html文件
	resolveCSS(dataStr)
	resolveJS(dataStr)
	resolveHTMl(dataStr)
})


///3.1 定义处理css样式的方法
function resolveCSS(htmlstr) {

	//3.2 使用正则提取需要的内容
	const rl = regStyle.exec(htmlstr)
	// console.log(rl)

	//3.3将提取出来的样式字符串 进行字符串的replace替换操作
	const newcss = rl[0].replace('<style>', '').replace('</style>', '')
	// console.log(newcss)

	//3.4 调用fs.writeFile()方法 将提取的样式写入click目录中的index.css的文件里面
	fs.writeFile(path.join(__dirname,'./click/index.css'),newcss,function(err){
		if(err){
		return console.log('文件写入失败！'+err.message)
	}
	console.log('文件写入成功1！')
	})
}


//4.1 定义处理js样式的方法
function resolveJS(htmlstr){
	//4.2 使用正则提取需要的内容
	const jl=regSprit.exec(htmlstr)
	
	//4.3 将提取出来的样式字符串 进行字符串中的replace替换操作
	const newjs=jl[0].replace('<script>','').replace('</script>','')
	
	//4.4 调用fs.writeFile()方法 将提取的样式写入click目录中的index.css的文件里面
	fs.writeFile(path.join(__dirname,'./click/index.js'),newjs,function(err){
		if(err){
			return console.log('文件写入失败！'+err.message)
		}
		console.log('文件写入成功2！')
	})
}


//5.1 定义处理html结构的方法
function resolveHTMl(htmlstr){
	//5.2 将字符串调用replace方法 把内嵌的style和script标签 替换为外联的link和script标签
	const ht=htmlstr.replace(regStyle,'<link rel="stylesheet" href="index.css">').replace(regSprit,'<script src="index.js"></script>')
	
	//5.3 写入index.html中
	fs.writeFile(path.join(__dirname,'./click/index.html'),ht,function(err){
		if(err){
			return console.log('文件写入失败！'+err.message)
		}
		console.log('文件写入成功3！')
	})
}