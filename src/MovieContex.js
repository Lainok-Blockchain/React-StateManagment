import React, { useState, createContext } from "react";

export const MoviContex = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry potter",
      price: "$10",
      id: 1
    },
    {
      name: "Game of thrones",
      price: "$20",
      id: 2
    },
    {
      name: "Montecarlo",
      price: "$30",
      id: 3
    }
  ]);

  return (
    <MoviContex.Provider value={[movies, setMovies]}>
      {props.children}
    </MoviContex.Provider>
  );
};
