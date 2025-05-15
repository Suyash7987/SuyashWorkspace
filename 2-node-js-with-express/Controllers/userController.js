const CustomError = require('../Utils/CustomError');
const User =require('./../Models/userModel');
const asyncErrorHandler = require('./../Utils/asyncErrorHandler');

exports. getAllUsers=asyncErrorHandler(async(req,res,next)=>{
     const users=await User.find()
     res.status(200).json({
         status:"success",
         result:users.length,
         data:{
             users
         }
     })
})

const filterReqObj =(obj,...allowedFields)=>{
         const newObj ={};
         Object.keys(obj).forEach(prop=>{
             if(allowedFields.includes(prop))
                newObj[prop]=obj[prop]
         })
         return newObj;
}
exports.updatePassword =asyncErrorHandler(async(req,res,next)=>{
      //1. Get current USer Data from Database
      const user =await User.findById(req.user._id).select('+password')

      //2. Check whether the Current password is correct or not
      if(!(await user.comparepasswordindb(req.body.currentPassword,user.password))){
         return next(new CustomError('The Current Password Provided is Wrong',401))
      }
      //3. If Supplied password is Correct than Update the Password
      user.password =req.body.password
      user.confirmPassword =req.body.confirmPassword;
      await user.save()
      //4. Login User and Send JWT
       const token =signToken(user._id);
       res.status(200).json({
          status:"Success",
          token,
          data:{ 
             user
          }
       })
    })

exports.updateMe =asyncErrorHandler(async(req,res,next)=>{
    //1.Check if the body contain password and confirm password
    if(req.body.password||req.body.confirmPassword){
         return next(new CustomError('You cannot update your password using this end point ',401))     
    }

    //Update User detail
     const filterObj =filterReqObj(req.body,'name','email',);
    const updatedUser =await User.findByIdAndUpdate(req.user.id,filterObj,{runValidators:true,new:true});
    res.status(200).json({
        status:'success',
        data:updatedUser
    })

})
exports.deleteMe =asyncErrorHandler(async(req,res,next)=>{
     await User.findByIdAndUpdate(req.user.id,{active:false})
     res.status(204).json({
         status:'success',
         data:null
     })
})