const router=require('express').Router();
const subController=require('../controller/sub.controller');

router.post('/create', subController.createsubCategoty);

router.post('/update/:id',subController.updatesubCategory);

router.post('/search/:id', subController.searchsubCategory);

router.post('/delete/:id',subController.deletesubCategory);


module.exports=router;