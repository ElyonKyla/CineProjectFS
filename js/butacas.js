
var arrayButacas = new Array();

// var clicA1=0;
// const BotonA1 =  document.querySelector("#a1");
//     BotonA1.addEventListener("click",function(){
//             if(clicA1==1){
//             let colorAsiento = document.querySelector("#a1");
//             colorAsiento.style.backgroundImage="url('/img/mini-butaca-perry.png')";
//             //arrayButacas.push("a1");
            
//         // console.log(arrayButacas);
//             clicA1 =0;
//             console.log(clicA1);
//             }
            
//         })

//     BotonA1.addEventListener("click",function(){
//         if (clicA1==0){
//         let colorAsiento = document.querySelector("#a1");
//         colorAsiento.style.backgroundImage="url('/img/mini-butaca-morado.png')";
//     // arrayButacas.push("a1");
//          clicA1 =1;
//          console.log(clicA1);
//         //console.log(arrayButacas);
//         }
       
//     })

    var clicA1 = 0;
    const BotonA1 = document.querySelector("#a1");
    
    BotonA1.addEventListener("click", function () {
        if (clicA1 == 0) {
            let colorAsiento = document.querySelector("#a1");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            clicA1 = 1;
        } else if (clicA1 == 1) {
            let colorAsiento = document.querySelector("#a1");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            clicA1 = 0;
        }
        console.log(clicA1);
    });
    
    



const BotonA2 =  document.querySelector("#a2");
BotonA2.addEventListener("click",function(){
    let colorAsiento = document.querySelector("#a2");
    colorAsiento.style.backgroundImage="url('/img/mini-butaca-morado.png')";
    arrayButacas.push("a2");
    console.log(arrayButacas);
})

/*fixme*/
/*NECESITAMMOS QUE AL HACER UN SEGUNDO CLICK SE INVIRTA LO ANTERIOR*/

const BotonPasarelaPago =  document.querySelector("#BotonPasarelaPago");
BotonPasarelaPago.addEventListener("click",function(){
    console.log("Vamos a pagar las entradas");
})