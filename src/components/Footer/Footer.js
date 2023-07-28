import './Footer.css';
import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="footer">
    <div className='footer__container'>
      <h2 className='footer__title'>Учебный проект Яндекс.практикум x BeatFilm.</h2>
      <div className='footer__info'>
        <p className='footer__info_date'>&#169;2023</p>
        <div className='footer__info_links'>
          <Link className='footer__info_link'
                to={'https://practicum.yandex.ru/'}
                target='_blank'>Яндекс.Практикум</Link>
          <Link className='footer__info_link'
                to={'https://github.com/ZiroSmith'}
                target='_blank'>Github</Link>
        </div>
        
      </div>
    </div>
  </section>
  );
}

export default Footer;

