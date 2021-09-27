function abre_cierra(op) {
    if (op == 'cerrar') {
        var elemento = document.getElementById('formulario_flotante');
        elemento.className = 'formulario_flotante oculto';
    } else if (op == 'abrir') {
        var elemento = document.getElementById('formulario_flotante');
        elemento.className = 'formulario_flotante mostrar';
    }
}