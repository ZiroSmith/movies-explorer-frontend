import './Portfolio.css';
import React from "react";
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__info'>
          <li className='portfolio__list'>
            <p className='portfolio__text'>Статичный сайт</p>
            <Link className='portfolio__link'
              to={'https://github.com/ZiroSmith/how-to-learn'}
              target='_blank'>↗</Link>
          </li>
          <li className='portfolio__list'>
            <p className='portfolio__text'>Адаптивный сайт</p>
            <Link className='portfolio__link'
              to={'https://github.com/ZiroSmith/russian-travel'}
              target='_blank'>↗</Link>
          </li>
          <li className='portfolio__list'>
            <p className='portfolio__text'>Одностраничное приложение</p>
            <Link className='portfolio__link'
              to={'https://github.com/ZiroSmith/react-mesto-api-full-gha'}
              target='_blank'>↗</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;

