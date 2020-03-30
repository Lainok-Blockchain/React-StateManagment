import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MoviContex } from "./MovieContex";

const Movielist = () => {
  const [movies, setMovies] = useContext(MoviContex);

  return (
    <div>
      
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default Movielist;
