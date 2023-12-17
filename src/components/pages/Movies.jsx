import { fetchMoviesBySearchWord } from "API";

const Movies = () => {
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