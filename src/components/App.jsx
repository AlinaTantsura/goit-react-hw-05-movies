// import { getAllMovies } from "API";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import HomePage from "./pages/HomePage";
import Layout from "./Layout/Layout";
import MovieDetails from "./pages/MovieDetails";
// import React, { useState } from "react";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:id' element={<MovieDetails />}>
          {/* <Route path='cast' element={<Cast /> } />
          <Route path='reviews' element={<Reviews /> } /> */}
        </Route>
        <Route path='*' element={<HomePage />} />
      </Route>
      </Routes>
  
      
  )
};
