import React from "react";
import "./Movies.css";
import ButtonAddMovie from "../ButtonAddMovie/ButtonAddMovie";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({
  cards,
  search,
  setSearch,
  isToggled,
  setIsToggled,
  handleSearch,
  isLoading,
  loadMoreMovie,
  isArrElement,
  handleAddSaveMovie,
  isLikedCard,
  handleDeleteSaveMovie,
  isErrorMovie,
}) {
  return (
    <main className="movies">
      <section>
        <SearchForm
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList
              cards={cards}
              handleAddSaveMovie={handleAddSaveMovie}
              isLikedCard={isLikedCard}
              handleDeleteSaveMovie={handleDeleteSaveMovie}
              isErrorMovie={isErrorMovie}
            />
            <ButtonAddMovie
              cards={cards}
              loadMoreMovie={loadMoreMovie}
              isArrElement={isArrElement}
            />
          </>
        )}
      </section>
    </main>
  );
}

export default Movies;
