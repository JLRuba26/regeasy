obtenerDatos = function(){
    var apertura = document.getElementById("txt_Aper").value;
    var cierre = document.getElementById("txt_Cierre").value;
    var venta = document.getElementById("Venta_T").value;
    var fecha = document.getElementById("Fecha").value;
    MandarDatos(apertura,cierre,venta,fecha);
}

var MandarDatos = function(ap,ci,ve,fe){
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