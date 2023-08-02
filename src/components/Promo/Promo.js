import "./Promo.css";
import React from "react";
import { Link } from "react-scroll";
import landingLogo from "../../images/landing-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info">
          <h1 className="promo__title">
            Учебный проект студента факультета
            <br />
            Веб-разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link to='about' className="promo__link">Узнать больше</Link>
        </div>
        <img className="promo__landing" src={landingLogo} alt="Лэндинг" />
      </div>
    </section>
  );
}

export default Promo;
