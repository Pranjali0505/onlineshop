const router=require('express').Router();
const cartController=require('../controller/cart.controller');


router.get('/getall',cartController.getAllCart);

router.post('/create',cartController.createCart);

router.post('/update/:id',cartController.updateCart);

router.post('/search/:id',cartController.searchCart);

router.post('/delete/:id',cartController.deleteCart);


module.exports=router;