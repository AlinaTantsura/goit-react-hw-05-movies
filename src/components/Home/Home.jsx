import { fetchMovies } from "API";
// import { useState } from "react";
  
const Home = () => {
    const movies = [];
    const getAllMovies = async () => {
    try {
        const resp = await fetchMovies();
        console.log(resp.data.results)
        // movies = [...resp.data.results];
        movies.push(...resp.data.results);
    }
    catch(error) {
        console.log(error.message)
    }
    }
    getAllMovies();
    movies.forEach(item=> console.log(item))
    console.log(movies)
    return (
        <>
        <h1>Trending today</h1>
        <ul>
            {movies.map((item) => (<li>{item}</li>))}    
        </ul>
        </>
    )
    
};

export default Home;