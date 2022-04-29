//获取路径中的文件名
//1.path.basename()语法格式

//语法格式
//path.basename(path[,ext])
//参数导读
//path<string>必选参数，表示一个路径的字符串
//ext<string>可选参数，表示文件扩展名
//<string>表示路径中的最后一部分


const path=require('path')

//定义文件的存放路径
const fpath='index.html'

// const fullName=path.basename(fpath)
// console.log(fullName)//index.html

//只拿文件名，不需要扩展名
const th=path.basename(fpath,'html')
console.log(th)//index
