const express=require("express");
const { localfileUpload } = require("../controllers/fileUpload");
const router=express.Router();
router.post("/localfileUpload",localfileUpload);
module.exports=router;