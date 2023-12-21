import { fetchMovies, fetchMoviesBySearchWord } from "API";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {ListItem, LinkStyled } from "./List.styled";
import { Notify } from "notiflix";

const MovieList = ({ searchWord = '' }) => {
    
    const location = useLocation();
    const [movies, setMovies] = useState(null);
    async function getMovies(searchWord) {
            try {
                if (!searchWord) {
            const resp = await fetchMovies();
                    setMovies(resp.data.results)
                }
                else {
            const resp = await fetchMoviesBySearchWord(searchWord);
                setMovies(resp.data.results);
        }
            }
            catch (error) {
                Notify.failure( "Try reloading the page) " + error.message)
        }  
    }
    useEffect(() => {
        getMovies(searchWord);
    }, [searchWord])

    return (
        movies && 
        (<ul>
            {movies.map((movie) => (<ListItem key={movie.id}>
                {(location.pathname) === '/' && <LinkStyled to={`movies/${movie.id}`} state={{ from:'/'}}>
                    {movie.name || movie.title}
                </LinkStyled>
                }
                { (location.pathname) === '/movies' && <LinkStyled to={`${movie.id}`} state={{ from:`/movies?query=${searchWord}`}}>
                    {movie.name || movie.title}
                </LinkStyled>
                }
            </ListItem>))}
        </ul>)
        )
};

export default MovieList;