
const connection=require('../connection/mysql.connection');

module.exports = {
      createsubCategoty:(req,res)=>{
        let { Name,main_id } = req.body;
        connection.query(`INSERT INTO  sub_category (sub_id,Name,main_id) VALUES(0,'${Name}',${main_id})`,(err,result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })

    },
    updatesubCategory: (req, res) => {
        let id = req.params.id;
        connection.query(`UPDATE sub_category SET Name='${req.body.Name}' WHERE sub_id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
   deletesubCategory: (req, res) => {
       let id = req.params.id;
        connection.query(`DELETE FROM sub_category WHERE sub_id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    searchsubCategory: (req, res) => {
        let id = req.params.id;
        connection.query(`SELECT Name FROM sub_category WHERE sub_id = ${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } 
                else {
                    res.send({ error: false, data: result });
                }
            

        })
    }
}
