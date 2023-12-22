import { fetchMovieDetails } from "API";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MovieMainInfo from "./MovieMainInfo.styled";
import MovieAddInfo from "./MovieAddInfo.styled";

const MovieInfo = ({ movieId }) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const location = useLocation();
    const [movieInfo, setMovieInfo] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function getMovieInfo(id) {
        try {
            const resp = await fetchMovieDetails(id);
            setMovieInfo(resp.data);
        }
        catch {
            Notify.failure("There is no information about movie");
            navigate('/');
        }
        } 
        
        getMovieInfo(movieId);
    }, [movieId, navigate])

    return (
    <>
            {movieInfo && (
                <section>
                    <MovieMainInfo>
                        <img src={movieInfo.poster_path ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}` : defaultImg} alt={movieInfo.title || movieInfo.name} width={250}/>
                        <div>
                            <h1>{movieInfo.title || movieInfo.name}</h1>
                            <p>User score: {movieInfo.vote_average}</p>
                            <h2>Overview</h2>
                            <p>{movieInfo.overview}</p>
                            <h3>Genres</h3>
                            <ul>
                                {movieInfo.genres.map(item => (<li key={item.id}>{item.name}</li>))}
                            </ul>
                            
                        </div>
                        
                    </MovieMainInfo>    
                    <MovieAddInfo>
                    <h4>Additional information</h4>
                    <ul>
                        <li>
                            <Link to='cast' state={location.state}>Cast</Link>
                        </li>
                        <li>
                            <Link to='reviews' state={location.state}>Review</Link>
                        </li>
                        </ul>
                    </MovieAddInfo>
                </section>
            )}
    </>
    )
}
export default MovieInfo;