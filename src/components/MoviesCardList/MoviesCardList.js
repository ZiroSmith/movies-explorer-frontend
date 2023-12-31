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
              <>
                {cards.length ? (
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
                ) : (
                  <p className="movies__empty">Ничего не найдено</p>
                )}
              </>
            )}
            {location.pathname === "/saved-movies" && (
              <>
                {isSaveCards.length ? (
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
                ) : (
                  <p className="movies__empty">Ничего не найдено</p>
                )}
              </>
            )}
          </section>
        </>
      ) : (
        <section className="movies__container">
          <p className="movies__container_error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
