const cloudinary = require('cloudinary').v2;
require("dotenv").config();
const cloudinaryConnect=()=>{
    try{
        cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
          });
    }catch(err){
        console.log("Not able to upload the file")
    }
}
module.exports=cloudinaryConnect;

