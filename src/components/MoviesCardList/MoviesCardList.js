import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ moviesCardArray }) {
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        {moviesCardArray.map((card) => {
          return (
            <MoviesCard image={card.image} name={card.name} time={card.time} />
          );
        })}
      </div>
      <button className="moviesCardList__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
