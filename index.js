const express=require("express");
const router = require("./routers/router");
const fileUpload = require("express-fileupload");
const dbConnect = require("./config/database");
const cloudinaryConnect = require("./config/cloudinary");
require("dotenv").config();
const PORT=process.env.PORT||7000;
const app=express();
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use("/api/v1",router);
dbConnect();
cloudinaryConnect();
app.listen(PORT,()=>{
    console.log(`Server started at port:${PORT}`);
});