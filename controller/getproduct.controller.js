
let connection=require('../connection/mysql.connection');
module.exports={
getAllProduct: async(req, res) => {
        
        connection.query(`SELECT  * FROM prod_details order by cat_id`,(err, result) => {
            if (err) {
                
                res.send({ error: true, message: err });
            } else {
               connection.query(`SELECT * FROM images`,(err,image)=>{
                if(err){
                    res.send({ error: true, message: err });
                }else{
                    connection.query(`SELECT  * FROM colors`, (err, result1) => {
                        if (err) {
                            res.send({ error: true, message: err });
                        } else {
                            connection.query(`SELECT  * FROM imgcolor`, (err, colr) => {
                                if (err) {
                                    res.send({ error: true, message: err });
                                } else {
                                    res.send({ error: false, data:result, images:image, colors:result1 ,imgcolor:colr});
                                }
                            })
                           
                        }
                    })
                }
               })
              
             
            }
        })
    },



    getProduct: async(req, res) => {
        let id=req.params.id;
        connection.query(`SELECT  * FROM prod_details where prod_id=${id} `,(err, result) => {
            if (err) {
                
                res.send({ error: true, message: err });
            } else {
               connection.query(`SELECT * FROM images  where prod_id=${id}`,(err,image)=>{
                if(err){
                    res.send({ error: true, message: err });
                }else{
                    connection.query(`SELECT  * FROM colors  where prod_id=${id}`, (err, result1) => {
                        if (err) {
                            res.send({ error: true, message: err });
                        } else {
                            let colorid=result[0].color_id?result[0].color_id:0;
                            connection.query(`SELECT  * FROM imgcolor where color_id=${colorid}`, (err, colr) => {
                                if (err) {
                                    res.send({ error: true, message: err });
                                } else {
                                  
                                    res.send({ error: false, data:result, images:image, colors:result1 ,imgcolor:colr});
                                }
                            })
                           
                        }
                    })
                }
               })
              
             
            }
        })
    },

    getcolorimg: async(req, res) => {
        let productid=req.body.pid;
        let colorid=req.body.colorid;
        connection.query(`SELECT  * FROM colors where color_id=${colorid} & prod_id=${productid}`, (err, result1) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                connection.query(`SELECT  * FROM imgcolor where color_id=${colorid}`, (err, colr) => {
                    if (err) {
                        res.send({ error: true, message: err });
                    } else {
                        res.send({ error: false, colors:result1 ,imgcolor:colr});
                    }
                })
               
            }
        })
    },
    
    
    // filterproduct:(req, res) => {
    //     const { category, priceRange, brand, size, color } = req.query;

    //     // Construct the base SQL query
    //     let sqlQuery = 'SELECT * FROM prod_details';
    
    //     // Add conditions based on the filter parameters
    //     if (category) {
    //         sqlQuery += ` AND category = '${category}'`;
    //     }
    
    //     if (priceRange) {
    //         const [minPrice, maxPrice] = priceRange.split('-');
    //         sqlQuery += ` AND price >= ${minPrice} AND price <= ${maxPrice}`;
    //     }
    
    //     if (brand) {
    //         sqlQuery += ` AND brand = '${brand}'`;
    //     }
    
    //     if (size) {
    //         sqlQuery += ` AND size = '${size}'`;
    //     }
    
    //     if (color) {
    //         sqlQuery += ` AND color = '${color}'`;
    //     }
    
    //     // Execute the SQL query
    //     connection.query(sqlQuery, (err, result) => {
    //         if (err) {
    //             res.status(500).json({ error: true, message: err });
    //         } else {
    //             // Example response
    //             const filteredProducts = result.map((product) => ({
    //                 id: product.prod_id,
    //                 name: product.prod_name,
    //                 price: product.prod_price,
    //                 category: product.cat_id,
    //             }));
    
    //             res.json(filteredProducts);
    //         }
    //     });
    // }
    getMasterProduct: (req, res) => {
           connection.query(`SELECT  * FROM  master_table`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
              res.send({ error: false, data: result });
            }
        })
    },
    
    getMainProduct: (req, res) => {
        connection.query(`SELECT  * FROM  main_category`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    
    getSubProduct: (req, res) => {
        let id=req.params.id;
        connection.query(`SELECT sub_id ,Name FROM  sub_category where main_id=${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    
    getCatProduct: (req, res) => {
        let id=req.params.id;
        connection.query(`SELECT  cat_id, Name  FROM  category where sub_id=${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },

    
    

  
    
}


