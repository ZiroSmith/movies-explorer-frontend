import './MoviesCard.css';
import React from "react";
import movieImage from "../../images/Movie-image-1.svg";

function MoviesCard() {
  const [savedMovie, setSavedMovie] = React.useState(false);
  const handleSavedMovie = () => setSavedMovie(!savedMovie);

  const ButtonMovieClass = (
    `${savedMovie ? 'moviesCard__btn moviesCard__btn_active' : 'moviesCard__btn'}
    `
  )

  return (
    <section className="moviesCard">
      <div className='moviesCard__container'>
        <div className='moviesCard__element'>
          <img className="moviesCard__image" src={movieImage} alt="Постер фильма" />
          <div className='moviesCard__name'>
            <h2 className='moviesCard__title'>33 слова о дизайне</h2>
            <button className={ButtonMovieClass} onClick={handleSavedMovie}></button>
          </div>
          <p className='moviesCard__text'>1h42m</p>
        </div>
      </div>
    </section>
  );
}

export default MoviesCard;
