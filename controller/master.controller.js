
const connection=require('../connection/mysql.connection');

module.exports = {
      createmasterCategoty:(req,res)=>{
        let { Name } = req.body;
        connection.query(`INSERT INTO master_table (id,Name) VALUES(0,'${Name}')`,(err,result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })

    },
    updatemasterCategory: (req, res) => {
        let id = req.params.id;
        connection.query(`UPDATE master_table SET Name='${req.body.Name}' WHERE id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
   deletemasterCategory: (req, res) => {
       let id = req.params.id;
        connection.query(`DELETE FROM master_table WHERE id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    searchmasterCategory: (req, res) => {
        let id = req.params.id;
        connection.query(`SELECT Name FROM master_table WHERE id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } 
                else {
                    res.send({ error: false, data: result });
                }
            

        })
    }
}
