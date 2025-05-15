// Focuses on Routes and Middleware
//Import Packages 
const express = require('express');
const morgan = require('morgan');
const moviesRouter = require('./Routes/moviesRoutes');
const userRoute =require('./Routes/userRoute')
const authRouter = require('./Routes/authRouter')
let app = express();

const logger = function(req, res, next){
    console.log('Custom middleware called');
    next();
}

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
//USING ROUTES
app.use('/api/v1/movies', moviesRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRoute);
app.all('*',(req,res,next)=>{
    // res.status(404).json({
    //      status:"Fail",
    //      message:"Can't find the url on the server"
    // }) 
    const err =new Error("Can't find the url on the server");
    err.status='fail',
    err.statusCode=404
    next(err);
})
// Global Error Handling Midldeware
app.use((error,req,res,next)=>{
    error.statusCode=error.statusCode||500;
     error.status=error.status||'error'
    res.status(error.statusCode).json({
        status:error.statusCode,
        message:error.message
     });
})

module.exports = app;

