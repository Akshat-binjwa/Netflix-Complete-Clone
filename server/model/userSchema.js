const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

})

userSchema.methods.generateAuthToken= async function(){

    try {
        let UserToken= jwt.sign({_id :this._id},process.env.PRIVATE_KEY);
        this.tokens= this.tokens.concat({token:UserToken});
        await this.save();
        return UserToken;
        
    } catch (error) {
        console.log(error)
    }
}
const User= mongoose.model('USER',userSchema);
module.exports=User;