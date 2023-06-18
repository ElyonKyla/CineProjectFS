const apiKey = 'fd79c2da1b11609d89c6acd0f9e3038a';
const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDc5YzJkYTFiMTE2MDlkODljNmFjZDBmOWUzMDM4YSIsInN1YiI6IjY0OGMxYjc1NTU5ZDIyMDBjNTc1OTU2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wzNcCmCggO0luaR1x75DkyVYMazrS79jt7Ttqan0aFM';
function buscarPelicula(id){
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', Authorization: 'Bearer '+apiToken}
      };
      
      return fetch('https://api.themoviedb.org/3/movie/'+id+'?language=es-ES', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));

}
///////////////////
//buscarPelicula(569094);
const apiUrl = 'https://api.themoviedb.org/3/collection/collection_id?language=en-US';

// Headers para autenticación
// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ${ apiToken }'
//     };

// fetch(apiUrl, {
//     method: 'GET',
//     headers: headers
// })
//     .then(response => response.json())
//     .then(data => {
//         const moviesContainer = document.getElementById('movies-container');

//         data.results.forEach(movie => {
//             // Crear una tarjeta para cada película
//             const movieCard = document.createElement('div');
//             movieCard.classList.add('movie-card');

//             // Agregar el título de la película
//             const title = document.createElement('h2');
//             title.textContent = movie.Title;
//             movieCard.appendChild(title);

//             // Agregar la imagen de la película
//             const image = document.createElement('img');
//             image.src = movie.URL;
//             image.alt = movie.Title;
//             movieCard.appendChild(image);

//             // Agregar la tarjeta de película al contenedor
//             moviesContainer.appendChild(movieCard);
//         });
//     })
//     .catch(error => {
//         console.error('Error al obtener las películas:', error);
//     });