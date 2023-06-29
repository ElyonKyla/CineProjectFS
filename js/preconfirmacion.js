var ordenDeCompraCompleta = JSON.parse(localStorage.getItem("ordenDeCompra"));
console.log(ordenDeCompraCompleta);

// let divcartelCompr = document.getElementById("imgCompra")
// let cartelCompra = document.createElement("IMG");
// cartelCompra.className="imgPeli";
// cartelCompra.src=ordenDeCompraCompleta.cartel;
// divcartelCompr.appendChild(cartelCompra);

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

const botonSiguienteCompri =  document.querySelector("#botonSiguienteCompri");
botonSiguienteCompri.addEventListener("click",function(){
    sendToCeca('005',pTotal);
    console.log(pTotal);
})

function sendToCeca(operacion, importe) {
    var SHA256 = CryptoJS.SHA256;
      var claveEncriptacion = "9EIB5XNW";
      var MerchantID = "250154010";
      var AcquirerBIN = "0000554026";
      var TerminalID = "00000003";
      var Num_operacion = operacion;
      var Importe = (importe * 100).toString();
      var TipoMoneda = "978";
      var Exponente = "2";
      var Referencia = "";
      var Cifrado = "SHA2";
      var Pago_soportado = "SSL";
      var Idioma = "1"
      var URL_OK = "https://url_de_la_web.com/pago/ok"
      var URL_NOK = "https://url_de_la_web.com/pago/nook"
      var Firma = SHA256(claveEncriptacion + MerchantID + AcquirerBIN + TerminalID + Num_operacion + Importe + TipoMoneda + Exponente + Referencia + Cifrado + URL_OK + URL_NOK);
  
      const mapForm = document.createElement('form');
      mapForm.method = 'POST';
      mapForm.action = `https://tpv.ceca.es/tpvweb/tpv/compra.action`;
      mapForm.enctype = 'application/x-www-form-urlencoded'
      mapForm.style.display = 'none';
  
      const mapInput = document.createElement('input');
      mapInput.type = 'hidden';
      mapInput.name = 'MerchantID';
      mapInput.value = MerchantID;
      mapForm.appendChild(mapInput);
  
      const mapInput1 = document.createElement('input');
      mapInput1.type = 'hidden';
      mapInput1.name = 'AcquirerBIN';
      mapInput1.value = AcquirerBIN;
      mapForm.appendChild(mapInput1);
  
      const mapInput2 = document.createElement('input');
      mapInput2.type = 'hidden';
      mapInput2.name = 'TerminalID';
      mapInput2.value = TerminalID;
      mapForm.appendChild(mapInput2);
  
      const mapInput3 = document.createElement('input');
      mapInput3.type = 'hidden';
      mapInput3.name = 'URL_OK';
      mapInput3.value = URL_OK;
      mapForm.appendChild(mapInput3);
  
      const mapInput4 = document.createElement('input');
      mapInput4.type = 'hidden';
      mapInput4.name = 'URL_NOK';
      mapInput4.value = URL_NOK;
      mapForm.appendChild(mapInput4);
  
      const mapInput5 = document.createElement('input');
      mapInput5.type = 'hidden';
      mapInput5.name = 'Firma';
      mapInput5.value = Firma.toString();
      mapForm.appendChild(mapInput5);
  
      const mapInput6 = document.createElement('input');
      mapInput6.type = 'hidden';
      mapInput6.name = 'Cifrado';
      mapInput6.value = Cifrado;
      mapForm.appendChild(mapInput6);
  
      const mapInput7 = document.createElement('input');
      mapInput7.type = 'hidden';
      mapInput7.name = 'Num_operacion';
      mapInput7.value = Num_operacion;
      mapForm.appendChild(mapInput7);
  
      const mapInput8 = document.createElement('input');
      mapInput8.type = 'hidden';
      mapInput8.name = 'Importe';
      mapInput8.value = Importe;
      mapForm.appendChild(mapInput8);
  
      const mapInput9 = document.createElement('input');
      mapInput9.type = 'hidden';
      mapInput9.name = 'TipoMoneda';
      mapInput9.value = TipoMoneda;
      mapForm.appendChild(mapInput9);
  
      const mapInput10 = document.createElement('input');
      mapInput10.type = 'hidden';
      mapInput10.name = 'Exponente';
      mapInput10.value = Exponente;
      mapForm.appendChild(mapInput10);
  
      const mapInput11 = document.createElement('input');
      mapInput11.type = 'hidden';
      mapInput11.name = 'Pago_soportado';
      mapInput11.value = Pago_soportado;
      mapForm.appendChild(mapInput11);
  
      const mapInput12 = document.createElement('input');
      mapInput12.type = 'hidden';
      mapInput12.name = 'Idioma';
      mapInput12.value = Idioma;
      mapForm.appendChild(mapInput12);
  
      document.body.appendChild(mapForm);
  
      mapForm.submit();
    }


