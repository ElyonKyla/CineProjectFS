
/*Carga de valores a 0 en las entradas*/
let entradaFam = document.createElement("P");
entradaFam.textContent=0;
let divFamilia = document.querySelector(".entrada-familia");
entradaFam.classList.add("pEntradaFamilia");
divFamilia.appendChild(entradaFam);

let entradaNi = document.createElement("P");
entradaNi.textContent=0;
let divNi = document.querySelector(".entrada-ninho");
divNi.appendChild(entradaNi);

let entradaSenior = document.createElement("P");
entradaSenior.textContent=0;
let divSenior = document.querySelector(".entrada-senior");
divSenior.appendChild(entradaSenior);

let entradaAdulto = document.createElement("P");
entradaAdulto.textContent=0;
let divAdulto = document.querySelector(".entrada-adulto");
divAdulto.appendChild(entradaAdulto);

let entradaJoven = document.createElement("P");
entradaJoven.textContent=0;
let divJoven = document.querySelector(".entrada-joven");
divJoven.appendChild(entradaJoven);

/* Botoneria */


/*boton final*/
const botonButacas =  document.querySelector("#botonButacas");
botonButacas.addEventListener("click",function(){
    console.log("Vamos a seleccionar las butacas");
})