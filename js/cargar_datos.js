var jsonFile = '../js/peliculas.json'; // archivo json

const xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", jsonFile, true);
xmlhttp.send();

xmlhttp.onload = function() { // ejecuta la funcion si cargó el json

    var array_objeto = JSON.parse(this.responseText); // texo del json convertido a objeto

    var inner = templateHTMLtoTemplateString(array_objeto, 'template');

    var seccion = document.getElementsByTagName('section')[0]; // etiqueta en donde se va a poner el html
    seccion.innerHTML = inner;

}


templateHTMLtoTemplateString = function(array_objeto, tag_template) {
    // toma como paramentro array de 2 dimensiones o un objeto y el nombre del template

    var plantilla = document.getElementsByTagName(tag_template)[0]; // primer ocurrencia del tag
    var plantillaContent = '';

    for (i = 0; i < array_objeto.length; i++) {
        var htmlNuevo = plantilla.innerHTML;
        htmlNuevo = remplazaVariableExpReg(array_objeto[i], htmlNuevo);

        /*var variables = Object.keys(array_objeto[i]);*/
        /*htmlNuevo = remplazaVariable(variables, array_objeto[i], htmlNuevo);*/

        plantillaContent = plantillaContent + htmlNuevo;

    }
    return plantillaContent;
}


var remplazaVariable = function(array_keys, array_asoc, html_texto) {
    for (u = 0; u < array_keys.length; u++) {
        nombreVariable = array_keys[u];
        html_texto = html_texto.replaceAll('${' + nombreVariable + '}', array_asoc[nombreVariable]);
    }
    return html_texto;
}

var remplazaVariableExpReg = function(array_asoc, html_texto) {
    var ExpReg = new RegExp(/\$\{(\w+)\}/g);

    var variables = [...html_texto.matchAll(ExpReg)];

    for (let index = 0; index < variables.length; index++) {

        let nombreVariable = variables[index][1];
        html_texto = html_texto.replaceAll('${' + nombreVariable + '}', array_asoc[nombreVariable]);
    }
    return html_texto;
}


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

    if (categoria != 'todas') {
        var elementos1 = document.getElementsByClassName("peliculas");
        ocultarClase(elementos1);
        var elementos2 = document.getElementsByClassName(categoria);
        mostrarClase(elementos2);
    } else {
        var elementos1 = document.getElementsByClassName("peliculas");
        mostrarClase(elementos1);
    }
}