let btnAceptarNombre = document.getElementById('btnAceptar');

btnAceptarNombre.addEventListener('click', (event) => {
  event.preventDefault();
  let inputCliente = document.getElementById('nombreCliente');

  if (!inputCliente.value) {
    alert('Ingresa un nombre para registrar la cuenta');
  } else {
    document.location.href = '/principal_menu';
  }
});
