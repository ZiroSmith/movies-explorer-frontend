import "./Portfolio.css";
import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__info">
          <li className="portfolio__list">
            <Link
              className="portfolio__link"
              to={"https://github.com/ZiroSmith/how-to-learn"}
              target="_blank"
            >
              <p className="portfolio__text">Статичный сайт</p>
              <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
            </Link>
          </li>
          <li className="portfolio__list">
            <Link
              className="portfolio__link"
              to={"https://github.com/ZiroSmith/russian-travel"}
              target="_blank"
            >
              <p className="portfolio__text">Адаптивный сайт</p>
              <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
            </Link>
          </li>
          <li className="portfolio__list">
            <Link
              className="portfolio__link"
              to={"https://github.com/ZiroSmith/react-mesto-api-full-gha"}
              target="_blank"
            >
              <p className="portfolio__text">Одностраничное приложение</p>
              <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
