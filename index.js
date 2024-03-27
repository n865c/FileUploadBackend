const express=require("express");
const router = require("./routers/router");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const PORT=process.env.PORT||7000;
const app=express();
app.use(express.json());
app.use(fileUpload())
app.use("/api/v1",router);
app.listen(PORT,()=>{
    console.log(`Server started at port:${PORT}`);
});