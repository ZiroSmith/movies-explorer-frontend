import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ image, name, time }) {
  const location = useLocation();
  const [savedMovie, setSavedMovie] = React.useState(false);
  const handleSavedMovie = () => setSavedMovie(!savedMovie);

  const ButtonMovieClass = `${
    savedMovie ? "moviesCard__btn moviesCard__btn_active" : "moviesCard__btn"
  }
    ${location.pathname === "/saved-movies" && "moviesCard__btn_delete"}
    `;

  return (
    <section className="moviesCard">
      <div className="moviesCard__container">
        <div className="moviesCard__element">
          <img className="moviesCard__image" src={image} alt={name} />
          <div className="moviesCard__name">
            <h2 className="moviesCard__title">{name}</h2>
            <button
              className={ButtonMovieClass}
              onClick={handleSavedMovie}
            ></button>
          </div>
          <p className="moviesCard__text">{time}</p>
        </div>
      </div>
    </section>
  );
}

export default MoviesCard;
