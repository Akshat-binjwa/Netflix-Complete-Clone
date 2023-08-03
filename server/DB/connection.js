const mongoose=require('mongoose');
const DB=process.env.Database


mongoose.set('strictQuery', true);
mongoose.connect(DB).then(()=>{console.log('DataBase Connection Successfull')}).catch((err)=>{console.log('error')})
