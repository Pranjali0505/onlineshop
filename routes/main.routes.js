const router=require('express').Router();
const mainController=require('../controller/main.controller');



router.post('/create', mainController.createmainCategoty);

router.post('/update/:id',  mainController.updatemainCategory);

router.post('/search/:id', mainController.searchmainCategory);

router.post('/delete/:id',  mainController.deletemainCategory);


module.exports=router;