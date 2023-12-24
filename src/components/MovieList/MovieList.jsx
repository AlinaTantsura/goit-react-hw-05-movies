import { fetchMovies, fetchMoviesBySearchWord } from "API";
import { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import {ListItem, LinkStyled } from "./List.styled";
import { Notify } from "notiflix";

const MovieList = ({ searchWord = '' }) => {
    const location = useLocation();
    const [movies, setMovies] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
            async function getMovies(searchWord) {
            try {
                if (!searchWord) {
            const resp = await fetchMovies();
                    if (resp.data.results.length === 0) {
                        setMovies(null);
                        Notify.failure("There are no movies( Try reload the page)))")
                        return
                    }
                    setMovies(resp.data.results)
                }
                else {
                    const resp = await fetchMoviesBySearchWord(searchWord);
                    if (resp.data.results.length === 0) {
                        setMovies(null);
                        Notify.failure("There are no movies( Try change search word or reload the page)))")
                        navigate('/movies');
                        return
                    }
                    setMovies(resp.data.results);
        }
            }
            catch (error) {
                Notify.failure( "Try reloading the page) " + error.message)
        }  
    }
        getMovies(searchWord);
    }, [searchWord, navigate])

    return (
        movies && (<ul>
                    {movies.map((movie) => (<ListItem key={movie.id}>
                        {(location.pathname) === '/movies' ? <LinkStyled to={`${movie.id}`} state={{ from: `/goit-react-hw-05-movies/movies?query=${searchWord}` }}>
                            {movie.name || movie.title}
                            </LinkStyled>
                            : <LinkStyled to={`movies/${movie.id}`} state={{ from:'/goit-react-hw-05-movies/'}}>
                                {movie.name || movie.title}
                            </LinkStyled>
                        }
                    </ListItem>))}
                </ul>)
        )
};

export default MovieList;