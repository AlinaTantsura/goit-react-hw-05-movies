import axios from "axios";

const optionsAxios = {
    baseURL: 'https://api.themoviedb.org',
    headers: {
    // accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjE2MjdjOWNmYzQ5YjY0MDUxZmE4ZWU2NGFmMDM4MSIsInN1YiI6IjY1N2Q4NDZiYjdmYmJkMDZjODMwNTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NWSj1-y7xBlR5IWWT6t3fEcBUOHkAiJumA6Nwpm4FQ'
  }
}

const fetchMovies = async () => {
  return await axios.get('/3/trending/all/day?language=en-US', optionsAxios);
   
}



export { fetchMovies };