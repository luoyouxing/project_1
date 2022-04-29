const express=require('express')
const app=express()

app.get('/',(req,res)=>{
	res.send('hello')
})

app.post('/',(req,res)=>{
	res.send('Post Request')
})

app.listen(2000,()=>{
	console.log('成功')
})