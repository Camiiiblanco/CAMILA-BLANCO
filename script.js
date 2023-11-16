
let nombre = prompt ("¿Cuál es tu nombre?");
let alerta = alert("bienvenido" + "" + nombre);


//FOOTTER

const fecha = document.querySelector('.fecha');
function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}
document.addEventListener('DOMContentLoaded',()=>{
    fechaActual();
});


let miBoton = document.getElementById("boton");

miBoton.addEventListener("click", miFuncion);

function miFuncion(){
    document.body.style.backgroundColor = "hsla(112, 81%, 19%, 0.7)"
}