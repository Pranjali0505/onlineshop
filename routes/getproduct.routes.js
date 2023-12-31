const router=require('express').Router();
const getController=require('../controller/getproduct.controller');

router.get('/getall',getController.getAllProduct);

router.get('/getproduct/:id',getController.getProduct);

router.post('/getcolorimages',getController.getcolorimg);

// router.get('/filterproduct',showController.filterproduct);
router.get('/getmaster',getController.getMasterProduct);
router.get('/getmain',getController.getMainProduct);
router.get('/getsub/:id',getController.getSubProduct);
router.get('/getcat/:id',getController.getCatProduct);



module.exports=router;