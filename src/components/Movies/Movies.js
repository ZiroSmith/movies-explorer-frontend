import React from "react";

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {
  return (
    <main className="movies">
      <section>
          <SearchForm />

          <Preloader />
          <MoviesCardList />
          <MoviesCard />
      </section>
    </main>
  );
}

export default Movies;
