
/*Carga de valores a 0 en las entradas*/
let totalEntradasditas=0;
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
        puntos=10;
        let PopUp = document.querySelector("#popup");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
    }
    entradaFamilia.textContent=puntos;
    divFamilia.appendChild(entradaFamilia);
    totalEntradas();
})
const botonRestarEnFamilia =  document.querySelector("#boton_restar-familia");
botonRestarEnFamilia.addEventListener("click",function(){
    let entradaFamilia = document.querySelector(".pEntradaFamilia");
    var demoValue = parseInt(entradaFamilia.innerHTML);
    var puntos = demoValue - 1;
    if (puntos <0){
        puntos=0;
        let PopUp = document.querySelector("#popupPobre");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
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
        puntos=10;
        let PopUp = document.querySelector("#popup");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
    }
    entradaNinho.textContent=puntos;
    divNi.appendChild(entradaNinho);
    totalEntradas();
})
const botonRestarEnNinho =  document.querySelector("#boton_restar-ninho");
botonRestarEnNinho.addEventListener("click",function(){
    let entradaNinho = document.querySelector(".pEntradaNinho");
    var demoValue = parseInt(entradaNinho.innerHTML);
    var puntos = demoValue - 1;
    if (puntos <0){
        puntos=0;
        let PopUp = document.querySelector("#popupPobre");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
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
        puntos=10;
        let PopUp = document.querySelector("#popup");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
    }
      entradaSenior.textContent=puntos;
      divSenior.appendChild(entradaSenior);
      totalEntradas();
  })
  const botonRestarEnSenior =  document.querySelector("#boton_restar-senior");
  botonRestarEnSenior.addEventListener("click",function(){
      let entradaSenior = document.querySelector(".pEntradaSenior");
      var demoValue = parseInt(entradaSenior.innerHTML);
      var puntos = demoValue - 1;
      if (puntos <0){
        puntos=0;
        let PopUp = document.querySelector("#popupPobre");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
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
        if (puntos>10){
            puntos=10;
            let PopUp = document.querySelector("#popup");
            PopUp.style.visibility = 'visible';
            PopUp.style.opacity= 1;
        }
        entradaAdulto.textContent=puntos;
        divAdulto.appendChild(entradaAdulto);
        totalEntradas();
    })
    const botonRestarEnAdulto =  document.querySelector("#boton_restar-adulto");
    botonRestarEnAdulto.addEventListener("click",function(){
        let entradaAdulto = document.querySelector(".pEntradaAdulto");
        var demoValue = parseInt(entradaAdulto.innerHTML);
        var puntos = demoValue - 1;
        if (puntos <0){
            puntos=0;
            let PopUp = document.querySelector("#popupPobre");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
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
            puntos=10;
            let PopUp = document.querySelector("#popup");
            PopUp.style.visibility = 'visible';
            PopUp.style.opacity= 1;
        }
        entradaJoven.textContent=puntos;
        divJoven.appendChild(entradaJoven);
        totalEntradas();
    })
    const botonRestarEnJoven =  document.querySelector("#boton_restar-joven");
    botonRestarEnJoven.addEventListener("click",function(){
        let entradaJoven = document.querySelector(".pEntradaJoven");
        var demoValue = (entradaJoven.innerHTML);
        var puntos = demoValue - 1;
        if (puntos <0){
            puntos=0;
            let PopUp = document.querySelector("#popupPobre");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
        }
        entradaJoven.textContent=puntos;
        divJoven.appendChild(entradaJoven);
    })
    function totalEntradas(){
    let entradaFamilia = parseInt((document.querySelector(".pEntradaFamilia")).innerHTML);
    //console.log(entradaFamilia, typeof entradaFamilia);
    let entradaNinho = parseInt((document.querySelector(".pEntradaNinho")).innerHTML);
    let entradaSenior = parseInt((document.querySelector(".pEntradaSenior")).innerHTML);
    let entradaAdulto = parseInt((document.querySelector(".pEntradaAdulto")).innerHTML);
    let entradaJoven = parseInt((document.querySelector(".pEntradaJoven")).innerHTML);
     totalEntradasditas = entradaFamilia+entradaNinho+entradaSenior+entradaAdulto+entradaJoven;
    if (totalEntradasditas > 10){
        let PopUp = document.querySelector("#popup");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
    }else if(totalEntradasditas == 0){
        let PopUp = document.querySelector("#popupPobre");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
    }
    let precioEntradas = entradaFamilia*6.90+entradaNinho*7.90+entradaSenior*7.90+entradaAdulto*10.90+entradaJoven*7.90;
    return totalEntradasditas ,precioEntradas;
 }

/*boton final*/
const botonButacas =  document.querySelector("#botonButacas");
botonButacas.addEventListener("click",function(){
    totalEntradas();
    console.log("Vamos a seleccionar las butacas");
})