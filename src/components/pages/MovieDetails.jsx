// import { fetchMovieDetails } from "API";
import BackLink from "components/BackLink/BackLink";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
    const location = useLocation();
    const backPage = location.state?.from ?? "/"; 
    const searchParams = useParams();
    const { id } = searchParams;
   
    return (
        <main>
            <BackLink to={backPage}>BACK</BackLink>
            <MovieInfo movieId={id} />
            <Outlet/>
        </main>
    )
}
export default MovieDetails;