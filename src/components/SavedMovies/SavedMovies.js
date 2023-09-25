import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({
  handleAddSaveMovie,
  isSaveCards,
  setIsSaveCards,
  handleDeleteSaveMovie,
  isLikedCard,
  handleSearchInSavedMovie,
  isToggledSaveMovie,
  setIsToggledSaveMovie,
  IsSearchInSaveMovies,
  setIsSearchInSaveMovies,
}) {
  return (
    <main className="savedMovies">
      <section>
        <SearchForm
          setIsSearchInSaveMovies={setIsSearchInSaveMovies}
          isSaveCards={isSaveCards}
          isToggledSaveMovie={isToggledSaveMovie}
          handleSearchInSavedMovie={handleSearchInSavedMovie}
          IsSearchInSaveMovies={IsSearchInSaveMovies}
          setIsToggledSaveMovie={setIsToggledSaveMovie}
        />
        <MoviesCardList
          isSaveCards={isSaveCards}
          setIsSaveCards={setIsSaveCards}
          isLikedCard={isLikedCard}
          handleDeleteSaveMovie={handleDeleteSaveMovie}
          handleAddSaveMovie={handleAddSaveMovie}
        />
      </section>
    </main>
  );
}

export default SavedMovies;
