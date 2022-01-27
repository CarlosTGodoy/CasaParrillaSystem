let btnSeguirOrdenando = document.getElementById('botonMenuPrincipal');

if (btnSeguirOrdenando) {
    btnSeguirOrdenando.addEventListener('click', (event) => {
        event.preventDefault();
        document.location.href = '/principal_menu';
    });
}




