import BackLink from "components/BackLink/BackLink";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
    const location = useLocation();
    const backPage = location.state?.from ?? "/"; 

    return (
        <main>
            <BackLink to={backPage}>BACK</BackLink>
            <MovieInfo />
        </main>
    )
}
export default MovieDetails;