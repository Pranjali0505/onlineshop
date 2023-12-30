const router=require('express').Router();
const masterController=require('../controller/master.controller');


// router.get('/getall', catControlle);

router.post('/create',  masterController.createMaster);

// router.post('/update',  masterController.updateCategory);

// router.post('/search', masterController.searchCategory);

// router.post('/delete',  masterController.deleteCategory);


module.exports=router;