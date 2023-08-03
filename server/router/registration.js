const express = require('express');
const route = express.Router();
const User = require('../model/userSchema')
 
route.get('/', (req, res) => {
    res.send('Hi Register');
})
route.post('/', (req, res) => {
    const { name, email, number, password, cpassword } = req.body;

    if (!name || !email || !number || !password || !cpassword) 
    {
      return  res.status(422).json({message:"All Details are not Filled"});
    }

    User.findOne({ email: email })
        .then((UserExist) => {
            if (UserExist) 
            {
             return   res.status(422).json({message:"User Already Exist"});
            }
            else if(password != cpassword)
            {
                return res.status(422).json({message:"Password and Confirm Password must be same"})
            }
             
            const user= new User(req.body) 
            user.save().then(()=>{

               return res.status(200).json({message:'User Successfully Registered'})
            })}
            ).catch((error)=>{ return res.status(422).json({message:"Something went wrong"})})
            
            
        })
module.exports = route;