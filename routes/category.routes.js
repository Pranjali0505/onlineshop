const router=require('express').Router();
const catController=require('../controller/category.controller');


// router.get('/getall', catControlle);

router.post('/create', catController.createCategoty);

router.post('/update', catController.updateCategory);

router.post('/search', catController.searchCategory);

router.post('/delete', catController.deleteCategory);


module.exports=router;