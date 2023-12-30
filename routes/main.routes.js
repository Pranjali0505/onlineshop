const router=require('express').Router();
const mainController=require('../controller/main.controller');


// router.get('/getall', catControlle);

router.post('/create', mainController.createmainCategory);

// router.post('/update',  mainController.updateCategory);

// router.post('/search', mainController.searchCategory);

// router.post('/delete',  mainController.deleteCategory);


module.exports=router;