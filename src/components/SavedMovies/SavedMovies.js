import React from "react";
import "./SavedMovies.css";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { savedMoviesCardArray } from "../../utils/constans";

function SavedMovies() {
  return (
    <main className="savedMovies">
      <section>
        <SearchForm />
        <Preloader />
        <MoviesCardList moviesCardArray={savedMoviesCardArray} />
      </section>
    </main>
  );
}

export default SavedMovies;
