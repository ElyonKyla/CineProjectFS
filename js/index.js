const botonCompra =  document.querySelector("#comprar");
    botonCompra.addEventListener("click",function(){
        let PopUp = document.querySelector("#popupSesiones");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
    })
    // function popUp(){
    //     let PopUp = document.querySelector("#popupSesiones");
    //     PopUp.style.visibility = 'visible';
    //     PopUp.style.opacity= 1;
    // }