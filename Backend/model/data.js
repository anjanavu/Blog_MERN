const mongoose=require('mongoose');
const blog=mongoose.Schema({
    name:String,
    email:String, 
    address:String,  
    phone_number:Number,
    password:String
})
const data=mongoose.model('users',blog);
module.exports=data