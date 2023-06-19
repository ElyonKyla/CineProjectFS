var entradaPelicula ={} ;
fetch('cartelera.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let patataCartelera = data;
    let divMoviesContainer = document.getElementById("movies-container");
    patataCartelera.forEach(element => {
        //let datosPelicula=
        buscarPelicula(element.id).then(datosPelicula => {
        console.log(datosPelicula);
        let divPeliculaIndividual = document.createElement("DIV");
        divPeliculaIndividual.className="pelicula";
        let cartel = document.createElement("IMG");
        cartel.className="imgPeli";
        cartel.src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+datosPelicula.poster_path;
        divPeliculaIndividual.appendChild(cartel);
        let divInfoPeli = document.createElement("DIV");
        divInfoPeli.className="infoPeli";
        //
            // Crear el elemento button con la clase "textoPeli" y el id "comprar"
        var buttonComprar = document.createElement("button");
        buttonComprar.classList.add("textoPeli");
        buttonComprar.onclick = () => {
            popUpCompra(element.id, element.titulo);
          };
        buttonComprar.textContent = "Comprar";


        // Crear el elemento anchor (enlace) con la clase "textoPeli2" y el atributo href
        var anchorVerInfo = document.createElement("a");
        anchorVerInfo.classList.add("textoPeli2");
        anchorVerInfo.href = "/html/pelicula-info.html";
        anchorVerInfo.textContent = "Ver info";

        // Agregar el button y el anchor al div
        divInfoPeli.appendChild(buttonComprar);
        divInfoPeli.appendChild(anchorVerInfo);
        //
        divPeliculaIndividual.appendChild(divInfoPeli);
        let divTitulo = document.createElement("H4");
        divTitulo.textContent=element.titulo;
        divPeliculaIndividual.appendChild(divTitulo);
        divMoviesContainer.appendChild(divPeliculaIndividual);
        });

    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  fetch('estrenos.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let patataCartelera = data;
    let divMoviesContainer = document.getElementById("movies-container2");
    patataCartelera.forEach(element => {
        //let datosPelicula=
        buscarPelicula(element.id).then(datosPelicula => {
        console.log(datosPelicula);
        let divPeliculaIndividual = document.createElement("DIV");
        divPeliculaIndividual.className="pelicula";
        let cartel = document.createElement("IMG");
        cartel.className="imgPeli";
        cartel.src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+datosPelicula.poster_path;
        divPeliculaIndividual.appendChild(cartel);
        let divInfoPeli = document.createElement("DIV");
        divInfoPeli.className="infoPeli";
        //
            // Crear el elemento button con la clase "textoPeli" y el id "comprar"
        var buttonComprar = document.createElement("button");
        buttonComprar.classList.add("textoPeli");
        buttonComprar.onclick = () => {
            popUpCompra(element.id, element.titulo);
          };
        buttonComprar.textContent = "Comprar";

        // Crear el elemento anchor (enlace) con la clase "textoPeli2" y el atributo href
        var anchorVerInfo = document.createElement("a");
        anchorVerInfo.classList.add("textoPeli2");
        anchorVerInfo.href = "/html/pelicula-info.html";
        anchorVerInfo.textContent = "Ver info";

        // Agregar el button y el anchor al div
        divInfoPeli.appendChild(buttonComprar);
        divInfoPeli.appendChild(anchorVerInfo);
        //
        divPeliculaIndividual.appendChild(divInfoPeli);
        let divTitulo = document.createElement("H4");
        divTitulo.textContent=element.titulo;
        divPeliculaIndividual.appendChild(divTitulo);
        divMoviesContainer.appendChild(divPeliculaIndividual);
        });

    });
  })
  .catch(error => {
    console.error('Error:', error);
  });



function popUpCompra(id,titulo){
    entradaPelicula.id=id;
    entradaPelicula.titulo=titulo
    //localStorage.setItem("ordenDeCompra", entradaPelicula);
    saveStorage();
    let PopUp = document.querySelector("#popupSesiones");
        PopUp.style.visibility = 'visible';
        PopUp.style.opacity= 1;
}
    const botonCuatro =  document.querySelector("#cuatro");
    botonCuatro.addEventListener("click",function(){
        //let horaCuatro = document.querySelector("#16:00");
        entradaPelicula.sesion="16:00";
        saveStorage();
        window.location.href="/html/seleccion-de-entradas.html";
        //localStorage.setItem("ordenDeCompra", entradaPelicula);
    })

    const botonSeis =  document.getElementById("seis");
    botonSeis.addEventListener("click",function(){
        //let horaSeis = document.querySelector("#18:30");
        entradaPelicula.sesion="18:30";
        saveStorage();
        window.location.href="/html/seleccion-de-entradas.html";
        //localStorage.setItem("ordenDeCompra", entradaPelicula);
    })

    const botonNueve =  document.querySelector("#nueve");
    botonNueve.addEventListener("click",function(){
        //let horaNueve = document.querySelector("#21:00");
        entradaPelicula.sesion="21:00";
        saveStorage();
        window.location.href="/html/seleccion-de-entradas.html";
        //localStorage.setItem("ordenDeCompra", entradaPelicula);
    })
    function saveStorage() {
        datos = JSON.stringify(entradaPelicula)
        localStorage.setItem("ordenDeCompra", datos);
      }

    