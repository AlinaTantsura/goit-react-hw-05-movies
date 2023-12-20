import { fetchMovieDetails } from "API";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieInfo = ({movieId}) => {

    const [movieInfo, setMovieInfo] = useState(null);
    async function getMovieInfo(id) {
        try {
            const resp = await fetchMovieDetails(id);
            setMovieInfo(resp.data);
            // console.log(resp.data);
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getMovieInfo(movieId);
    }, [movieId])
    

    return (
    <>
        { movieInfo && (
            <>
                <img src={movieInfo.poster_path} alt={movieInfo.title || movieInfo.name} />
                <h1>{movieInfo.title || movieInfo.name}</h1>
                <p>User score: {movieInfo.vote_average}</p>
                <h2>Overview</h2>
                <p>{movieInfo.overview}</p>
                <h3>Genres</h3>
                {movieInfo.genres.map(item => (<p key={item.id}>{item.name}</p>))}
             <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Review</Link>
                </li>
            </ul>
                </>
            )}
    </>
    )
}
export default MovieInfo;