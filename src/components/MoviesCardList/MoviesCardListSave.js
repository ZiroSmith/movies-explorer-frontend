import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardListSave() {
  return (
    <section className="movies">
      {/* Временные заглушки в виде классов для сверки 
      с макетомпо Pixel Perfect */}
      <ul className="movies__container movies__container_save">
        <li className="movies__element">
          <MoviesCard />
        </li>
        <li className="movies__element">
          <MoviesCard />
        </li>
        <li className="movies__element width__save320">
          <MoviesCard />
        </li>
      </ul>
      <button className="movies__button movies__button-save">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardListSave;
