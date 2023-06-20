var ordenDeCompraCompleta = JSON.parse(localStorage.getItem("ordenDeCompra"));
console.log(ordenDeCompraCompleta);

let divcartelCompr = document.getElementById("imgCompra")
let cartelCompra = document.createElement("IMG");
cartelCompra.className="imgPeli";
cartelCompra.src=ordenDeCompraCompleta.cartel;
divcartelCompr.appendChild(cartelCompra);

var pTitulo=document.getElementById("titulo");
pTitulo.textContent=ordenDeCompraCompleta.titulo;

var pSesion=document.getElementById("sesion");
pSesion.textContent=ordenDeCompraCompleta.sesion;

var pEntradas=document.getElementById("entradas");
pEntradas.textContent=ordenDeCompraCompleta.numEntradas;

var pButacas=document.getElementById("butacas");
pButacas.textContent=ordenDeCompraCompleta.arraButacas;

var pTotal=document.getElementById("total");
pTotal.textContent=ordenDeCompraCompleta.importeTotal+" €";


