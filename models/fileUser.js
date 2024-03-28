const mongoose=require("mongoose");
const nodemailer=require("nodemailer");
require("dotenv").config();
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
fileSchema.post("save",async function(doc){
    try{
       
        const transporter=  nodemailer.createTransport({
            host:process.env.MAIL_HOST ,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS
            }
          });
       console.log(transporter);
          const info = await transporter.sendMail({
            from: 'Nancy kumari', // sender address
            to: doc.email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: `<b>Hello world?</b><p>Your file uploaded on cloudinary</p> <h1>View here </h1>${doc.imageFile}`, // html body
          });
          console.log("mail sent");
    }catch(err){
      console.error("error");
    }
})

module.exports=mongoose.model("file",fileSchema);