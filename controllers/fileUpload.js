const fileUser = require("../models/fileUser");

const cloudinary=require("cloudinary").v2;
exports.localfileUpload=async(req,res)=>{
   try{
    const file=req.files.file;
    const path=__dirname+"/files/"+Date.now()+`.${file.name.split(".")[1]}`;
    console.log(path);
    await file.mv(path);
    res.status(200).json({
        success:false,
        message:"successfully uploaded file",
    })
   }catch(err){
    res.status(500).json({
        success:false,
        message:"unable to upload file",
    })
   }
}
exports.imagefileUpload=async (req,res)=>{
    try{
        console.log(req.body);
    const {name,email,tag}=await req.body;
    const file=req.files.imageFile;
    console.log(file);
    const imageFormat=["jpg","jpeg","png"];
    const extension=file.name.split(".")[1].toLowerCase();
    if(!imageFormat.includes(extension))
    return res.status(400).json({
success:false,
message:"Image file not supported"});
const folder="fileupload";
const response=await cloudinary.uploader.upload(file.tempFilePath,{folder});
try{
    const filedata=await fileUser.create({
        name,email,tag,imageFile:response.secure_url
    });
    res.status(200).json({
        success:true,
        message:"file uploaded successfully on database and cloudinary",
    });
}catch(err){
    res.status(500).json({
        success:false,
        message:"unable to upload file on database and cloudinary",
    })
}
console.log(response);
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message,
        })
    }

}