let path=require("path");//路径模块

console.log(_dirname);//目录地址
console.log(_filename);//目录地址

console.log(path.join("a","b","..","."));//拼接地址

console.log(path.join(_dirname,"html","index.html"));//拼接地址

console.log(path.parse('/home/user/dir/file.text'));//解析文件地址（获取后缀名等信息）


//旧款url模板
let url=require("url")//网址模板
let res=url.parse("http://www.baidu.com:2000?a=123&b=456")//解析网址
console.log(res);
console.log(res.query);//获取GET参数（字符串）


//新版url模块（es6模块化）
// import asd from "url";
// let res=new asd("http://www.baidu.com:2000?a=123&b=456");
// console.log(res);


let qs=require("querystring")
let obj=qs.parse(res.query) //GET数据字符串转对象
console.log(obj)
console.log(qs.stringify(obj))//对象转GET数据字符串