import axios from "axios";

const optionsAxios = {
    baseURL: 'https://api.themoviedb.org/',
    params: {
        key: 'fd1282bc892320382c1713167a6f886c',
    }
}

const fetchMovies = async () => {
  const response = await axios.get('3/trending/all', optionsAxios);
    return response;
}
export { fetchMovies };