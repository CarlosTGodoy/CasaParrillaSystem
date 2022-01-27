let btnLlamarMesero = document.getElementById('botonMesero');

btnLlamarMesero.addEventListener('click', (event) => {
  event.preventDefault();
  let ventanaLlamarMesero = document.getElementById('ventanaLlamarMesero');
  ventanaLlamarMesero.style.display="block";

  setTimeout(() => {
    ventanaLlamarMesero.style.display="none";
  }, 2000);
});
