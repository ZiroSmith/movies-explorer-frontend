import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ card, onClickMovie, isLikedCard, handleDeleteSaveMovie }) {
  const location = useLocation();
  const isSaved = isLikedCard(card);
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration - hours * 60;

  const movieLikeBtnClassName = `moviesCard__btn ${
    isSaved && "moviesCard__btn_active"
  }`;

  function saveMovie() {
    onClickMovie(card);
  }

  function deleteMovie() {
    handleDeleteSaveMovie(card);
  }

  return (
    <section className="moviesCard">
      <div className="moviesCard__container">
        <div className="moviesCard__element">
          <a
            className="movie__trailer-link"
            href={card.trailerLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="moviesCard__image"
              src={
                location.pathname === "/movies"
                  ? `https://api.nomoreparties.co/${card.image.url}`
                  : card.image
              }
              alt="Превью фильма"
            />
          </a>
          <div className="moviesCard__name">
            <h2 className="moviesCard__title">{card.nameRU}</h2>
            {location.pathname === "/movies" && (
              <button
                className={movieLikeBtnClassName}
                type="button"
                onClick={!isSaved ? saveMovie : deleteMovie}
              />
            )}
            {location.pathname === "/saved-movies" && (
              <button
                className="moviesCard__btn moviesCard__btn_delete"
                type="button"
                onClick={deleteMovie}
              />
            )}
          </div>
          <p className="moviesCard__text">
            {hours}ч {minutes}м
          </p>
        </div>
      </div>
    </section>
  );
}

export default MoviesCard;
