import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__container">
            <li className='moviesCardList__element'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_320'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_320'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_320'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_768'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_768'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_768'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_768'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_768'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_768'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_768'>
              <MoviesCard />
            </li>
            <li className='moviesCardList__element width_768'>
              <MoviesCard />
            </li>
      </ul>
      <button className="moviesCardList__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
