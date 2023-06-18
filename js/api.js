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

