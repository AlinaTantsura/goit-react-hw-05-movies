import axios from "axios";

const optionsAxios = {
    baseURL: 'https://api.themoviedb.org',
    params: {
        key: 'f61627c9cfc49b64051fa8ee64af0381',
    }
}

const fetchMovies = async () => {
  const response = await axios.get('/trending/get-trending', optionsAxios);
    return response;
}
export { fetchMovies };