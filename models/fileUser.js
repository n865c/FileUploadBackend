const mongoose=require("mongoose");
const fileSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    imageFile:{
        type:String,
    },
    tag:{
        type:String,
    }

});
module.exports=mongoose.model("file",fileSchema);