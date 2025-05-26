const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter the Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Enter a Valid Email"]
  },
  photo: {
    type: String
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, "Please Enter the Password"],
    minlength: 8,
    select: false
  },
  confirmPassword: {
    type: String,
    required: [true, "Please Confirm your Password"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Password and confirm Password does not match"
    }
  },
  active:{
      type:Boolean,
      default:true,
      select:false,
  },
  passwordchangedate: Date,
  passwordResetToken: String,
  passwordResetTokenExpires: Date
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

//Used for soft delete and deactivation
userSchema.pre(/^find/,function(next){
   this.find({
     active:{$ne:false}
   })
   next();
})

// Compare password method
userSchema.methods.comparepasswordindb = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Generate reset password token
userSchema.methods.createResetPasswordToken = function(){
  const resettoken = crypto.randomBytes(32).toString('hex');
  
  this.passwordResetToken = crypto.createHash('sha256').update(resettoken).digest('hex');
  this.passwordResetTokenExpires = Date.now() + 10 * 60 * 1000; // 10 mins
  console.log(resettoken,this.passwordResetToken)
  return resettoken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;

