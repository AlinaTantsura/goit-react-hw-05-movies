import MovieList from "components/MovieList/MovieList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ isWrong = false }) => {
    const navigate = useNavigate();
    useEffect(() => {
         if (isWrong) {
              navigate('/goit-react-hw-05-movies/');
    }
    },[isWrong, navigate])
   

    return (<>
        <h1>Trending today</h1>
        <MovieList />
    </>)
}

export default HomePage;