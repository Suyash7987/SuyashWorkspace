const CustomError = require('../Utils/CustomError');
const User =require('./../Models/userModel');
const asyncErrorHandler = require('./../Utils/asyncErrorHandler');
const jwt =require('jsonwebtoken')
const util =require('util')
const crypto=require('crypto')
const sendEmail=require('./../Utils/email')

// Signs a JWT using user ID, a secret string, and expiration.

const signToken =id=>{
  return jwt.sign({id},process.env.SECRET_STR,{
        expiresIn:process.env.LOGIN_EXPIRES
    } )
}

exports.signup= asyncErrorHandler(async (req,res,next)=>{
     const newUser=await User.create(req.body)
     const token = signToken(newUser._id) // generate Jwt Token
     const cookieExpireDays = parseInt(process.env.LOGIN_EXPIRES);

res.cookie('jwt', token, {
  expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
  httpOnly: true 
});
   
     res.status(201).json({
         status:"Success",
         token,
         data:{
             user:newUser
         }
     })
     next();
});

exports.login=asyncErrorHandler(async(req,res,next)=>{
      const email=req.body.email;
      const password=req.body.password
      
    //   const{email,password}=req.body;

   if(!email||!password){
     const error = new CustomError('Please Provide Email and Password',400)
      return next(error);
   }
   // Check whether the User is exist or not
   const user=await User.findOne({email:email}).select('+password')

  //Check if the user exists & password matches 
  if(!user||!(await user.comparepasswordindb(password))){
   const error =new CustomError("Incorrect email or Password",400)
    return next(error);
  }
   const token=signToken(user._id)
   const cookieExpireDays = parseInt(process.env.LOGIN_EXPIRES) || 90;
res.cookie('jwt', token, {
  expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000), /// convert Days into Mili Seconds
  httpOnly: true
});
   res.status(200).json({
        status:"Success",
        token,
        user
   })
});

exports.logout = asyncErrorHandler((req, res) => {
  res.cookie("jwt", "", {
    expires: new Date(Date.now() + 10 * 1000), // expires in 10 seconds
    httpOnly: true,
  });
  res.status(200).json({
    status: "Success",
    message: "Logged out successfully",
  });
});
exports.protect=asyncErrorHandler(async(req,res,next)=>{
     //1. Read the token and check if it exist or not
       const testToken = req.headers.authorization;
       let token;
       if(testToken && testToken.startsWith('Bearer')){
        token =  testToken.split(' ')[1];
       }
       if(!token){
         return next(new CustomError('You are not Logged in..!! Please Login to Continue '))
       }
     //2. Validate the token
   let decodedtoken;
  try {
    decodedtoken = await util.promisify(jwt.verify)(token, process.env.SECRET_STR);

  } catch (err) {
    //check for JWT expiration and provide a custom message
    if (err.name === 'TokenExpiredError') {
      return next(new CustomError('Your login session has expired. Please log in again.', 401));
    } else if (err.name === 'JsonWebTokenError') {
      return next(new CustomError('Invalid token. Please log in again.', 401));
    } else {
      return next(err); // Other unexpected JWT errors
    }
  }
    // 3.If the user exists in the Database or not 
   const user = await User.findById(decodedtoken.id)
   if(!user){
     const error =new CustomError('The user with the given token does not exist')
     next(error);
    }
    //4. Allow the user to access route
    req.user=user
    next();
})

exports.restrict=(role)=>{
     return(req,res,next)=>{
         if(req.user.role!==role){
          const error =new CustomError('You do not have permission to perform this action',403)
          next(error)
         }
         next();
     }
}
exports.forgotPassword = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new CustomError('User with this email not found', 404));

  const resetToken = user.createResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
  const message = `We have received a Password Reset request.\nUse the link below to reset your password:\n\n${resetUrl}\n\n`;
// console.log('user',user)
  try {
    await sendEmail({
      email: user.email,
      subject: 'Password Change Request',
      message,
    });
    res.status(200).json({
      status: 'Success',
      message: 'Reset link sent to your email.',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });
    console.error("Failed to send reset email:", err);
    return next(new CustomError('Failed to send reset email. Try again later.', 500));
  }
});

exports.resetPassword = asyncErrorHandler(async (req, res, next) => {
  // 1. Hash the incoming token
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

  // 2. Find user based on hashed token and expiry
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetTokenExpires: { $gt: Date.now() }
  });

  if (!user) {
    return next(new CustomError('Token is invalid or expired', 400));
  }

  // 3. Update password and clear reset fields
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetTokenExpires = undefined;
  user.passwordChangedAt = Date.now();

  await user.save();

  // 4. Issue new JWT
  const token = signToken(user._id);
  res.status(200).json({
    status: 'Success',
    token,
    user
  });
});