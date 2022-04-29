const express=require('express')

const app=express()

//使用express.static()方法，快速对外提供静态资源
// app.use(express.static('xxx'))
// 如果托管多个静态资源目录，多次调用express.static()函数
//在托管的静态资源访问路径之前，挂载路径前缀
// app.use('/xxx',express.static('xxx'))

app.listen(80,()=>{
	console.log('成功')
})