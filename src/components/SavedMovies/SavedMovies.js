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
          isToggledSaveMovie={isToggledSaveMovie}
          setIsToggledSaveMovie={setIsToggledSaveMovie}
          handleSearchInSavedMovie={handleSearchInSavedMovie}
          IsSearchInSaveMovies={IsSearchInSaveMovies}
          setIsSearchInSaveMovies={setIsSearchInSaveMovies}
          isSaveCards={isSaveCards}
        />
        <MoviesCardList
          handleAddSaveMovie={handleAddSaveMovie}
          isSaveCards={isSaveCards}
          handleDeleteSaveMovie={handleDeleteSaveMovie}
          setIsSaveCards={setIsSaveCards}
          isLikedCard={isLikedCard}
        />
      </section>
    </main>
  );
}

export default SavedMovies;
