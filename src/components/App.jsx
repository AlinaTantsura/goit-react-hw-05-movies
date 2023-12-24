import { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";

const Movies = lazy(() => import("./pages/Movies") );
const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  const location = useLocation();
  console.log(location)
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route index element={<HomePage />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:id' element={<MovieDetails />}>
          <Route path='cast' element={<Cast /> } />
          <Route path='reviews' element={<Reviews /> } />
        </Route>
        <Route path='*' element={<HomePage isWrong={true} />} />
      </Route>
      </Routes>
  
      
  )
};
