console.log('The js is correct!');

let numContainer = document.getElementById('contadorGuacamole');
let value = 0;
let btnInc = document.getElementById('agregar-guacamole');

console.log(numContainer);

btnInc.addEventListener("click", (event) => {
    event.preventDefault();
    value++;
    // numContainer.textContent = value;
    numContainer.value = value;
});
