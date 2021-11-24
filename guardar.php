<?php
 require 'conexion.php';
  
 $apertura  = $_POST['txt_Aper'];
 $cierre  = $_POST['txt_Cierre'];
 $venta = $_POST['Venta_T'];
 $fecha = $_POST['Fecha']

$insertar = "INSERT INTO Reportes VALUES ('$apertura','$cierre','$venta','$fecha') ";

$query = mysqli_query($conectar, $insertar);

if($query){

   echo "<script> alert('correcto');
    location.href = 'registros.html';
   </script>";

}else{
    echo "<script> alert('incorrecto');
    location.href = 'registros.html';
    </script>";
}






?>