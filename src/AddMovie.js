import React, { useState, useContext } from "react";
import { MoviContex } from "./MovieContex";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MoviContex);

  const updateName = event => {
    setName(event.target.value);
  };
  const updatePrice = event => {
    setPrice(event.target.value);
  };
  const addMovie = event => {
    event.preventDefault(); // it stop's page from refershing when you submit
    setMovies(previesMovies => [
      ...previesMovies,
      { name: name, price: price }
    ]);
  };
  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
