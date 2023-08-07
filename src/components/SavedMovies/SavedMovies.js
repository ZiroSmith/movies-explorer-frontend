import React from "react";
import "./SavedMovies.css";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardListSave from "../MoviesCardList/MoviesCardListSave";
import { moviesCardArray } from "../../utils/constans";

function SavedMovies() {
  return (
    <main className="savedMovies">
      <section>
        <SearchForm />
        <Preloader />
        <MoviesCardListSave moviesCardArray={moviesCardArray} />
      </section>
    </main>
  );
}

export default SavedMovies;
