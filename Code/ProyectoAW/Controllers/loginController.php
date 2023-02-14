<?php

include '../Models/loginModel.php';

// Reconoce si se presionó o no el botón se puede poner echo para ver si funciona / name = php
if(isset($_POST["btnIniciarSesion"])){
    $correoElectronico = $_POST["correoElectronico"]; 
    $contrasenna = $_POST["contrasenna"];

    //Los datos recibidos se pasan al modelo y luego van a la base de datos
    $res = iniciarSesionModel($correoElectronico, $contrasenna);

    if($res -> num_rows > 0){
        // Se extrae los datos y se guarda en el array según las posiciones
        $registro = mysqli_fetch_array($res); 
        header("Location: ../Views/principal.php");
    }else{
        header("Location: ../Views/login.php");
    }
}
?>