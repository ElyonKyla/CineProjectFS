const botonCompra =  document.querySelector("#comprar");
    botonCompra.addEventListener("click",function(){
        let PopUp = document.querySelector("#popupSesiones");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
    })

    const botonCuatro =  document.querySelector("#16:00");
    botonCuatro.addEventListener("click",function(){
        let horaCuatro = document.querySelector("#16:00");
    })

    const botonSeis =  document.querySelector("#18:30");
    botonSeis.addEventListener("click",function(){
        let horaSeis = document.querySelector("#18:30");
    })

    const botonNueve =  document.querySelector("#21:00");
    botonNueve.addEventListener("click",function(){
        let horaNueve = document.querySelector("#21:00");
    })