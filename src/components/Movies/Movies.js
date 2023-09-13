import React from "react";
import "./Movies.css";
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
  filteredCards,
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
            {isArrElement >= filteredCards.length ? (
              null
            ) : (
              <button
                className="movies__button"
                type="button"
                onClick={loadMoreMovie}
              >
                Ещё
              </button>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default Movies;
