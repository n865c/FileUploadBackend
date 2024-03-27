const express=require("express");
const { localfileUpload, imagefileUpload } = require("../controllers/fileUpload");
const router=express.Router();
router.post("/localfileUpload",localfileUpload);
router.post("/imagefileUpload",imagefileUpload);
module.exports=router;