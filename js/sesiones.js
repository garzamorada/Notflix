/*********************************************/
/*              manejo se sesiones           */
/*********************************************/

function userLogin(usuario) {

    localStorage.setItem('usuario', usuario);
    console.log(usuario);

}

function userLogout(usuario) {

    localStorage.removeItem('usuario');
    localStorage.clear();

}

function isSetUser() {
    let usuario = localStorage.getItem('usuario');
    if (usuario != null) {
        var isset = true;
    } else {
        var isset = false;
    }

    return isset;
}