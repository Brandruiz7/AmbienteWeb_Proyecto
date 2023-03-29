function validarCedula(){

    let Cedula = $("#cedula").val();
  
    $.ajax({
      type    : 'POST',
      url     : '../Controllers/usuariosController.php',
      data: {
        'buscarCedula':'buscarCedula',
        'cedula' : Cedula 
      },
      success: function(res){
        if(res.trim() != "OK"){
          alert(res);
          $("#btnRegistrar").prop("disabled", true);
        }
        else{
          $("#btnRegistrar").prop("disabled", false); 
        }
      }
    });
  }

  function ValidarCorreo()
  {
      let correoElectronico = $("#correoElectronico").val();
      $.ajax({
          type: 'GET',
          url: '../Controllers/usuariosController.php',
          data: { 
              'BuscarUsuario':'BuscarUsuario',
              'correoElectronico' : correoElectronico
          },
          success: function (res) {
              if(res != "OK")
              {
                  alert(res);
                  $("#btnRegistrar").prop("disabled",true);
              }
              else
              {
                  $("#btnRegistrar").prop("disabled",false);
              }
          }
      });
  }