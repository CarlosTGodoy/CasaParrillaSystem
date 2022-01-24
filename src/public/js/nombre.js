let botonAceptar = document.getElementById(botonAceptar);

botonAceptar.addEventListener('click', (event) => {
    event.preventDefault();
    let nombreCliente = document.getElementById(nombreCliente);
    
    if (!nombreCliente.value) {
        alert('Ingresa un nombre para registrar la cuenta');
    } else {
        document.location.href
    }
});