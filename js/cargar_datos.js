var jsonFile = '../js/peliculas.json';

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    const peliculas = JSON.parse(this.responseText);

    var plantilla = document.getElementsByTagName("template")[0];
    var inner = plantilla.innerHTML;
    var seccion = document.getElementsByTagName("section")[0];
    var plantillaContent = '';

    for (i = 0; i < peliculas.length; i++) {
        titulo = peliculas[i].titulo;
        url = peliculas[i].url;
        categoria = peliculas[i].categoria;
        imagen = peliculas[i].imagen;
        youtube = peliculas[i].youtube;


        htmlNuevo = inner;
        htmlNuevo = htmlNuevo.replaceAll('${titulo}', titulo);
        htmlNuevo = htmlNuevo.replaceAll('${url}', url);
        htmlNuevo = htmlNuevo.replaceAll('${categoria}', categoria);
        htmlNuevo = htmlNuevo.replaceAll('${imagen}', imagen);
        htmlNuevo = htmlNuevo.replaceAll('${youtube}', youtube);

        plantillaContent = plantillaContent + htmlNuevo;

    }
    seccion.innerHTML = (plantillaContent);   

}
xmlhttp.open("GET", jsonFile, true);
xmlhttp.send();


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