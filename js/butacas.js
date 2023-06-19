
var arrayButacas = new Array();

var ordenDeCompre = localStorage.getItem("ordenDeCompra");
const entradasMaximas = parseInt (ordenDeCompre.numEntradas);

var clicA1 = 0;
const BotonA1 = document.querySelector("#a1");
BotonA1.addEventListener("click", function () {
    if (clicA1 == 0) {
        let colorAsiento = document.querySelector("#a1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
        arrayButacas.push("a1");
        clicA1 = 1;
         
    } else if (clicA1 == 1) {
        let colorAsiento = document.querySelector("#a1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "a1");
        arrayButacas =filteredItems;
        clicA1 = 0;
        
    }
      controlButacas();   
});
    
var clicA2 = 0;
    const BotonA2 = document.querySelector("#a2");
    BotonA2.addEventListener("click", function () {
        if (clicA2 == 0) {
            let colorAsiento = document.querySelector("#a2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a2");
            clicA2 = 1;
             
        } else if (clicA2 == 1) {
            let colorAsiento = document.querySelector("#a2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a2");
            arrayButacas =filteredItems;
            clicA2 = 0;
            
        }
       controlButacas();        
    });

    var clicA3 = 0;
    const BotonA3 = document.querySelector("#a3");
    BotonA3.addEventListener("click", function () {
        if (clicA3 == 0) {
            let colorAsiento = document.querySelector("#a3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a3");
            clicA3 = 1;
        } else if (clicA3 == 1) {
            let colorAsiento = document.querySelector("#a3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a3");
            arrayButacas =filteredItems;
            clicA3 = 0;
        } 
        controlButacas();      
    });

    var clicA4 = 0;
    const BotonA4 = document.querySelector("#a4");
    BotonA4.addEventListener("click", function () {
        if (clicA4 == 0) {
            let colorAsiento = document.querySelector("#a4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a4");
            clicA4 = 1;
        } else if (clicA4 == 1) {
            let colorAsiento = document.querySelector("#a4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a4");
            arrayButacas =filteredItems;
            clicA4 = 0;
        }    
        controlButacas();   
    });

    var clicA5 = 0;
    const BotonA5 = document.querySelector("#a5");
    BotonA5.addEventListener("click", function () {
        if (clicA5 == 0) {
            let colorAsiento = document.querySelector("#a5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a5");
            clicA5 = 1;
        } else if (clicA5 == 1) {
            let colorAsiento = document.querySelector("#a5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a5");
            arrayButacas =filteredItems;
            clicA5 = 0;
        }  
        controlButacas();     
    });

    var clicA6 = 0;
    const BotonA6 = document.querySelector("#a6");
    BotonA6.addEventListener("click", function () {
        if (clicA6 == 0) {
            let colorAsiento = document.querySelector("#a6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a6");
            clicA6 = 1;
        } else if (clicA6 == 1) {
            let colorAsiento = document.querySelector("#a6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a6");
            arrayButacas =filteredItems;
            clicA6 = 0;
        }  
        controlButacas();     
    });

    var clicA7 = 0;
    const BotonA7 = document.querySelector("#a7");
    BotonA7.addEventListener("click", function () {
        if (clicA7 == 0) {
            let colorAsiento = document.querySelector("#a7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a7");
            clicA7 = 1;
        } else if (clicA7 == 1) {
            let colorAsiento = document.querySelector("#a7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a7");
            arrayButacas =filteredItems;
            clicA7 = 0;
        }   
        controlButacas();    
    });

    var clicA8 = 0;
    const BotonA8 = document.querySelector("#a8");
    BotonA8.addEventListener("click", function () {
        if (clicA8 == 0) {
            let colorAsiento = document.querySelector("#a8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a8");
            clicA8 = 1;
        } else if (clicA8 == 1) {
            let colorAsiento = document.querySelector("#a8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a8");
            arrayButacas =filteredItems;
            clicA8 = 0;
        }    
        controlButacas();   
    });

    var clicA9 = 0;
    const BotonA9 = document.querySelector("#a9");
    BotonA9.addEventListener("click", function () {
        if (clicA9 == 0) {
            let colorAsiento = document.querySelector("#a9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a9");
            clicA9 = 1;
        } else if (clicA9 == 1) {
            let colorAsiento = document.querySelector("#a9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a9");
            arrayButacas =filteredItems;
            clicA9 = 0;
        }     
        controlButacas();  
    });

    var clicA10 = 0;
    const BotonA10 = document.querySelector("#a10");
    BotonA10.addEventListener("click", function () {
        if (clicA10 == 0) {
            let colorAsiento = document.querySelector("#a10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a10");
            clicA10 = 1;
        } else if (clicA10 == 1) {
            let colorAsiento = document.querySelector("#a10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a10");
            arrayButacas =filteredItems;
            clicA10 = 0;
        }  
        controlButacas();     
    });

    var clicA11 = 0;
    const BotonA11 = document.querySelector("#a11");
    BotonA11.addEventListener("click", function () {
        if (clicA11 == 0) {
            let colorAsiento = document.querySelector("#a11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("a11");
            clicA11 = 1;
        } else if (clicA11 == 1) {
            let colorAsiento = document.querySelector("#a11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a11");
            arrayButacas =filteredItems;
            clicA11 = 0;
        }   
        controlButacas();    
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var clicB1 = 0;
const BotonB1 = document.querySelector("#b1");
BotonB1.addEventListener("click", function () {
    if (clicB1 == 0) {
        let colorAsiento = document.querySelector("#b1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
        arrayButacas.push("B1");
        clicB1 = 1;
    } else if (clicB1 == 1) {
        let colorAsiento = document.querySelector("#b1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "a1");
        arrayButacas =filteredItems;
        clicB1 = 0;
    }
    controlButacas();     
});
    
var clicB2 = 0;
    const BotonB2 = document.querySelector("#b2");
    BotonB2.addEventListener("click", function () {
        if (clicA2 == 0) {
            let colorAsiento = document.querySelector("#b2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b2");
            clicB2 = 1;
        } else if (clicB2 == 1) {
            let colorAsiento = document.querySelector("#b2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b2");
            arrayButacas =filteredItems;
            clicB2 = 0;
        }
        controlButacas();       
    });

    var clicB3 = 0;
    const BotonB3 = document.querySelector("#b3");
    BotonB3.addEventListener("click", function () {
        if (clicB3 == 0) {
            let colorAsiento = document.querySelector("#b3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b3");
            clicB3 = 1;
        } else if (clicB3 == 1) {
            let colorAsiento = document.querySelector("#b3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b3");
            arrayButacas =filteredItems;
            clicB3 = 0;
        } 
        controlButacas();      
    });

    var clicB4 = 0;
    const BotonB4 = document.querySelector("#b4");
    BotonB4.addEventListener("click", function () {
        if (clicB4 == 0) {
            let colorAsiento = document.querySelector("#b4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b4");
            clicB4 = 1;
        } else if (clicB4 == 1) {
            let colorAsiento = document.querySelector("#b4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b4");
            arrayButacas =filteredItems;
            clicB4 = 0;
        }    
        controlButacas();   
    });

    var clicB5 = 0;
    const BotonB5 = document.querySelector("#b5");
    BotonB5.addEventListener("click", function () {
        if (clicB5 == 0) {
            let colorAsiento = document.querySelector("#b5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b5");
            clicB5 = 1;
        } else if (clicB5 == 1) {
            let colorAsiento = document.querySelector("#b5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b5");
            arrayButacas =filteredItems;
            clicB5 = 0;
        }  
        controlButacas();     
    });

    var clicB6 = 0;
    const BotonB6 = document.querySelector("#b6");
    BotonB6.addEventListener("click", function () {
        if (clicB6 == 0) {
            let colorAsiento = document.querySelector("#b6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b6");
            clicB6 = 1;
        } else if (clicB6 == 1) {
            let colorAsiento = document.querySelector("#b6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b6");
            arrayButacas =filteredItems;
            clicB6 = 0;
        }  
        controlButacas();     
    });

    var clicB7 = 0;
    const BotonB7 = document.querySelector("#b7");
    BotonB7.addEventListener("click", function () {
        if (clicB7 == 0) {
            let colorAsiento = document.querySelector("#b7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b7");
            clicB7 = 1;
        } else if (clicB7 == 1) {
            let colorAsiento = document.querySelector("#b7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b7");
            arrayButacas =filteredItems;
            clicB7 = 0;
        }   
        controlButacas();    
    });

    var clicB8 = 0;
    const BotonB8 = document.querySelector("#b8");
    BotonB8.addEventListener("click", function () {
        if (clicB8 == 0) {
            let colorAsiento = document.querySelector("#b8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b8");
            clicB8 = 1;
        } else if (clicB8 == 1) {
            let colorAsiento = document.querySelector("#b8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b8");
            arrayButacas =filteredItems;
            clicB8 = 0;
        }    
        controlButacas();   
    });

    var clicB9 = 0;
    const BotonB9 = document.querySelector("#b9");
    BotonB9.addEventListener("click", function () {
        if (clicB9 == 0) {
            let colorAsiento = document.querySelector("#b9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b9");
            clicB9 = 1;
        } else if (clicB9 == 1) {
            let colorAsiento = document.querySelector("#b9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b9");
            arrayButacas =filteredItems;
            clicB9 = 0;
        }     
        controlButacas();  
    });

    var clicB10 = 0;
    const BotonB10 = document.querySelector("#b10");
    BotonB10.addEventListener("click", function () {
        if (clicB10 == 0) {
            let colorAsiento = document.querySelector("#b10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b10");
            clicB10 = 1;
        } else if (clicB10 == 1) {
            let colorAsiento = document.querySelector("#b10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b10");
            arrayButacas =filteredItems;
            clicB10 = 0;
        }  
        controlButacas();     
    });

    var clicB11 = 0;
    const BotonB11 = document.querySelector("#b11");
    BotonB11.addEventListener("click", function () {
        if (clicB11 == 0) {
            let colorAsiento = document.querySelector("#b11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("b11");
            clicB11 = 1;
        } else if (clicB11 == 1) {
            let colorAsiento = document.querySelector("#b11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b11");
            arrayButacas =filteredItems;
            clicB11 = 0;
        }   
        controlButacas();    
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var clicC1 = 0;
const BotonC1 = document.querySelector("#c1");
BotonC1.addEventListener("click", function () {
    if (clicC1 == 0) {
        let colorAsiento = document.querySelector("#c1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
        arrayButacas.push("c1");
        clicC1 = 1;
    } else if (clicC1 == 1) {
        let colorAsiento = document.querySelector("#c1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "c1");
        arrayButacas =filteredItems;
        clicC1 = 0;
    } 
    controlButacas();      
});
    
var clicC2 = 0;
    const BotonC2 = document.querySelector("#c2");
    BotonC2.addEventListener("click", function () {
        if (clicC2 == 0) {
            let colorAsiento = document.querySelector("#c2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c2");
            clicC2 = 1;
        } else if (clicC2 == 1) {
            let colorAsiento = document.querySelector("#c2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c2");
            arrayButacas =filteredItems;
            clicC2 = 0;
        }  
        controlButacas();     
    });

    var clicC3 = 0;
    const BotonC3 = document.querySelector("#c3");
    BotonC3.addEventListener("click", function () {
        if (clicC3 == 0) {
            let colorAsiento = document.querySelector("#c3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c3");
            clicC3 = 1;
        } else if (clicC3 == 1) {
            let colorAsiento = document.querySelector("#c3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c3");
            arrayButacas =filteredItems;
            clicC3 = 0;
        }  
        controlButacas();     
    });

    var clicC4 = 0;
    const BotonC4 = document.querySelector("#c4");
    BotonC4.addEventListener("click", function () {
        if (clicC4 == 0) {
            let colorAsiento = document.querySelector("#c4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c4");
            clicC4 = 1;
        } else if (clicC4 == 1) {
            let colorAsiento = document.querySelector("#c4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c4");
            arrayButacas =filteredItems;
            clicC4 = 0;
        } 
        controlButacas();      
    });

    var clicC5 = 0;
    const BotonC5 = document.querySelector("#c5");
    BotonC5.addEventListener("click", function () {
        if (clicC5 == 0) {
            let colorAsiento = document.querySelector("#c5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c5");
            clicC5 = 1;
        } else if (clicC5 == 1) {
            let colorAsiento = document.querySelector("#c5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c5");
            arrayButacas =filteredItems;
            clicC5 = 0;
        } 
        controlButacas();      
    });

    var clicC6 = 0;
    const BotonC6 = document.querySelector("#c6");
    BotonC6.addEventListener("click", function () {
        if (clicC6 == 0) {
            let colorAsiento = document.querySelector("#c6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c6");
            clicC6 = 1;
        } else if (clicC6 == 1) {
            let colorAsiento = document.querySelector("#c6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c6");
            arrayButacas =filteredItems;
            clicC6 = 0;
        } 
        controlButacas();      
    });

    var clicC7 = 0;
    const BotonC7 = document.querySelector("#c7");
    BotonC7.addEventListener("click", function () {
        if (clicC7 == 0) {
            let colorAsiento = document.querySelector("#c7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c7");
            clicC7 = 1;
        } else if (clicC7 == 1) {
            let colorAsiento = document.querySelector("#c7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c7");
            arrayButacas =filteredItems;
            clicC7 = 0;
        }  
        controlButacas();     
    });

    var clicC8 = 0;
    const BotonC8 = document.querySelector("#c8");
    BotonC8.addEventListener("click", function () {
        if (clicC8 == 0) {
            let colorAsiento = document.querySelector("#c8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c8");
            clicC8 = 1;
        } else if (clicC8 == 1) {
            let colorAsiento = document.querySelector("#c8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c8");
            arrayButacas =filteredItems;
            clicC8 = 0;
        }  
        controlButacas();     
    });

    var clicC9 = 0;
    const BotonC9 = document.querySelector("#c9");
    BotonC9.addEventListener("click", function () {
        if (clicC9 == 0) {
            let colorAsiento = document.querySelector("#c9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c9");
            clicC9 = 1;
        } else if (clicC9 == 1) {
            let colorAsiento = document.querySelector("#c9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c9");
            arrayButacas =filteredItems;
            clicC9 = 0;
        } 
        controlButacas();      
    });

    var clicC10 = 0;
    const BotonC10 = document.querySelector("#c10");
    BotonC10.addEventListener("click", function () {
        if (clicC10 == 0) {
            let colorAsiento = document.querySelector("#c10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c10");
            clicC10 = 1;
        } else if (clicC10 == 1) {
            let colorAsiento = document.querySelector("#c10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c10");
            arrayButacas =filteredItems;
            clicC10 = 0;
        }  
        controlButacas();     
    });

    var clicC11 = 0;
    const BotonC11 = document.querySelector("#c11");
    BotonC11.addEventListener("click", function () {
        if (clicC11 == 0) {
            let colorAsiento = document.querySelector("#c11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("c11");
            clicC11 = 1;
        } else if (clicC11 == 1) {
            let colorAsiento = document.querySelector("#c11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "c11");
            arrayButacas =filteredItems;
            clicC11 = 0;
        }  
        controlButacas();     
    });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var clicD1 = 0;
const BotonD1 = document.querySelector("#d1");
BotonD1.addEventListener("click", function () {
    if (clicD1 == 0) {
        let colorAsiento = document.querySelector("#d1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
        arrayButacas.push("d1");
        clicD1 = 1;
    } else if (clicD1 == 1) {
        let colorAsiento = document.querySelector("#d1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "d1");
        arrayButacas =filteredItems;
        clicD1 = 0;
    }  
    controlButacas();     
});
    
var clicD2 = 0;
    const BotonD2 = document.querySelector("#d2");
    BotonD2.addEventListener("click", function () {
        if (clicD2 == 0) {
            let colorAsiento = document.querySelector("#d2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d2");
            clicD2 = 1;
        } else if (clicD2 == 1) {
            let colorAsiento = document.querySelector("#d2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d2");
            arrayButacas =filteredItems;
            clicD2 = 0;
        } 
        controlButacas();      
    });

    var clicD3 = 0;
    const BotonD3 = document.querySelector("#d3");
    BotonD3.addEventListener("click", function () {
        if (clicD3 == 0) {
            let colorAsiento = document.querySelector("#d3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d3");
            clicD3 = 1;
        } else if (clicD3 == 1) {
            let colorAsiento = document.querySelector("#d3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d3");
            arrayButacas =filteredItems;
            clicD3 = 0;
        }   
        controlButacas();    
    });

    var clicD4 = 0;
    const BotonD4 = document.querySelector("#d4");
    BotonD4.addEventListener("click", function () {
        if (clicD4 == 0) {
            let colorAsiento = document.querySelector("#d4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d4");
            clicD4 = 1;
        } else if (clicD4 == 1) {
            let colorAsiento = document.querySelector("#d4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d4");
            arrayButacas =filteredItems;
            clicD4 = 0;
        }  
        controlButacas();     
    });

    var clicD5 = 0;
    const BotonD5 = document.querySelector("#d5");
    BotonD5.addEventListener("click", function () {
        if (clicD5 == 0) {
            let colorAsiento = document.querySelector("#d5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d5");
            clicD5 = 1;
        } else if (clicD5 == 1) {
            let colorAsiento = document.querySelector("#d5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d5");
            arrayButacas =filteredItems;
            clicD5 = 0;
        }    
        controlButacas();   
    });

    var clicD6 = 0;
    const BotonD6 = document.querySelector("#d6");
    BotonD6.addEventListener("click", function () {
        if (clicD6 == 0) {
            let colorAsiento = document.querySelector("#d6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d6");
            clicD6 = 1;
        } else if (clicD6 == 1) {
            let colorAsiento = document.querySelector("#d6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d6");
            arrayButacas =filteredItems;
            clicD6 = 0;
        }   
        controlButacas();    
    });

    var clicD7 = 0;
    const BotonD7 = document.querySelector("#d7");
    BotonD7.addEventListener("click", function () {
        if (clicD7 == 0) {
            let colorAsiento = document.querySelector("#d7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d7");
            clicD7 = 1;
        } else if (clicD7 == 1) {
            let colorAsiento = document.querySelector("#d7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d7");
            arrayButacas =filteredItems;
            clicD7 = 0;
        }   
        controlButacas();    
    });

    var clicD8 = 0;
    const BotonD8 = document.querySelector("#d8");
    BotonD8.addEventListener("click", function () {
        if (clicD8 == 0) {
            let colorAsiento = document.querySelector("#d8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d8");
            clicD8 = 1;
        } else if (clicD8 == 1) {
            let colorAsiento = document.querySelector("#d8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d8");
            arrayButacas =filteredItems;
            clicD8 = 0;
        }   
        controlButacas();    
    });

    var clicD9 = 0;
    const BotonD9 = document.querySelector("#d9");
    BotonD9.addEventListener("click", function () {
        if (clicD9 == 0) {
            let colorAsiento = document.querySelector("#d9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d9");
            clicD9 = 1;
        } else if (clicD9 == 1) {
            let colorAsiento = document.querySelector("#d9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d9");
            arrayButacas =filteredItems;
            clicD9 = 0;
        }    
        controlButacas();   
    });

    var clicD10 = 0;
    const BotonD10 = document.querySelector("#d10");
    BotonD10.addEventListener("click", function () {
        if (clicD10 == 0) {
            let colorAsiento = document.querySelector("#d10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d10");
            clicD10 = 1;
        } else if (clicD10 == 1) {
            let colorAsiento = document.querySelector("#d10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d10");
            arrayButacas =filteredItems;
            clicD10 = 0;
        }    
        controlButacas();   
    });

    var clicD11 = 0;
    const BotonD11 = document.querySelector("#d11");
    BotonD11.addEventListener("click", function () {
        if (clicD11 == 0) {
            let colorAsiento = document.querySelector("#d11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("d11");
            clicD11 = 1;
        } else if (clicD11 == 1) {
            let colorAsiento = document.querySelector("#d11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d11");
            arrayButacas =filteredItems;
            clicD11 = 0;
        }  
        controlButacas();     
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var clicE1 = 0;
const BotonE1 = document.querySelector("#e1");
BotonE1.addEventListener("click", function () {
    if (clicE1 == 0) {
        let colorAsiento = document.querySelector("#e1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
        arrayButacas.push("e1");
        clicE1 = 1;
    } else if (clicE1 == 1) {
        let colorAsiento = document.querySelector("#e1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "e1");
        arrayButacas =filteredItems;
        clicE1 = 0;
    }   
    controlButacas();    
});
    
var clicE2 = 0;
    const BotonE2 = document.querySelector("#e2");
    BotonE2.addEventListener("click", function () {
        if (clicE2 == 0) {
            let colorAsiento = document.querySelector("#e2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e2");
            clicE2 = 1;
        } else if (clicE2 == 1) {
            let colorAsiento = document.querySelector("#e2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e2");
            arrayButacas =filteredItems;
            clicE2 = 0;
        }  
        controlButacas();     
    });

    var clicE3 = 0;
    const BotonE3 = document.querySelector("#e3");
    BotonE3.addEventListener("click", function () {
        if (clicE3 == 0) {
            let colorAsiento = document.querySelector("#e3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e3");
            clicE3 = 1;
        } else if (clicE3 == 1) {
            let colorAsiento = document.querySelector("#e3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e3");
            arrayButacas =filteredItems;
            clicE3 = 0;
        }   
        controlButacas();    
    });

    var clicE4 = 0;
    const BotonE4 = document.querySelector("#e4");
    BotonE4.addEventListener("click", function () {
        if (clicE4 == 0) {
            let colorAsiento = document.querySelector("#e4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e4");
            clicE4 = 1;
        } else if (clicE4 == 1) {
            let colorAsiento = document.querySelector("#e4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e4");
            arrayButacas =filteredItems;
            clicE4 = 0;
        }   
        controlButacas();    
    });

    var clicE5 = 0;
    const BotonE5 = document.querySelector("#e5");
    BotonE5.addEventListener("click", function () {
        if (clicE5 == 0) {
            let colorAsiento = document.querySelector("#e5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e5");
            clicE5 = 1;
        } else if (clicE5 == 1) {
            let colorAsiento = document.querySelector("#e5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e5");
            arrayButacas =filteredItems;
            clicE5 = 0;
        }  
        controlButacas();     
    });

    var clicE6 = 0;
    const BotonE6 = document.querySelector("#e6");
    BotonE6.addEventListener("click", function () {
        if (clicE6 == 0) {
            let colorAsiento = document.querySelector("#e6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e6");
            clicE6 = 1;
        } else if (clicE6 == 1) {
            let colorAsiento = document.querySelector("#e6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e6");
            arrayButacas =filteredItems;
            clicE6 = 0;
        }  
        controlButacas();     
    });

    var clicE7 = 0;
    const BotonE7 = document.querySelector("#e7");
    BotonE7.addEventListener("click", function () {
        if (clicE7 == 0) {
            let colorAsiento = document.querySelector("#e7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e7");
            clicE7 = 1;
        } else if (clicE7 == 1) {
            let colorAsiento = document.querySelector("#e7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e7");
            arrayButacas =filteredItems;
            clicE7 = 0;
        }  
        controlButacas();     
    });

    var clicE8 = 0;
    const BotonE8 = document.querySelector("#e8");
    BotonE8.addEventListener("click", function () {
        if (clicE8 == 0) {
            let colorAsiento = document.querySelector("#e8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e8");
            clicE8 = 1;
        } else if (clicE8 == 1) {
            let colorAsiento = document.querySelector("#e8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e8");
            arrayButacas =filteredItems;
            clicE8 = 0;
        }  
        controlButacas();     
    });

    var clicE9 = 0;
    const BotonE9 = document.querySelector("#e9");
    BotonE9.addEventListener("click", function () {
        if (clicE9 == 0) {
            let colorAsiento = document.querySelector("#e9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e9");
            clicE9 = 1;
        } else if (clicE9 == 1) {
            let colorAsiento = document.querySelector("#e9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e9");
            arrayButacas =filteredItems;
            clicE9 = 0;
        }   
        controlButacas();    
    });

    var clicE10 = 0;
    const BotonE10 = document.querySelector("#e10");
    BotonE10.addEventListener("click", function () {
        if (clicE10 == 0) {
            let colorAsiento = document.querySelector("#e10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e10");
            clicE10 = 1;
        } else if (clicE10 == 1) {
            let colorAsiento = document.querySelector("#e10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e10");
            arrayButacas =filteredItems;
            clicE10 = 0;
        }  
        controlButacas();     
    });

    var clicE11 = 0;
    const BotonE11 = document.querySelector("#e11");
    BotonE11.addEventListener("click", function () {
        if (clicE11 == 0) {
            let colorAsiento = document.querySelector("#e11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("e11");
            clicE11 = 1;
        } else if (clicE11 == 1) {
            let colorAsiento = document.querySelector("#e11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e11");
            arrayButacas =filteredItems;
            clicE11 = 0;
        }  
        controlButacas();     
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var clicF1 = 0;
const BotonF1 = document.querySelector("#f1");
BotonF1.addEventListener("click", function () {
    if (clicF1 == 0) {
        let colorAsiento = document.querySelector("#f1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
        arrayButacas.push("f1");
        clicF1 = 1;
    } else if (clicF1 == 1) {
        let colorAsiento = document.querySelector("#f1");
        colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "f1");
        arrayButacas =filteredItems;
        clicF1 = 0;
    }  
    controlButacas();     
});
    
var clicF2 = 0;
    const BotonF2 = document.querySelector("#f2");
    BotonF2.addEventListener("click", function () {
        if (clicF2 == 0) {
            let colorAsiento = document.querySelector("#f2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f2");
            clicF2 = 1;
        } else if (clicF2 == 1) {
            let colorAsiento = document.querySelector("#f2");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f2");
            arrayButacas =filteredItems;
            clicF2 = 0;
        }   
        controlButacas();    
    });

    var clicF3 = 0;
    const BotonF3 = document.querySelector("#f3");
    BotonF3.addEventListener("click", function () {
        if (clicF3 == 0) {
            let colorAsiento = document.querySelector("#f3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f3");
            clicF3 = 1;
        } else if (clicF3 == 1) {
            let colorAsiento = document.querySelector("#f3");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f3");
            arrayButacas =filteredItems;
            clicF3 = 0;
        }  
        controlButacas();     
    });

    var clicF4 = 0;
    const BotonF4 = document.querySelector("#f4");
    BotonF4.addEventListener("click", function () {
        if (clicF4 == 0) {
            let colorAsiento = document.querySelector("#f4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f4");
            clicF4 = 1;
        } else if (clicF4 == 1) {
            let colorAsiento = document.querySelector("#f4");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f4");
            arrayButacas =filteredItems;
            clicF4 = 0;
        }  
        controlButacas();     
    });

    var clicF5 = 0;
    const BotonF5 = document.querySelector("#f5");
    BotonF5.addEventListener("click", function () {
        if (clicF5 == 0) {
            let colorAsiento = document.querySelector("#f5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f5");
            clicF5 = 1;
        } else if (clicF5 == 1) {
            let colorAsiento = document.querySelector("#f5");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f5");
            arrayButacas =filteredItems;
            clicF5 = 0;
        }  
        controlButacas();     
    });

    var clicF6 = 0;
    const BotonF6 = document.querySelector("#f6");
    BotonF6.addEventListener("click", function () {
        if (clicF6 == 0) {
            let colorAsiento = document.querySelector("#f6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f6");
            clicF6 = 1;
        } else if (clicF6 == 1) {
            let colorAsiento = document.querySelector("#f6");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f6");
            arrayButacas =filteredItems;
            clicF6 = 0;
        } 
        controlButacas();      
    });

    var clicF7 = 0;
    const BotonF7 = document.querySelector("#f7");
    BotonF7.addEventListener("click", function () {
        if (clicF7 == 0) {
            let colorAsiento = document.querySelector("#f7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f7");
            clicF7 = 1;
        } else if (clicF7 == 1) {
            let colorAsiento = document.querySelector("#f7");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f7");
            arrayButacas =filteredItems;
            clicF7 = 0;
        } 
        controlButacas();      
    });

    var clicF8 = 0;
    const BotonF8 = document.querySelector("#f8");
    BotonF8.addEventListener("click", function () {
        if (clicF8 == 0) {
            let colorAsiento = document.querySelector("#f8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f8");
            clicF8 = 1;
        } else if (clicF8 == 1) {
            let colorAsiento = document.querySelector("#f8");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f8");
            arrayButacas =filteredItems;
            clicF8 = 0;
        }  
        controlButacas();     
    });

    var clicF9 = 0;
    const BotonF9 = document.querySelector("#f9");
    BotonF9.addEventListener("click", function () {
        if (clicF9 == 0) {
            let colorAsiento = document.querySelector("#f9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f9");
            clicF9 = 1;
        } else if (clicF9 == 1) {
            let colorAsiento = document.querySelector("#f9");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f9");
            arrayButacas =filteredItems;
            clicF9 = 0;
        }   
        controlButacas();    
    });

    var clicF10 = 0;
    const BotonF10 = document.querySelector("#f10");
    BotonF10.addEventListener("click", function () {
        if (clicF10 == 0) {
            let colorAsiento = document.querySelector("#f10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f10");
            clicF10 = 1;
        } else if (clicF10 == 1) {
            let colorAsiento = document.querySelector("#f10");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f10");
            arrayButacas =filteredItems;
            clicF10 = 0;
        } 
        controlButacas();      
    });

    var clicF11 = 0;
    const BotonF11 = document.querySelector("#f11");
    BotonF11.addEventListener("click", function () {
        if (clicF11 == 0) {
            let colorAsiento = document.querySelector("#f11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-morado.png')";
            arrayButacas.push("f11");
            clicF11 = 1;
        } else if (clicF11 == 1) {
            let colorAsiento = document.querySelector("#f11");
            colorAsiento.style.backgroundImage = "url('/img/mini-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f11");
            arrayButacas =filteredItems;
            clicF11 = 0;
        }  
        controlButacas();     
    });
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
var miniclicA1 = 0;
const miniBotonA1 = document.querySelector("#minia1");
miniBotonA1.addEventListener("click", function () {
    if (miniclicA1 == 0) {
        let minicolorAsiento = document.querySelector("#minia1");
        minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
        arrayButacas.push("a1");
        miniclicA1 = 1;
         
    } else if (miniclicA1 == 1) {
        let minicolorAsiento = document.querySelector("#minia1");
        minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "a1");
        arrayButacas =filteredItems;
        miniclicA1 = 0;
        
    }
      controlButacas();   
});

var miniclicA2 = 0;
    const miniBotonA2 = document.querySelector("#minia2");
    miniBotonA2.addEventListener("click", function () {
        if (miniclicA2 == 0) {
            let minicolorAsiento = document.querySelector("#minia2");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a2");
            miniclicA2 = 1;
             
        } else if (miniclicA2 == 1) {
            let minicolorAsiento = document.querySelector("#minia2");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a2");
            arrayButacas =filteredItems;
            miniclicA2 = 0;
            
        }
       controlButacas();        
    });

    var miniclicA3 = 0;
    const miniBotonA3 = document.querySelector("#minia3");
    miniBotonA3.addEventListener("click", function () {
        if (miniclicA3 == 0) {
            let minicolorAsiento = document.querySelector("#minia3");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a3");
            miniclicA3 = 1;
        } else if (miniclicA3 == 1) {
            let minicolorAsiento = document.querySelector("#minia3");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a3");
            arrayButacas =filteredItems;
            miniclicA3 = 0;
        } 
        controlButacas();      
    });

    var miniclicA4 = 0;
    const miniBotonA4 = document.querySelector("#minia4");
    miniBotonA4.addEventListener("click", function () {
        if (miniclicA4 == 0) {
            let minicolorAsiento = document.querySelector("#minia4");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a4");
            miniclicA4 = 1;
        } else if (miniclicA4 == 1) {
            let minicolorAsiento = document.querySelector("#minia4");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a4");
            arrayButacas =filteredItems;
            miniclicA4 = 0;
        }    
        controlButacas();   
    });

    var miniclicA5 = 0;
    const miniBotonA5 = document.querySelector("#minia5");
    miniBotonA5.addEventListener("click", function () {
        if (miniclicA5 == 0) {
            let minicolorAsiento = document.querySelector("#minia5");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a5");
            miniclicA5 = 1;
        } else if (miniclicA5 == 1) {
            let minicolorAsiento = document.querySelector("#minia5");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a5");
            arrayButacas =filteredItems;
            miniclicA5 = 0;
        }  
        controlButacas();     
    });

    var miniclicA6 = 0;
    const miniBotonA6 = document.querySelector("#minia6");
    miniBotonA6.addEventListener("click", function () {
        if (miniclicA6 == 0) {
            let minicolorAsiento = document.querySelector("#minia6");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a6");
            miniclicA6 = 1;
        } else if (miniclicA6 == 1) {
            let minicolorAsiento = document.querySelector("#minia6");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a6");
            arrayButacas =filteredItems;
            miniclicA6 = 0;
        }  
        controlButacas();     
    });

    var miniclicA7 = 0;
    const miniBotonA7 = document.querySelector("#minia7");
    miniBotonA7.addEventListener("click", function () {
        if (miniclicA7 == 0) {
            let minicolorAsiento = document.querySelector("#minia7");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a7");
            miniclicA7 = 1;
        } else if (miniclicA7 == 1) {
            let minicolorAsiento = document.querySelector("#minia7");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a7");
            arrayButacas =filteredItems;
            miniclicA7 = 0;
        }   
        controlButacas();    
    });

    var miniclicA8 = 0;
    const miniBotonA8 = document.querySelector("#minia8");
    miniBotonA8.addEventListener("click", function () {
        if (miniclicA8 == 0) {
            let colorAsiento = document.querySelector("#minia8");
            colorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a8");
            miniclicA8 = 1;
        } else if (miniclicA8 == 1) {
            let minicolorAsiento = document.querySelector("#minia8");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a8");
            arrayButacas =filteredItems;
            miniclicA8 = 0;
        }    
        controlButacas();   
    });

    var miniclicA9 = 0;
    const miniBotonA9 = document.querySelector("#minia9");
    miniBotonA9.addEventListener("click", function () {
        if (miniclicA9 == 0) {
            let minicolorAsiento = document.querySelector("#minia9");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a9");
            miniclicA9 = 1;
        } else if (miniclicA9 == 1) {
            let minicolorAsiento = document.querySelector("#minia9");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a9");
            arrayButacas =filteredItems;
            miniclicA9 = 0;
        }     
        controlButacas();  
    });

    var miniclicA10 = 0;
    const miniBotonA10 = document.querySelector("#minia10");
    miniBotonA10.addEventListener("click", function () {
        if (miniclicA10 == 0) {
            let minicolorAsiento = document.querySelector("#minia10");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a10");
            miniclicA10 = 1;
        } else if (miniclicA10 == 1) {
            let minicolorAsiento = document.querySelector("#minia10");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a10");
            arrayButacas =filteredItems;
            miniclicA10 = 0;
        }  
        controlButacas();     
    });

    var miniclicA11 = 0;
    const miniBotonA11 = document.querySelector("#minia11");
    miniBotonA11.addEventListener("click", function () {
        if (miniclicA11 == 0) {
            let minicolorAsiento = document.querySelector("#minia11");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("a11");
            miniclicA11 = 1;
        } else if (miniclicA11 == 1) {
            let minicolorAsiento = document.querySelector("#minia11");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "a11");
            arrayButacas =filteredItems;
            miniclicA11 = 0;
        }   
        controlButacas();    
    });

////////////////////////////////////////////////////////////

var miniclicB1 = 0;
const miniBotonB1 = document.querySelector("#minib1");
miniBotonB1.addEventListener("click", function () {
    if (miniclicB1 == 0) {
        let minicolorAsiento = document.querySelector("#minib1");
        minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
        arrayButacas.push("b1");
        miniclicB1 = 1;
         
    } else if (miniclicB1 == 1) {
        let minicolorAsiento = document.querySelector("#minib1");
        minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "b1");
        arrayButacas =filteredItems;
        miniclicB1 = 0;
        
    }
      controlButacas();   
});

var miniclicB2 = 0;
    const miniBotonB2 = document.querySelector("#minib2");
    miniBotonB2.addEventListener("click", function () {
        if (miniclicB2 == 0) {
            let minicolorAsiento = document.querySelector("#minib2");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b2");
            miniclicB2 = 1;
             
        } else if (miniclicB2 == 1) {
            let minicolorAsiento = document.querySelector("#minib2");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b2");
            arrayButacas =filteredItems;
            miniclicB2 = 0;
            
        }
       controlButacas();        
    });

    var miniclicB3 = 0;
    const miniBotonB3 = document.querySelector("#minib3");
    miniBotonB3.addEventListener("click", function () {
        if (miniclicB3 == 0) {
            let minicolorAsiento = document.querySelector("#minib3");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b3");
            miniclicB3 = 1;
        } else if (miniclicB3 == 1) {
            let minicolorAsiento = document.querySelector("#minib3");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b3");
            arrayButacas =filteredItems;
            miniclicB3 = 0;
        } 
        controlButacas();      
    });

    var miniclicB4 = 0;
    const miniBotonB4 = document.querySelector("#minib4");
    miniBotonB4.addEventListener("click", function () {
        if (miniclicB4 == 0) {
            let minicolorAsiento = document.querySelector("#minib4");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b4");
            miniclicB4 = 1;
        } else if (miniclicB4 == 1) {
            let minicolorAsiento = document.querySelector("#minib4");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b4");
            arrayButacas =filteredItems;
            miniclicB4 = 0;
        }    
        controlButacas();   
    });

    var miniclicB5 = 0;
    const miniBotonB5 = document.querySelector("#minib5");
    miniBotonB5.addEventListener("click", function () {
        if (miniclicB5 == 0) {
            let minicolorAsiento = document.querySelector("#minib5");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b5");
            miniclicB5 = 1;
        } else if (miniclicB5 == 1) {
            let minicolorAsiento = document.querySelector("#minib5");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b5");
            arrayButacas =filteredItems;
            miniclicB5 = 0;
        }  
        controlButacas();     
    });

    var miniclicB6 = 0;
    const miniBotonB6 = document.querySelector("#minib6");
    miniBotonB6.addEventListener("click", function () {
        if (miniclicB6 == 0) {
            let minicolorAsiento = document.querySelector("#minib6");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b6");
            miniclicB6 = 1;
        } else if (miniclicB6 == 1) {
            let minicolorAsiento = document.querySelector("#minib6");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b6");
            arrayButacas =filteredItems;
            miniclicB6 = 0;
        }  
        controlButacas();     
    });

    var miniclicB7 = 0;
    const miniBotonB7 = document.querySelector("#minib7");
    miniBotonB7.addEventListener("click", function () {
        if (miniclicB7 == 0) {
            let minicolorAsiento = document.querySelector("#minib7");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b7");
            miniclicB7 = 1;
        } else if (miniclicB7 == 1) {
            let minicolorAsiento = document.querySelector("#minib7");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b7");
            arrayButacas =filteredItems;
            miniclicB7 = 0;
        }   
        controlButacas();    
    });

    var miniclicB8 = 0;
    const miniBotonB8 = document.querySelector("#minib8");
    miniBotonB8.addEventListener("click", function () {
        if (miniclicB8 == 0) {
            let colorAsiento = document.querySelector("#minib8");
            colorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b8");
            miniclicB8 = 1;
        } else if (miniclicB8 == 1) {
            let minicolorAsiento = document.querySelector("#minib8");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b8");
            arrayButacas =filteredItems;
            miniclicB8 = 0;
        }    
        controlButacas();   
    });

    var miniclicB9 = 0;
    const miniBotonB9 = document.querySelector("#minib9");
    miniBotonB9.addEventListener("click", function () {
        if (miniclicB9 == 0) {
            let minicolorAsiento = document.querySelector("#minib9");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b9");
            miniclicB9 = 1;
        } else if (miniclicB9 == 1) {
            let minicolorAsiento = document.querySelector("#minib9");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b9");
            arrayButacas =filteredItems;
            miniclicB9 = 0;
        }     
        controlButacas();  
    });

    var miniclicB10 = 0;
    const miniBotonB10 = document.querySelector("#minib10");
    miniBotonB10.addEventListener("click", function () {
        if (miniclicB10 == 0) {
            let minicolorAsiento = document.querySelector("#minib10");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b10");
            miniclicB10 = 1;
        } else if (miniclicB10 == 1) {
            let minicolorAsiento = document.querySelector("#minib10");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b10");
            arrayButacas =filteredItems;
            miniclicB10 = 0;
        }  
        controlButacas();     
    });

    var miniclicB11 = 0;
    const miniBotonB11 = document.querySelector("#minib11");
    miniBotonB11.addEventListener("click", function () {
        if (miniclicB11 == 0) {
            let minicolorAsiento = document.querySelector("#minib11");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("b11");
            miniclicB11 = 1;
        } else if (miniclicB11 == 1) {
            let minicolorAsiento = document.querySelector("#minib11");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "b11");
            arrayButacas =filteredItems;
            miniclicB11 = 0;
        }   
        controlButacas();    
    });

    ///////////////////////////////////////////////////////////////////////////////////

    var miniclicD1 = 0;
const miniBotonD1 = document.querySelector("#minid1");
miniBotonD1.addEventListener("click", function () {
    if (miniclicD1 == 0) {
        let minicolorAsiento = document.querySelector("#minid1");
        minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
        arrayButacas.push("d1");
        miniclicD1 = 1;
         
    } else if (miniclicD1 == 1) {
        let minicolorAsiento = document.querySelector("#minid1");
        minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "d1");
        arrayButacas =filteredItems;
        miniclicD1 = 0;
        
    }
      controlButacas();   
});

var miniclicD2 = 0;
    const miniBotonD2 = document.querySelector("#minid2");
    miniBotonD2.addEventListener("click", function () {
        if (miniclicD2 == 0) {
            let minicolorAsiento = document.querySelector("#minid2");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d2");
            miniclicD2 = 1;
             
        } else if (miniclicD2 == 1) {
            let minicolorAsiento = document.querySelector("#minid2");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d2");
            arrayButacas =filteredItems;
            miniclicD2 = 0;
            
        }
       controlButacas();        
    });

    var miniclicD3 = 0;
    const miniBotonD3 = document.querySelector("#minid3");
    miniBotonD3.addEventListener("click", function () {
        if (miniclicD3 == 0) {
            let minicolorAsiento = document.querySelector("#minid3");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d3");
            miniclicD3 = 1;
        } else if (miniclicD3 == 1) {
            let minicolorAsiento = document.querySelector("#minid3");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d3");
            arrayButacas =filteredItems;
            miniclicD3 = 0;
        } 
        controlButacas();      
    });

    var miniclicD4 = 0;
    const miniBotonD4 = document.querySelector("#minid4");
    miniBotonD4.addEventListener("click", function () {
        if (miniclicD4 == 0) {
            let minicolorAsiento = document.querySelector("#minid4");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d4");
            miniclicD4 = 1;
        } else if (miniclicD4 == 1) {
            let minicolorAsiento = document.querySelector("#minid4");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d4");
            arrayButacas =filteredItems;
            miniclicD4 = 0;
        }    
        controlButacas();   
    });

    var miniclicD5 = 0;
    const miniBotonD5 = document.querySelector("#minid5");
    miniBotonD5.addEventListener("click", function () {
        if (miniclicD5 == 0) {
            let minicolorAsiento = document.querySelector("#minid5");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d5");
            miniclicD5 = 1;
        } else if (miniclicD5 == 1) {
            let minicolorAsiento = document.querySelector("#minid5");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d5");
            arrayButacas =filteredItems;
            miniclicD5 = 0;
        }  
        controlButacas();     
    });

    var miniclicD6 = 0;
    const miniBotonD6 = document.querySelector("#minid6");
    miniBotonD6.addEventListener("click", function () {
        if (miniclicD6 == 0) {
            let minicolorAsiento = document.querySelector("#minid6");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d6");
            miniclicD6 = 1;
        } else if (miniclicD6 == 1) {
            let minicolorAsiento = document.querySelector("#minid6");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d6");
            arrayButacas =filteredItems;
            miniclicD6 = 0;
        }  
        controlButacas();     
    });

    var miniclicD7 = 0;
    const miniBotonD7 = document.querySelector("#minid7");
    miniBotonD7.addEventListener("click", function () {
        if (miniclicD7 == 0) {
            let minicolorAsiento = document.querySelector("#minid7");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d7");
            miniclicD7 = 1;
        } else if (miniclicD7 == 1) {
            let minicolorAsiento = document.querySelector("#minid7");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d7");
            arrayButacas =filteredItems;
            miniclicD7 = 0;
        }   
        controlButacas();    
    });

    var miniclicD8 = 0;
    const miniBotonD8 = document.querySelector("#minid8");
    miniBotonD8.addEventListener("click", function () {
        if (miniclicD8 == 0) {
            let colorAsiento = document.querySelector("#minid8");
            colorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d8");
            miniclicD8 = 1;
        } else if (miniclicD8 == 1) {
            let minicolorAsiento = document.querySelector("#minid8");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d8");
            arrayButacas =filteredItems;
            miniclicD8 = 0;
        }    
        controlButacas();   
    });

    var miniclicD9 = 0;
    const miniBotonD9 = document.querySelector("#minid9");
    miniBotonD9.addEventListener("click", function () {
        if (miniclicD9 == 0) {
            let minicolorAsiento = document.querySelector("#minid9");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d9");
            miniclicD9 = 1;
        } else if (miniclicD9 == 1) {
            let minicolorAsiento = document.querySelector("#minid9");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d9");
            arrayButacas =filteredItems;
            miniclicD9 = 0;
        }     
        controlButacas();  
    });

    var miniclicD10 = 0;
    const miniBotonD10 = document.querySelector("#minid10");
    miniBotonD10.addEventListener("click", function () {
        if (miniclicD10 == 0) {
            let minicolorAsiento = document.querySelector("#minid10");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d10");
            miniclicD10 = 1;
        } else if (miniclicD10 == 1) {
            let minicolorAsiento = document.querySelector("#minid10");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d10");
            arrayButacas =filteredItems;
            miniclicD10 = 0;
        }  
        controlButacas();     
    });

    var miniclicD11 = 0;
    const miniBotonD11 = document.querySelector("#minid11");
    miniBotonD11.addEventListener("click", function () {
        if (miniclicD11 == 0) {
            let minicolorAsiento = document.querySelector("#minid11");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("d11");
            miniclicD11 = 1;
        } else if (miniclicD11 == 1) {
            let minicolorAsiento = document.querySelector("#minid11");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "d11");
            arrayButacas =filteredItems;
            miniclicD11 = 0;
        }   
        controlButacas();    
    });

    ///////////////////////////////////////////////////////////////////////////////////

    var miniclicE1 = 0;
    const miniBotonE1 = document.querySelector("#minie1");
    miniBotonE1.addEventListener("click", function () {
        if (miniclicE1 == 0) {
            let minicolorAsiento = document.querySelector("#minie1");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("e1");
            miniclicE1 = 1;
             
        } else if (miniclicE1 == 1) {
            let minicolorAsiento = document.querySelector("#minie1");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "e1");
            arrayButacas =filteredItems;
            miniclicD1 = 0;
            
        }
          controlButacas();   
    });
    
    var miniclicE2 = 0;
        const miniBotonE2 = document.querySelector("#minie2");
        miniBotonE2.addEventListener("click", function () {
            if (miniclicE2 == 0) {
                let minicolorAsiento = document.querySelector("#minie2");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("e2");
                miniclicE2 = 1;
                 
            } else if (miniclicE2 == 1) {
                let minicolorAsiento = document.querySelector("#minie2");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e2");
                arrayButacas =filteredItems;
                miniclicE2 = 0;
                
            }
           controlButacas();        
        });
    
        var miniclicE3 = 0;
        const miniBotonE3 = document.querySelector("#minie3");
        miniBotonE3.addEventListener("click", function () {
            if (miniclicE3 == 0) {
                let minicolorAsiento = document.querySelector("#minie3");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("e3");
                miniclicE3 = 1;
            } else if (miniclicE3 == 1) {
                let minicolorAsiento = document.querySelector("#minie3");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e3");
                arrayButacas =filteredItems;
                miniclicD3 = 0;
            } 
            controlButacas();      
        });
    
        var miniclicE4 = 0;
        const miniBotonE4 = document.querySelector("#minie4");
        miniBotonE4.addEventListener("click", function () {
            if (miniclicE4 == 0) {
                let minicolorAsiento = document.querySelector("#minie4");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("e4");
                miniclicE4 = 1;
            } else if (miniclicE4 == 1) {
                let minicolorAsiento = document.querySelector("#minie4");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e4");
                arrayButacas =filteredItems;
                miniclicE4 = 0;
            }    
            controlButacas();   
        });
    
        var miniclicE5 = 0;
        const miniBotonE5 = document.querySelector("#minie5");
        miniBotonE5.addEventListener("click", function () {
            if (miniclicE5 == 0) {
                let minicolorAsiento = document.querySelector("#minie5");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("e5");
                miniclicE5 = 1;
            } else if (miniclicE5 == 1) {
                let minicolorAsiento = document.querySelector("#minie5");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e5");
                arrayButacas =filteredItems;
                miniclicE5 = 0;
            }  
            controlButacas();     
        });
    
        var miniclicE6 = 0;
        const miniBotonE6 = document.querySelector("#minie6");
        miniBotonE6.addEventListener("click", function () {
            if (miniclicE6 == 0) {
                let minicolorAsiento = document.querySelector("#minie6");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("e6");
                miniclicE6 = 1;
            } else if (miniclicE6 == 1) {
                let minicolorAsiento = document.querySelector("#minie6");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e6");
                arrayButacas =filteredItems;
                miniclicE6 = 0;
            }  
            controlButacas();     
        });
    
        var miniclicE7 = 0;
        const miniBotonE7 = document.querySelector("#minie7");
        miniBotonE7.addEventListener("click", function () {
            if (miniclicE7 == 0) {
                let minicolorAsiento = document.querySelector("#minie7");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("e7");
                miniclicE7 = 1;
            } else if (miniclicE7 == 1) {
                let minicolorAsiento = document.querySelector("#minie7");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e7");
                arrayButacas =filteredItems;
                miniclicE7 = 0;
            }   
            controlButacas();    
        });
    
        var miniclicE8 = 0;
        const miniBotonE8 = document.querySelector("#minie8");
        miniBotonE8.addEventListener("click", function () {
            if (miniclicE8 == 0) {
                let colorAsiento = document.querySelector("#minie8");
                colorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("e8");
                miniclicE8 = 1;
            } else if (miniclicE8 == 1) {
                let minicolorAsiento = document.querySelector("#minie8");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e8");
                arrayButacas =filteredItems;
                miniclicE8 = 0;
            }    
            controlButacas();   
        });
    
        var miniclicE9 = 0;
        const miniBotonE9 = document.querySelector("#minie9");
        miniBotonE9.addEventListener("click", function () {
            if (miniclicE9 == 0) {
                let minicolorAsiento = document.querySelector("#minie9");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("d9");
                miniclicE9 = 1;
            } else if (miniclicE9 == 1) {
                let minicolorAsiento = document.querySelector("#minie9");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e9");
                arrayButacas =filteredItems;
                miniclicE9 = 0;
            }     
            controlButacas();  
        });
    
        var miniclicE10 = 0;
        const miniBotonE10 = document.querySelector("#minie10");
        miniBotonE10.addEventListener("click", function () {
            if (miniclicE10 == 0) {
                let minicolorAsiento = document.querySelector("#minie10");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("e10");
                miniclicE10 = 1;
            } else if (miniclicE10 == 1) {
                let minicolorAsiento = document.querySelector("#minie10");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e10");
                arrayButacas =filteredItems;
                miniclicE10 = 0;
            }  
            controlButacas();     
        });
    
        var miniclicE11 = 0;
        const miniBotonE11 = document.querySelector("#minie11");
        miniBotonE11.addEventListener("click", function () {
            if (miniclicE11 == 0) {
                let minicolorAsiento = document.querySelector("#minie11");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
                arrayButacas.push("e11");
                miniclicE11 = 1;
            } else if (miniclicE11 == 1) {
                let minicolorAsiento = document.querySelector("#minie11");
                minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
                var filteredItems = arrayButacas.filter(item => item !== "e11");
                arrayButacas =filteredItems;
                miniclicE11 = 0;
            }   
            controlButacas();    
        });


    ///////////////////////////////////////////////////////////////////////////////////////
    var miniclicF1 = 0;
const miniBotonF1 = document.querySelector("#minif1");
miniBotonF1.addEventListener("click", function () {
    if (miniclicF1 == 0) {
        let minicolorAsiento = document.querySelector("#minif1");
        minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
        arrayButacas.push("f1");
        miniclicF1 = 1;
         
    } else if (miniclicF1 == 1) {
        let minicolorAsiento = document.querySelector("#minif1");
        minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
        var filteredItems = arrayButacas.filter(item => item !== "f1");
        arrayButacas =filteredItems;
        miniclicF1 = 0;
        
    }
      controlButacas();   
});

var miniclicF2 = 0;
    const miniBotonF2 = document.querySelector("#minif2");
    miniBotonF2.addEventListener("click", function () {
        if (miniclicF2 == 0) {
            let minicolorAsiento = document.querySelector("#minif2");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f2");
            miniclicF2 = 1;
             
        } else if (miniclicF2 == 1) {
            let minicolorAsiento = document.querySelector("#minif2");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f2");
            arrayButacas =filteredItems;
            miniclicF2 = 0;
            
        }
       controlButacas();        
    });

    var miniclicF3 = 0;
    const miniBotonF3 = document.querySelector("#minif3");
    miniBotonF3.addEventListener("click", function () {
        if (miniclicF3 == 0) {
            let minicolorAsiento = document.querySelector("#minif3");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f3");
            miniclicF3 = 1;
        } else if (miniclicF3 == 1) {
            let minicolorAsiento = document.querySelector("#minif3");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f3");
            arrayButacas =filteredItems;
            miniclicF3 = 0;
        } 
        controlButacas();      
    });

    var miniclicF4 = 0;
    const miniBotonF4 = document.querySelector("#minif4");
    miniBotonF4.addEventListener("click", function () {
        if (miniclicF4 == 0) {
            let minicolorAsiento = document.querySelector("#minif4");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f4");
            miniclicF4 = 1;
        } else if (miniclicF4 == 1) {
            let minicolorAsiento = document.querySelector("#minif4");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f4");
            arrayButacas =filteredItems;
            miniclicF4 = 0;
        }    
        controlButacas();   
    });

    var miniclicF5 = 0;
    const miniBotonF5 = document.querySelector("#minif5");
    miniBotonF5.addEventListener("click", function () {
        if (miniclicF5 == 0) {
            let minicolorAsiento = document.querySelector("#minif5");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f5");
            miniclicF5 = 1;
        } else if (miniclicF5 == 1) {
            let minicolorAsiento = document.querySelector("#minif5");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f5");
            arrayButacas =filteredItems;
            miniclicF5 = 0;
        }  
        controlButacas();     
    });

    var miniclicF6 = 0;
    const miniBotonF6 = document.querySelector("#minif6");
    miniBotonF6.addEventListener("click", function () {
        if (miniclicF6 == 0) {
            let minicolorAsiento = document.querySelector("#minif6");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f6");
            miniclicF6 = 1;
        } else if (miniclicF6 == 1) {
            let minicolorAsiento = document.querySelector("#minif6");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f6");
            arrayButacas =filteredItems;
            miniclicF6 = 0;
        }  
        controlButacas();     
    });

    var miniclicF7 = 0;
    const miniBotonF7 = document.querySelector("#minif7");
    miniBotonF7.addEventListener("click", function () {
        if (miniclicF7 == 0) {
            let minicolorAsiento = document.querySelector("#minif7");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f7");
            miniclicF7 = 1;
        } else if (miniclicF7 == 1) {
            let minicolorAsiento = document.querySelector("#minif7");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f7");
            arrayButacas =filteredItems;
            miniclicF7 = 0;
        }   
        controlButacas();    
    });

    var miniclicF8 = 0;
    const miniBotonF8 = document.querySelector("#minif8");
    miniBotonF8.addEventListener("click", function () {
        if (miniclicF8 == 0) {
            let colorAsiento = document.querySelector("#minif8");
            colorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f8");
            miniclicF8 = 1;
        } else if (miniclicF8 == 1) {
            let minicolorAsiento = document.querySelector("#minif8");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f8");
            arrayButacas =filteredItems;
            miniclicF8 = 0;
        }    
        controlButacas();   
    });

    var miniclicF9 = 0;
    const miniBotonF9 = document.querySelector("#minif9");
    miniBotonF9.addEventListener("click", function () {
        if (miniclicF9 == 0) {
            let minicolorAsiento = document.querySelector("#minif9");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f9");
            miniclicF9 = 1;
        } else if (miniclicF9 == 1) {
            let minicolorAsiento = document.querySelector("#minif9");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f9");
            arrayButacas =filteredItems;
            miniclicF9 = 0;
        }     
        controlButacas();  
    });

    var miniclicF10 = 0;
    const miniBotonF10 = document.querySelector("#minif10");
    miniBotonF10.addEventListener("click", function () {
        if (miniclicF10 == 0) {
            let minicolorAsiento = document.querySelector("#minif10");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f10");
            miniclicF10 = 1;
        } else if (miniclicF10 == 1) {
            let minicolorAsiento = document.querySelector("#minif10");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f10");
            arrayButacas =filteredItems;
            miniclicF10 = 0;
        }  
        controlButacas();     
    });

    var miniclicF11 = 0;
    const miniBotonF11 = document.querySelector("#minif11");
    miniBotonF11.addEventListener("click", function () {
        if (miniclicF11 == 0) {
            let minicolorAsiento = document.querySelector("#minif11");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-morado.png')";
            arrayButacas.push("f11");
            miniclicF11 = 1;
        } else if (miniclicF11 == 1) {
            let minicolorAsiento = document.querySelector("#minif11");
            minicolorAsiento.style.backgroundImage = "url('/img/25-butaca-perry.png')";
            var filteredItems = arrayButacas.filter(item => item !== "f11");
            arrayButacas =filteredItems;
            miniclicF11 = 0;
        }   
        controlButacas();    
    });

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

/*fixme*/
/*NECESITAMMOS QUE AL HACER UN SEGUNDO CLICK SE INVIRTA LO ANTERIOR*/
function controlButacas(){
    let botonSigui = document.querySelector("#botonSiguiente");
    let totalButacas=arrayButacas.length;
   
    if (totalButacas == 0){
        botonSigui.style.visibility='hidden';
    } else if (totalButacas>= 1){
        botonSigui.style.visibility='visible';
        console.log(totalButacas, typeof totalButacas ) ;
        console.log(entradasMaximas,  typeof entradasMaximas) ;
    } 
     if(totalButacas > entradasMaximas){
        let PopUpButacas = document.querySelector("#popupButacas");
        PopUpButacas.style.visibility = 'visible';
        PopUpButacas.style.opacity= 1;
    }
    
}

const BotonPasarelaPago =  document.querySelector("#BotonPasarelaPago");
BotonPasarelaPago.addEventListener("click",function(){
    console.log("Vamos a pagar las entradas");
})