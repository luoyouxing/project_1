// token令牌 
// 登录验证用
// npm install jsonwebtoken -s

var jwt=require("jsonwebtoken")

var user={
	name:"zhangsan",
	password:"123465"
}

var str="";


// token签发：
jwt.sign({a:123},"hello",{expiresIn:2},(err,token)=>{
	if(err) throw err
	str=token
	console.log(token)
	// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjoxMjMsImlhdCI6MTY0NzMyNjA2NiwiZXhwIjoxNjQ3MzI2MDc2fQ.8FteBw52mNhPWUQ2aHFCKui82RXsVWr1usqvPztyWaY
	
	
	
	setTimeout(function(){

		// token验证
		jwt.verify(str,"hello",(event)=>{
			console.log(event && event.name) 
			//TokenExpiredError  token过期
			//JsonWebTokenError  token无效
			console.log("已登录")
		})
		
	},1000)	

	
})







