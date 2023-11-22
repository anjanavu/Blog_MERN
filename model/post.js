const mongoose=require('mongoose');
const blog=mongoose.Schema({
    title:String,
    description:String,
    image:String 

})
const data=mongoose.model('posts',blog);
module.exports=data