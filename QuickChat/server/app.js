const express =require('express')
const app=express();
const authrouter=require('./controller/authController')
const userRouter=require('./controller/userController')
const chatRouter=require('./controller/chatController')

//use AuthController Router
app.use(express.json());

app.use('/api/auth',authrouter)
app.use('/api/user',userRouter)
app.use('/api/chat',chatRouter)



module.exports=app