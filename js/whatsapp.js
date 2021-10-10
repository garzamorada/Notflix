function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#contact');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5491159340014';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let apellido = document.querySelector('#apellido').value
        let email = document.querySelector('#email').value
        let comments = document.querySelector('#comments').value
        comments = comments.replaceAll(/\r?\n/g, '%0A')
        let mensaje = 'send?phone=' + telefono + '&text=Nombre :' + nombre + ' ' + apellido + '%0ACorreo electrónico: ' + email + '%0AMensaje:%0A' + comments + ''
        if (isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        } else {
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 1000);
});