let btnSeguirOrdenando = document.getElementById('botonMenuPrincipal');
let btnOrdenarPedido = document.getElementById('botonOrdenar');
let btnCancelarPedido = document.getElementById('botonCancelarPedido');
let btnRealizarPago = document.getElementById('botonPagar');

let sectionMenuPrincipal = document.getElementById('divMenuPrincipal');
let sectionPagar = document.getElementById('divPagar');
let sectionOrdenar = document.getElementById('divOrdenar');

if (btnSeguirOrdenando) {
  btnSeguirOrdenando.addEventListener('click', (event) => {
    event.preventDefault();
    document.location.href = '/principal_menu';
  });
}

if (btnOrdenarPedido) {
  btnOrdenarPedido.addEventListener('click', (event) => {
    event.preventDefault();
    let ventanaOrdenarPedido = document.getElementById('ordenarPedido');
    ventanaOrdenarPedido.style.display="block";

    setTimeout(() => {
      ventanaOrdenarPedido.style.display="none";
      sectionOrdenar.style.display="none"
      sectionPagar.style.display="block";
    }, 2000);
  });
}

if (btnRealizarPago) {
  btnRealizarPago.addEventListener('click', (event) => {
    event.preventDefault();
    
    let ventanaRealizarPago = document.getElementById('pagarPedido');
    ventanaRealizarPago.style.display="block";
  
    setTimeout(() => {
      ventanaRealizarPago.style.display="none";
    }, 2000);
  });
}

if (btnCancelarPedido) {
  btnCancelarPedido.addEventListener('click', (event) => {
    event.preventDefault();

    let ventanaCancelarPedido = document.getElementById('cancelarPedido');
    ventanaCancelarPedido.style.display='block';
    
    /*
    setTimeout(() => {
      ventanaCancelarPedido.style.display="none";
    }, 2000);
    */
  });
}