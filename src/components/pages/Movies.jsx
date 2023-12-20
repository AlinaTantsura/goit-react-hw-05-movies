// import { fetchMoviesBySearchWord } from "API";

import MovieList from "components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const searchRequest = form.elements.search.value;
        
         if (searchRequest) {
             setSearchParams({ query: searchRequest });
        }
        //  else {
        //      setSearchParams({}); 
        // }
        
        form.reset();
    
    }

    return (
        <main>
    <form onSubmit={handleSubmit}>
            <input name="search"/>
            <button type='submit'>Search</button>
        </form>
            {searchParams.get('query') && (<MovieList searchWord={searchParams.get('query')} />)}
        </main>)
}
export default Movies;