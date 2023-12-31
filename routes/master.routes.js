const router=require('express').Router();
const masterController=require('../controller/master.controller');

router.post('/create',  masterController.createmasterCategoty);

router.post('/update/:id',  masterController.updatemasterCategory);

router.post('/search/:id', masterController.searchmasterCategory);

router.post('/delete/:id',  masterController.deletemasterCategory);


module.exports=router;