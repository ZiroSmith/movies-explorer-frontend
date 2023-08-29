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
  isErrorMovie,
  isLoading,
  loadMoreMovie,
  isArrElement,
  isToggled,
  setIsToggled,
  handleSearch,
  handleAddSaveMovie,
  isLikedCard,
  handleDeleteSaveMovie,
}) {
  return (
    <main className="movies">
      <section>
        <SearchForm
          search={search}
          setSearch={setSearch}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          handleSearch={handleSearch}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList
              cards={cards}
              isErrorMovie={isErrorMovie}
              handleAddSaveMovie={handleAddSaveMovie}
              isLikedCard={isLikedCard}
              handleDeleteSaveMovie={handleDeleteSaveMovie}
            />
            <ButtonAddMovie
              loadMoreMovie={loadMoreMovie}
              cards={cards}
              isArrElement={isArrElement}
            />
          </>
        )}
      </section>
    </main>
  );
}

export default Movies;
