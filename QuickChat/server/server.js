const dotenv =require('dotenv')
dotenv.config({path:'./config.env'})
const dbconfig =require('./config/dbconfig')
const app =require('./app')


const port =process.env.PORT_NUMBER||5000;   
app.listen(port,()=>{
    console.log("Server has Started on Port :"+port)
}) 