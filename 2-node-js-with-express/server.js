//server startup, environment setup, and DB connection.

const dotenv = require('dotenv');
const mongoose =require('mongoose')
const app = require('./app');

dotenv.config({path: './config.env'});//Loads the Variable from Config.env file
//For connecting MongoDb
mongoose.connect(process.env.CONN_STR,{
    useNewURLParser:true // tells Mongoose to use the new MongoDB connection string parser
}).then((conn)=>{
    
    console.log("DB connection Successful") 
}).catch((error)=>{
  console.log("Some Error has occured")
})

const port = process.env.PORT || 3000;

// Start the Server
app.listen(port, () => {
    console.log('server has started...');
})