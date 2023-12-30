var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');
var middleware=require('./middleware/jwt.middleware');
var authRouter=require('./routes/auth.routes');
var imgRouter=require('./routes/img.routes');
var productRouter= require('./routes/product.routes');
var orderRouter=require('./routes/order.routes');
var cartRouter=require('./routes/cart.routes');
var offerRouter=require('./routes/offer.routes');
var getproduct=require('./routes/getproduct.routes');
var catRouter=require('./routes/category.routes');
var subRouter=require('./routes/sub.routes');
var mainRouter=require('./routes/main.routes');
var masterRouter=require('./routes/master.routes');
var emailRouter=require('./routes/sendemail.routes');
// var db=require('./models/index');

var app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'upload')));

app.use('/', indexRouter);
app.use('/users',middleware.checkToken,usersRouter);
app.use('/auth',authRouter);
app.use('/img',imgRouter);
app.use('/product',middleware.isAdmin,productRouter);
app.use('/order',orderRouter);
// app.use('/cart',cartRouter);
app.use('/offer',offerRouter);
app.use('/get',getproduct);
app.use('/email',emailRouter);
app.use('/cat',catRouter);
app.use('/sub',subRouter);
app.use('/main',mainRouter);
app.use('/master', masterRouter);

// db.sequelize.sync({force:true});

module.exports = app;
