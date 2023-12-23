import MovieList from "components/MovieList/MovieList";
import {  useSearchParams } from "react-router-dom";
import Form from "./Form.styled";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const searchRequest = form.elements.search.value;
        
         if (searchRequest) {
             setSearchParams({ query: searchRequest });
        }
        
        form.reset();
    
    }

    return (
        <main>
    <Form onSubmit={handleSubmit}>
            <input name="search"/>
            <button type='submit'>Search</button>
        </Form>
            {searchParams.get('query') && (
                <>
                    <MovieList searchWord={searchParams.get('query')} />
                </>)}
        </main>)
}
export default Movies;