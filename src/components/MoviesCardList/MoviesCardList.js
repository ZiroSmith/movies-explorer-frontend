import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="movies">
      {/* Временные заглушки в виде классов для сверки 
      с макетомпо Pixel Perfect */}
      <ul className="movies__container">
        <li className="movies__element">
          <MoviesCard />
        </li>
        <li className="movies__element">
          <MoviesCard />
        </li>
        <li className="movies__element">
          <MoviesCard />
        </li>
        <li className="movies__element">
          <MoviesCard />
        </li>
        <li className="movies__element">
          <MoviesCard />
        </li>
        <li className="movies__element width_320">
          <MoviesCard />
        </li>
        <li className="movies__element width_320">
          <MoviesCard />
        </li>
        <li className="movies__element width_320">
          <MoviesCard />
        </li>
        <li className="movies__element width_768">
          <MoviesCard />
        </li>
        <li className="movies__element width_768">
          <MoviesCard />
        </li>
        <li className="movies__element width_768">
          <MoviesCard />
        </li>
        <li className="movies__element width_768">
          <MoviesCard />
        </li>
        <li className="movies__element width_768">
          <MoviesCard />
        </li>
        <li className="movies__element width_768">
          <MoviesCard />
        </li>
        <li className="movies__element width_768">
          <MoviesCard />
        </li>
        <li className="movies__element width_768">
          <MoviesCard />
        </li>
      </ul>
      <button className="movies__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
