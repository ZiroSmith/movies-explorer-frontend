import React from "react";
import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesCardArray } from "../../utils/constans";

function Movies() {
  return (
    <main className="movies">
      <section>
        <SearchForm />
        <MoviesCardList moviesCardArray={moviesCardArray} />
      </section>
    </main>
  );
}

export default Movies;
