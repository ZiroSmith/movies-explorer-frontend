import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardListSave() {
  return (
    <section className="moviesCardList">
      {/* Временные заглушки в виде классов для сверки 
      с макетомпо Pixel Perfect */}
      <ul className="moviesCardList__container">
        <li className="moviesCardList__element">
          <MoviesCard />
        </li>
        <li className="moviesCardList__element">
          <MoviesCard />
        </li>
        <li className="moviesCardList__element width__save320">
          <MoviesCard />
        </li>
      </ul>
      <button className="moviesCardList__button moviesCardList__button-save">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardListSave;
