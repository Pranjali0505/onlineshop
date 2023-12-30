// const Sequelize=require('sequelize');
// const sequelize = new Sequelize('shopingd','root','',{
//    host:'localhost',
//    dialect:'mysql'
// });

// sequelize.authenticate().then(()=>{
//        console.log('Connection has been established successfully.'); 
//    }).catch ((error)=>{
//        console.error('Unable to connect to the database:', error.message);
//    }) 
 
//    const db={
//        sequelize:sequelize,
//        Sequelize:Sequelize
//    }


//  db.master=require('./master_table')(sequelize,Sequelize); 
//  db.mainCat=require('./main_category')(sequelize,Sequelize); 
//  db.subCat=require('./sub_category')(sequelize,Sequelize); 
//  db.cat=require('./category')(sequelize,Sequelize); 
//  db.product=require('./product_details')(sequelize,Sequelize); 
//  db.imgcolor=require('./imgcolor')(sequelize,Sequelize); 
//  db.images=require('./images')(sequelize,Sequelize); 
//  db.colors=require('./colors')(sequelize,Sequelize); 


//  db.master.hasMany(db.mainCat);
//  db.mainCat.belongsTo(db.master);

//  db.mainCat.hasMany(db.subCat);
//  db.subCat.belongsTo(db.mainCat);

//  db.subCat.hasMany(db.cat);
//  db.cat.belongsTo(db.subCat);

//  db.cat.hasMany(db.product);
//  db.product.belongsTo(db.cat);

//  db.product.hasMany(db.images);
//  db.images.belongsTo(db.product);

//  db.product.hasMany(db.imgcolor);
//  db.imgcolor.belongsTo(db.product);
 
//  db.product.hasMany(db.colors);
//  db.colors.belongsTo(db.product);

//  db.colors.hasMany(db.imgcolor);
//  db.imgcolor.belongsTo(db.colors);
 
//  module.exports=db;





