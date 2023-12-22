// import { fetchMovieDetails } from "API";
import BackLink from "components/BackLink/BackLink";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { Suspense } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
    const location = useLocation();
    const backPage = location.state?.from ?? "/"; 
    const searchParams = useParams();
    const { id } = searchParams;
   
    return (
        <main>
            {/* <BackLink to={backPage}><svg fill="none" height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h48v48h-48z" fill="#fff" fill-opacity=".01"/><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m5.79891 24h35.99999"/><path d="m17.7988 36-11.99997-12 11.99997-12"/></g></svg> GO BACK</BackLink> */}
            <BackLink to={backPage}><svg fill="none" height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"><g strokeLinecap="round" strokeLinejoin="round"  strokeWidth="4"><path d="m5.79891 24h35.99999"/><path d="m17.7988 36-11.99997-12 11.99997-12"/></g></svg> GO BACK</BackLink>
            <MovieInfo movieId={id} />
            <Suspense fallback={<div>Loading info...</div>}>
                <Outlet/>
            </Suspense>
            
        </main>
    )
}
export default MovieDetails;