//获取路径中的语法扩展名
//ptah.extname()语法格式
//参数解读
//path<string>必选参数 表示一个路径的字符串
//返回<string>返回得到的扩展名字符串

const path=require('path')

//文件存放路径
const fpath='index.html'

const fext=path.extname(fpath)
console.log(fext)