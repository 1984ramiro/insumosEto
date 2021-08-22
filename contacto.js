const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const empresa = document.getElementById("mensaje");



// Clear form
let btnEnviar = document.querySelector("submit");
let inputs = document.querySelectorAll("input");

btnEnviar.addEventListener("click",() => {
    inputs.forEach(input => input.value ="" )
})