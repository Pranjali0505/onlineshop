const connection=require('../connection/mysql.connection');


module.exports = {


    getAllCart: (req, res) => {
        connection.query(`SELECT  * FROM  cart_details where qty > 0 `, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    createCart:(req,res)=>{
        let { user_id,prod_id,price,qty,createDate} = req.body;
        connection.query(`INSERT INTO cart_details (cart_id,user_id,prod_id,price,qty,createDate) VALUES(0,${user_id},${prod_id},${price},${qty},'${createDate}')`,(err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })

    },
    updateCart: (req, res) => {
        connection.query(`UPDATE cart_details SET qty = '3' WHERE user_id = '1' AND prod_id = '1'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    deleteCart: (req, res) => {
        connection.query(`DELETE FROM cart_details WHERE user_id = '1' AND prod_id = '1'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    searchCart: (req, res) => {

        connection.query(`SELECT SUM(qty) AS total_items FROM cart_details WHERE user_id = '1'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                if (result[0].cart_id === null) {
                    res.send({ error: false, message: 'cart is empty' });
                }
                else {
                    res.send({ error: false, data: result });
                }
            }

        })
    }
}