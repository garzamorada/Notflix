/******************************************/
/*       muestra oculta capa login        */
/******************************************/

function abre_cierra(op) {
    if (op == 'cerrar') {
        var elemento = document.getElementById('formulario_flotante');
        elemento.className = 'formulario_flotante oculto';
    } else if (op == 'abrir') {
        var elemento = document.getElementById('formulario_flotante');
        elemento.className = 'formulario_flotante mostrar';
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  
/******************************************/
/* defino minimo 18 años para el registro */
/******************************************/


function getMM(date) {
  let mes = date.getMonth() + 1;
  return mes < 10 ? '0' + mes : '' + mes; // ('' + mes) agrega un 0 si es menor a 10 y convierte a string
}
function getDD(date) {
  let dia = date.getDate();
  return dia < 10 ? '0' + dia : '' + dia; // ('' + dia) agrega un 0 si es menor a 10 y convierte a string
}


      var fecha = new Date();
      var mes = getMM(fecha);
      var dia = getDD(fecha);
      var anio = fecha.getFullYear()-18;
      var fechaMaxima=(anio + "-" + mes + "-" + dia);
      var campoFecha=document.getElementById('validationCustomNacimiento');
      campoFecha.max=fechaMaxima;
