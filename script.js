
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

//COLOR EN BOTONES

let miBoton = document.getElementById("boton");

miBoton.addEventListener("click", miFuncion);

function miFuncion(){
    document.body.style.backgroundColor = "hsla(112, 81%, 19%, 0.7)"
}

//.....

let tuBoton = document.getElementById("boton1");

tuBoton.addEventListener("click", tuFuncion);

function tuFuncion(){
    document.body.style.backgroundColor = "#ffffff"
}




function verificarEdad (){
    if (document.getElementById("edad").value<="18"){
        document.getElementById("mensaje").innerHTML="Sos menor de edad";
    }
}