const mysql=require('mysql');

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'onlineshop'
})

connection.connect((err)=>{
    err?console.log(err.message):console.log('connection success');
})


module.exports=connection;