
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
entradaSenior.classList.add("pEntradaSenior");
let divSenior = document.querySelector(".entrada-senior");
divSenior.appendChild(entradaSenior);

let entradaAdulto = document.createElement("P");
entradaAdulto.textContent=0;
entradaAdulto.classList.add("pEntradaAdulto");
let divAdulto = document.querySelector(".entrada-adulto");
divAdulto.appendChild(entradaAdulto);

let entradaJoven = document.createElement("P");
entradaJoven.textContent=0;
entradaJoven.classList.add("pEntradaJoven");
let divJoven = document.querySelector(".entrada-joven");
divJoven.appendChild(entradaJoven);

/* Botoneria */
//Familia
const botonSumarEnFamilia =  document.querySelector("#boton_sumar-familia");
botonSumarEnFamilia.addEventListener("click",function(){
    let entradaFamilia = document.querySelector(".pEntradaFamilia");
    var demoValue = parseInt(entradaFamilia.innerHTML);
    var puntos = demoValue + 1;
    if (puntos>10){
        console.log("Numero de entradas maximo permitido excedido");
        let PopUp = document.createElement("DIV");
        puntos=10;
    }
    entradaFamilia.textContent=puntos;
    divFamilia.appendChild(entradaFamilia);
})
const botonRestarEnFamilia =  document.querySelector("#boton_restar-familia");
botonRestarEnFamilia.addEventListener("click",function(){
    let entradaFamilia = document.querySelector(".pEntradaFamilia");
    var demoValue = parseInt(entradaFamilia.innerHTML);
    var puntos = demoValue - 1;
    if (puntos <0){
        puntos=0;
    }
    entradaFamilia.textContent=puntos;
    divFamilia.appendChild(entradaFamilia);
})
 //NIÑO
 const botonSumarEnNinho =  document.querySelector("#boton_sumar-ninho");
botonSumarEnNinho.addEventListener("click",function(){
    let entradaNinho = document.querySelector(".pEntradaNinho");
    var demoValue = parseInt(entradaNinho.innerHTML);
    var puntos = demoValue + 1;
    if (puntos>10){
        console.log("Numero de entradas maximo permitido excedido");
        puntos=10;
    }
    entradaNinho.textContent=puntos;
    divNi.appendChild(entradaNinho);
})
const botonRestarEnNinho =  document.querySelector("#boton_restar-ninho");
botonRestarEnNinho.addEventListener("click",function(){
    let entradaNinho = document.querySelector(".pEntradaNinho");
    var demoValue = parseInt(entradaNinho.innerHTML);
    var puntos = demoValue - 1;
    if (puntos <0){
        puntos=0;
    }
    entradaNinho.textContent=puntos;
    divNi.appendChild(entradaNinho);
})
  //SENIOR
  const botonSumarEnSenior =  document.querySelector("#boton_sumar-senior");
  botonSumarEnSenior.addEventListener("click",function(){
      let entradaSenior = document.querySelector(".pEntradaSenior");
      var demoValue = parseInt(entradaSenior.innerHTML);
      var puntos = demoValue + 1;
      if (puntos>10){
        console.log("Numero de entradas maximo permitido excedido");
        puntos=10;
    }
      entradaSenior.textContent=puntos;
      divSenior.appendChild(entradaSenior);
  })
  const botonRestarEnSenior =  document.querySelector("#boton_restar-senior");
  botonRestarEnSenior.addEventListener("click",function(){
      let entradaSenior = document.querySelector(".pEntradaSenior");
      var demoValue = parseInt(entradaSenior.innerHTML);
      var puntos = demoValue - 1;
      if (puntos <0){
        puntos=0;
    }
      entradaSenior.textContent=puntos;
      divSenior.appendChild(entradaSenior);
  })
    //ADULTO
    const botonSumarEnAdulto =  document.querySelector("#boton_sumar-adulto");
    botonSumarEnAdulto.addEventListener("click",function(){
        let entradaAdulto = document.querySelector(".pEntradaAdulto");
        var demoValue = parseInt(entradaAdulto.innerHTML);
        var puntos = demoValue + 1;
        entradaAdulto.textContent=puntos;
        divAdulto.appendChild(entradaAdulto);
    })
    const botonRestarEnAdulto =  document.querySelector("#boton_restar-adulto");
    botonRestarEnAdulto.addEventListener("click",function(){
        let entradaAdulto = document.querySelector(".pEntradaAdulto");
        var demoValue = parseInt(entradaAdulto.innerHTML);
        var puntos = demoValue - 1;
        if (puntos <0){
            puntos=0;
        }
        entradaAdulto.textContent=puntos;
        divAdulto.appendChild(entradaAdulto);
    })
    //JOVEN
    const botonSumarEnJoven =  document.querySelector("#boton_sumar-joven");
    botonSumarEnJoven.addEventListener("click",function(){
        let entradaJoven = document.querySelector(".pEntradaJoven");
        var demoValue = parseInt(entradaJoven.innerHTML);
        var puntos = demoValue + 1;
        if (puntos>10){
            console.log("Numero de entradas maximo permitido excedido");
            puntos=10;
        }
        entradaJoven.textContent=puntos;
        divJoven.appendChild(entradaJoven);
    })
    const botonRestarEnJoven =  document.querySelector("#boton_restar-joven");
    botonRestarEnJoven.addEventListener("click",function(){
        let entradaJoven = document.querySelector(".pEntradaJoven");
        var demoValue = parseInt(entradaJoven.innerHTML);
        var puntos = demoValue - 1;
        if (puntos <0){
            puntos=0;
        }
        entradaJoven.textContent=puntos;
        divJoven.appendChild(entradaJoven);
    })
/*boton final*/
const botonButacas =  document.querySelector("#botonButacas");
botonButacas.addEventListener("click",function(){
    console.log("Vamos a seleccionar las butacas");
})