const express =require('express')
const app=express();
const authrouter=require('./controller/authController')

//use AuthController Router
app.use(express.json());

app.use('/api/auth',authrouter)
module.exports=app