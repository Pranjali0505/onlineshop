const router=require('express').Router();
const offerController=require('../controller/offer.controller');


router.get('/getall',offerController.getAllOffer);

router.post('/create',offerController.createOffer);

// router.post('/update',cartController.updateogg);

// router.post('/search',cartController);

// router.post('delete',cartController);


module.exports=router;