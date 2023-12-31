const connection=require('../connection/mysql.connection');

module.exports = {
      createCategoty:(req,res)=>{
        let { Name,sub_id} = req.body;
        connection.query(`INSERT INTO  category (cat_id,Name,sub_id) VALUES(0,'${Name}',${sub_id})`,(err,result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })

    },
    updateCategory: (req, res) => {
        let id = req.params.id;
        connection.query(`UPDATE category SET Name='${req.body.Name}' WHERE cat_id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
   deleteCategory: (req, res) => {
       let id = req.params.id;
        connection.query(`DELETE FROM category WHERE cat_id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    searchCategory: (req, res) => {
        let id = req.params.id;
        connection.query(`SELECT Name FROM category WHERE cat_id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } 
                else {
                    res.send({ error: false, data: result });
                }
            

        })
    }
}
