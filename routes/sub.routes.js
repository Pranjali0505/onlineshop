const router=require('express').Router();
const subController=require('../controller/sub.controller');


// router.get('/getall', catControlle);

router.post('/create', subController.createsubCategoty);

// router.post('/update',subController.updateCategory);

// router.post('/search', subController.searchCategory);

// router.post('/delete',subController.deleteCategory);


module.exports=router;