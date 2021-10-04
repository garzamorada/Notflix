/******************************************/
/*       muestra oculta capa login        */
/******************************************/

function abre_cierra(op, ID) {
    if (op == 'ocultar') {
        var elemento = document.getElementById(ID);
        elemento.className = ID + ' ocultar';
    } else if (op == 'mostrar') {
        var elemento = document.getElementById(ID);
        elemento.className = ID + ' mostrar';
    }
}

function cambia_clase(clase, ID) {
    var elemento = document.getElementById(ID);
    elemento.className = clase;
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


var clave = document.getElementById('Clave');
var confirma_clave = document.getElementById('Confirmar_Clave');

function chequeaClave() {
    if (clave.value === confirma_clave.value) {
        confirma_clave.setCustomValidity('');
    } else {
        confirma_clave.setCustomValidity('Las contraseñas no coinciden');
    }
}

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
var anio = fecha.getFullYear() - 18;
var fechaMaxima = (anio + "-" + mes + "-" + dia);
var campoFecha = document.getElementById('validationCustomNacimiento');
if (campoFecha != null) { campoFecha.max = fechaMaxima; }


/******************************************/
/*        filtro de peliculas             */
/******************************************/

function ocultarClase(elementos) {
    var i;
    for (i = 0; i < elementos.length; i++) {
        elementos[i].classList.remove('movie-mostrar');
        elementos[i].classList.add('movie-ocultar');
        console.log(elementos[i].className);
    }
}

function mostrarClase(elementos) {
    var i;
    for (i = 0; i < elementos.length; i++) {
        elementos[i].classList.remove('movie-ocultar');
        elementos[i].classList.add('movie-mostrar');
        console.log(elementos[i].className);
    }
}

function seleccionaPeliculas(categoria) {
    console.log(categoria);
    switch (categoria) {
        case 'marvel':
            var elementos1 = document.getElementsByClassName("peliculas");
            ocultarClase(elementos1);
            var elementos2 = document.getElementsByClassName("marvel");
            mostrarClase(elementos2);
            break;
        case 'todas':
            var elementos1 = document.getElementsByClassName("peliculas");
            mostrarClase(elementos1);
            break;
        default:
            var elementos1 = document.getElementsByClassName("peliculas");
            mostrarClase(elementos1);
    }
}