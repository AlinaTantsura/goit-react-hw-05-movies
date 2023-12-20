import { fetchMovies, fetchMoviesBySearchWord } from "API";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ searchWord = '' }) => {
    
    let path;
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    async function getMovies(searchWord) {
        if (!searchWord) {
            try {
            const resp = await fetchMovies();
            setMovies(resp.data.results)
        }
        catch (error) {
            console.log(error.message)
        }
        }
        else {
            try {
            const resp = await fetchMoviesBySearchWord(searchWord);
                // console.log(resp);
                setMovies(resp.data.results);
            }
            catch{}
        }
        
    }
    useEffect(() => {
        getMovies(searchWord);
    }, [searchWord])

    console.log(path)
    return (<>
        <ul>
            {movies.map((movie) => (<li key={movie.id}>
                {/* {path = ((location.pathname) === '/') ? `movies/${movie.id}` : movie.id} */}
                {(location.pathname) === '/' && <Link to={`movies/${movie.id}`} state={{ from:'/'}}>
                    {movie.name || movie.title}
                </Link>
                }
                { (location.pathname) === '/movies' && <Link to={`${movie.id}`} state={{ from:`/movies?query=${searchWord}`}}>
                    {movie.name || movie.title}
                </Link>
                }
            </li>))}
        </ul>
    </>)
};

export default MovieList;