import { fetchMoviesBySearchWord } from "API";
// import { useSearchParams } from "react-router-dom";

const Movies = () => {
    // const searchParams = useSearchParams();
    // console.log(searchParams);
    function handleSubmit(event) {
        event.preventDefault();
        const searchWord = event.target.elements.search.value;
        getMovies(searchWord)
    
    }

    async function getMovies(searchWord) {
              try {
            const resp = await fetchMoviesBySearchWord(searchWord);
            console.log(resp);
            }
            catch{}
        }
    return (
    <form onSubmit={handleSubmit}>
            <input name="search"/>
            <button type='submit'>Search</button>
    </form>)
}
export default Movies;