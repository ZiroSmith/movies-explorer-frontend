import "./Portfolio.css";
import React from "react";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__info">
          <li className="portfolio__list">
            <a
              className="portfolio__link"
              href="https://github.com/ZiroSmith/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__text">Статичный сайт</p>
              <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
            </a>
          </li>
          <li className="portfolio__list">
            <a
              className="portfolio__link"
              href="https://github.com/ZiroSmith/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__text">Адаптивный сайт</p>
              <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
            </a>
          </li>
          <li className="portfolio__list">
            <a
              className="portfolio__link"
              href="https://github.com/ZiroSmith/react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__text">Одностраничное приложение</p>
              <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
