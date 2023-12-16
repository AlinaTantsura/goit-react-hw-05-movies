import { fetchMovies } from "API";
import { NavLink } from "react-router-dom";
import Home from "./Home/Home";

export const App = () => {
  async function getMovies() {
    const resp = await fetchMovies();
    console.log(resp);
  }

  getMovies();

  return (
    <header>
      <nav>
        <NavLink to={'/'} element={<Home />} />
        {/* <NavLink to={'/movies'} element={<Movies />} /> */}
      </nav>
    </header>
  )
};
