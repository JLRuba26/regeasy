const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'database-regeasy.c9nn9omq8yfi.us-east-2.rds.amazonaws.com',
  user: 'admin',
  port:"3306",
  password: 'Tenemosun3312',
  database: 'regeasy',
});

con.connect( (err) =>{
    if(err) throw err
    console.log("Funciona")
})

exports.handler = (valores, context, callback) => {
    // allows for using callbacks as finish/error-handlers
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = "INSERT INTO Reportes VALUES ('"+valores.apertura+"','"+valores.cierre+"','"+valores.venta+"','"+valores.fecha+"')";
    con.query(sql, (err, res) => {
      if (err) {
        throw err
      }
      callback(null, 'Se registro valor.');
    });
      
  };


//con.query("INSERT INTO Reportes VALUES ('$apertura','$cierre','$venta','$fecha',$IDnegocio)"),function(error,results){
//if (error)throw error;

//});