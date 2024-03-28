const express=require("express");
const { localfileUpload, imagefileUpload, VideofileUpload, imageSizeReducer } = require("../controllers/fileUpload");
const router=express.Router();
router.post("/localfileUpload",localfileUpload);
router.post("/imagefileUpload",imagefileUpload);
router.post("/videofileUpload",VideofileUpload);
router.post("/imageSizeReducer",imageSizeReducer);
module.exports=router;