//在一个自定义模块中，默认情况下，module.exports={}

const age=20

//向modeule.exports对象中挂载username属性
module.exports.username='zs'

// module.exports.sayHello=function(){
// 	console.log('Hello')
// }
module.exports.sayHello=()=>{
	console.log('Hello')
}

module.exports.age=age


//使用require()方法导入模块时 导入结果以module.exports指向对象为准
//让module.exports指向一个全新的对象
module.exports={
	username:'小黑',
	sayHi(){
		console.log('Hi')
	}
}