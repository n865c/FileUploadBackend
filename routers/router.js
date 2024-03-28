const express=require("express");
const { localfileUpload, imagefileUpload, VideofileUpload } = require("../controllers/fileUpload");
const router=express.Router();
router.post("/localfileUpload",localfileUpload);
router.post("/imagefileUpload",imagefileUpload);
router.post("/videofileUpload",VideofileUpload);
module.exports=router;