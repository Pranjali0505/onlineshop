const router=require('express').Router();
const orderController=require('../controller/order.controller');


router.get('/getall',orderController.getAllOrder);
router.get('/get',orderController.getOrder);

router.post('/create',orderController.createOrder);

router.post('/update/:id',orderController.updateOrder);

router.post('/search/:id',orderController.serachOrder);

router.post('delete/:id',orderController.deleteOrder);


module.exports=router;