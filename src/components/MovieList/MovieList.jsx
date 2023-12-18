import { fetchMovies } from "API";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    async function getMovies() {
        try {
            const resp = await fetchMovies();
            setMovies([...resp.data.results])
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (<>
        <ul>
            {movies.map((movie) => (<li key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                    {movie.name || movie.title}
                </Link></li>))}
        </ul>
    </>)
};

export default MovieList;