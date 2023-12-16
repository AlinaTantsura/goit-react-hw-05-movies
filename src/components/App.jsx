// import { getAllMovies } from "API";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
// import React, { useState } from "react";

export const App = () => {
  return (
    <div>
    <header>
      <nav>
        <NavLink to={'/'} element={<Home />}>Home</NavLink>
        {/* <NavLink to={'/movies'} element={<Movies />} /> */}
      </nav>
    </header>

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
};
