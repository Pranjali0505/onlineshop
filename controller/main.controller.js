
const connection=require('../connection/mysql.connection');

module.exports = {
      createmainCategoty:(req,res)=>{
        let { Name,id } = req.body;
        connection.query(`INSERT INTO  main_category (main_id,Name,id) VALUES(0,'${Name}',${id})`,(err,result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })

    },
    updatemainCategory: (req, res) => {
        let id = req.params.id;
        connection.query(`UPDATE main_category SET Name='${req.body.Name}' WHERE main_id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
   deletemainCategory: (req, res) => {
       let id = req.params.id;
        connection.query(`DELETE FROM main_category WHERE main_id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    searchmainCategory: (req, res) => {
        let id = req.params.id;
        connection.query(`SELECT Name FROM main_category WHERE main_id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } 
                else {
                    res.send({ error: false, data: result });
                }
            

        })
    }
}
