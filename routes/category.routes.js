const router=require('express').Router();
const catController=require('../controller/category.controller');

router.post('/create', catController.createCategoty);

router.post('/update/:id', catController.updateCategory);

router.post('/search/:id', catController.searchCategory);

router.post('/delete/:id', catController.deleteCategory);


module.exports=router;