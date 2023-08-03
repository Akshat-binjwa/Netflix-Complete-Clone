const express = require('express');
const server = express.Router();
const jwt = require('jsonwebtoken')
const user = require('../model/userSchema')

server.get('/', (req, res) => {
    res.send('YO Login');
})

server.post('/', (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
 
    user.findOne({ email: email })
        .then(async (UserExist) => {
            if (UserExist) {

                if (UserExist.password == password) {
                    
                    let token = await UserExist.generateAuthToken();
                  
                    res.cookie('jwtToken',token,{expires:new Date(Date.now()+ 2000000000), httpOnly:true});
                   
                    
                    return (res.status(200).json({ message: "User Login Sucessfull" }))

                }
                else{
                    return res.status(400).json({message: "Password Incorrect"})
                }
            }

            res.status(400).json({ message: "User Not Found" })

        }
        )

})

module.exports = server;