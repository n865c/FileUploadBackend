const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    const database=mongoose.connect(process.env.database_url).then(()=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log("Not able to connect database")
    });

}
module.exports=dbConnect;