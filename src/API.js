import axios from "axios";

const optionsAxios = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
    // accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjE2MjdjOWNmYzQ5YjY0MDUxZmE4ZWU2NGFmMDM4MSIsInN1YiI6IjY1N2Q4NDZiYjdmYmJkMDZjODMwNTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NWSj1-y7xBlR5IWWT6t3fEcBUOHkAiJumA6Nwpm4FQ'
  }
}

async function fetchMovies (){
  return await axios.get('trending/all/day?language=en-US', optionsAxios);
   
}

async function fetchMoviesBySearchWord(searchWord) {
  return await axios.get(`search/movie?query=${searchWord}&include_adult=false&language=en-US&page=1`, optionsAxios);
}

async function fetchMovieDetails(movie_id) {
  return await axios.get(`movie/${movie_id}`, optionsAxios);
}

async function fetchMovieCast(movie_id) {
  return await axios.get(`movie/${movie_id}/credits`, optionsAxios);
}

async function fetchMovieReviews(movie_id) {
  return await axios.get(`movie/${movie_id}/reviews`, optionsAxios);
}


export { fetchMovies, fetchMoviesBySearchWord, fetchMovieDetails, fetchMovieCast, fetchMovieReviews };