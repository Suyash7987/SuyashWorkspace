const express =require('express')
const router =express.Router()
const User =require('./../models/user')
const bcrypt =require('bcryptjs')
const jwt =require('jsonwebtoken')

router.post('/signup',async(req,res)=>{
   try{
      //1. if the User already exist
      const user= await User.findOne({email:req.body.email})
      //2. if exist send the error message  
      if(user){
          return res.send({
              message:"user already exist"
           })
      }
      //3. encrypt the password 
      const hashedPassword= await bcrypt.hash(req.body.password,10)
      req.body.password =hashedPassword
      //4.Create new user and save it in database
         const newUser=new User(req.body)
         await newUser.save(); 
          res.send({
              message :"User created successfully",
              success:true

          })
      }
   catch(error){
     res.send({
         message:error.message,
         status:false
     })
   }
})
router.post('/login',async(req,res)=>{
      //1. Validate the user
       try{
          const user =await User.findOne({email:req.body.email})

          if(!user){
             return res.send({
                message:"User does not Exist",
                success:false
             })
          }
         const isValid =await bcrypt.compare(req.body.password,user.password)
          if(!isValid){
             return res.send({
                 message: "Invalid Password",
                 success:false
             })
          }
          const token = jwt.sign({userID:user._id},process.env.SECRET_KEY,{expiresIn:"1d"})
          res.send({
              message:"User Login Succesfully",
              success:true,
              token:token

          })
       }catch(error){
           res.send({
              message:'Login Failed',
              success:false
           })
       }

      
})
module.exports=router