import "./MoviesCardList.css";
import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  cards,
  isSaveCards,
  setIsSaveCards,
  isErrorMovie,
  handleAddSaveMovie,
  isLikedCard,
  handleDeleteSaveMovie,
}) {
  const location = useLocation();

  return (
    <>
      {!isErrorMovie ? (
        <>
          <section className="movies">
            {location.pathname === "/movies" && (
              <ul className="movies__container">
                {cards.map((card) => (
                  <li className="movies__element" key={card.id}>
                    <MoviesCard
                      card={card}
                      onClickMovie={handleAddSaveMovie}
                      isLikedCard={isLikedCard}
                      handleDeleteSaveMovie={handleDeleteSaveMovie}
                    />
                  </li>
                ))}
              </ul>
            )}
            {location.pathname === "/saved-movies" && (
              <ul className="movies__container movies__container_save">
                {isSaveCards.map((card) => (
                  <li className="movies__element" key={card.movieId}>
                    <MoviesCard
                      card={card}
                      setIsSaveCards={setIsSaveCards}
                      isLikedCard={isLikedCard}
                      handleDeleteSaveMovie={handleDeleteSaveMovie}
                    />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      ) : (
        <section className="movies__container">
          <p className="movies__container_error">
            Во время запроса произошла ошибка.
            Возможно, проблема с соединением или сервер недоступен. 
            Подождите немного и попробуйте ещё раз.
          </p>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
