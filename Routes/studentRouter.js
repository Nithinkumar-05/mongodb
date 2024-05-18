const express = require("express");
const stModel = require("../models/studentModels");
const { getData,postData,getSpec,deleteSpec,postSpecific } = require("../controller/getStudentData");


const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));



router.get('/',getData);

router.post('/',postData);

router.get('/:id',getSpec);

router.put('/:id',postSpecific)
router.delete('/:id',deleteSpec);
module.exports = router;