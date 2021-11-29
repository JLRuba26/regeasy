const mysql = require('mysql');
const cors = require('cors');
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
    const sql = "INSERT INTO Reportes VALUES ('10','10','10','10/10/12',1)";
    con.query(sql, (err, res) => {
      if (err) {
        throw err
      }
      callback(null, 'Se registro valor.');
    });
      
  };

  var getData = function(){
    
    var apertura = document.getElementById("txt_Aper").value;
    var cierre = document.getElementById("txt_Cierre").value;
    var venta = document.getElementById("Venta_T").value;
    var fecha = document.getElementById("Fecha").value;
    MandarDatos(apertura,cierre,venta,fecha);
  }

  MandarDatos = function(ap,ci,ve,fe){
    var valores = {
      apertura = ap,
      cierre = ci,
      venta = ve,
      fecha = fe,
      };
      $.ajax({
        jsonp: "callback",
        method: 'POST',
        url: "https://71k85v4qzj.execute-api.us-east-2.amazonaws.com/PrimerInsertar/",
        data: valores,
        async: false,
        dataType: "json",
        contentType : "application/json",
        success: function(respuestaSolicitud) {
        alert(JSON.stringify(respuestaSolicitud));
      }  
    });
  }


  


//con.query("INSERT INTO Reportes VALUES ('$apertura','$cierre','$venta','$fecha',$IDnegocio)"),function(error,results){
//if (error)throw error;

//});