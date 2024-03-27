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