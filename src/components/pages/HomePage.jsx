import { fetchMovies } from "API";
import { useEffect, useState } from "react";

const HomePage = () => {
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
    },[])
    
    return (<>
        <h1>Trending today</h1>
        <ul>
            {movies.map((movie) => (<li key={movie.id}>
                <a href='*'>
                    {movie.name || movie.title}
                </a></li>))}
        </ul>
    </>)
}

export default HomePage;