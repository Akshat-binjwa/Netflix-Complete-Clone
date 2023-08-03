const dotenv = require('dotenv');
const express= require('express')
const myregistra=require('./router/registration')
const myLogin= require('./router/Login')
const App = express();
// const User=require('./model/userSchema')
dotenv.config({path: './.env'})

require('./DB/connection')
App.use(express.json());
App.use('/register',myregistra)
App.use('/login',myLogin);

const PORT=process.env.PORT;

App.get('/',(req,res)=>{
    res.cookie('jwtToken','akki');
    res.send("Hello Home")
})
App.get('/about',(req,res)=>{
    res.send("Hello about")
})
App.get('/contact',(req,res)=>{
    res.send("Hello contact")
})

App.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});