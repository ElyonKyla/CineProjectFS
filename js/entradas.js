
/*Carga de valores a 0 en las entradas*/
let entradaFam = document.createElement("P");
entradaFam.textContent=0;
let divFamilia = document.querySelector(".entrada-familia");
entradaFam.classList.add("pEntradaFamilia");
divFamilia.appendChild(entradaFam);

let entradaNi = document.createElement("P");
entradaNi.textContent=0;
let divNi = document.querySelector(".entrada-ninho");
entradaNi.classList.add("pEntradaNinho");
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
//Familia
const botonSumarEnFamilia =  document.querySelector("#boton_sumar-familia");
botonSumarEnFamilia.addEventListener("click",function(){
    let entradaFamilia = document.querySelector(".pEntradaFamilia");
    var demoValue = parseInt(entradaFamilia.innerHTML);
    var puntos = demoValue + 1;
    entradaFamilia.textContent=puntos;
    divFamilia.appendChild(entradaFamilia);
})
const botonRestarEnFamilia =  document.querySelector("#boton_restar-familia");
botonRestarEnFamilia.addEventListener("click",function(){
    let entradaFamilia = document.querySelector(".pEntradaFamilia");
    var demoValue = parseInt(entradaFamilia.innerHTML);
    var puntos = demoValue - 1;
    entradaFamilia.textContent=puntos;
    divFamilia.appendChild(entradaFamilia);
})
 //NIÑO
 const botonSumarEnNinho =  document.querySelector("#boton_sumar-ninho");
botonSumarEnNinho.addEventListener("click",function(){
    let entradaNinho = document.querySelector(".pEntradaNinho");
    var demoValue = parseInt(entradaNinho.innerHTML);
    var puntos = demoValue + 1;
    entradaNinho.textContent=puntos;
    divNi.appendChild(entradaNinho);
})
const botonRestarEnNinho =  document.querySelector("#boton_restar-ninho");
botonRestarEnNinho.addEventListener("click",function(){
    let entradaNinho = document.querySelector(".pEntradaNinho");
    var demoValue = parseInt(entradaNinho.innerHTML);
    var puntos = demoValue - 1;
    entradaNinho.textContent=puntos;
    divNi.appendChild(entradaNinho);
})
 
/*boton final*/
const botonButacas =  document.querySelector("#botonButacas");
botonButacas.addEventListener("click",function(){
    console.log("Vamos a seleccionar las butacas");
})