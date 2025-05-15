const nodemailer =require('nodemailer');

const sendemail=async(option)=>{
   console.log('option', option)
   
  //Create a Transporter 
   const transporter =nodemailer.createTransport({
      service: 'Gmail',
      auth:{
         user:process.env.EMAIL_USER,
         pass:process.env.EMAIL_PASSWORD
      }
   })

   //Define email options
   const emailOptions={
     from:'Cineflex support<support@cineflex.com>',
     to:option.email,
     subject:option.subject,
     text:option.message
   }
   await transporter.sendMail(emailOptions)
}

module.exports=sendemail