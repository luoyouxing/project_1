// console.log(exports)
// console.log(module.exports)
// console.log(exports===module.exports)

//exports对象
//默认情况下 exports和module.exports指向同一个对象 最终的共享结果 以module.exports指向的对象为准
const username='zs'

// module.exports.username=username
exports.username=username
exports.age=20

exports.sayHello=()=>{
	console.log('大家好')
}