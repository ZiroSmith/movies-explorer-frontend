import "./Footer.css";
import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer>
      {(location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies") && (
        <section className="footer">
          <div className="footer__container">
            <h2 className="footer__title">
              Учебный проект Яндекс.Практикум x BeatFilm.
            </h2>
            <div className="footer__info">
              <p className="footer__info_date">&#169;2023</p>
              <div className="footer__info_links">
                <a
                  className="footer__info_link"
                  href="https://practicum.yandex.ru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
                <a
                  className="footer__info_link"
                  href="https://github.com/ZiroSmith"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </footer>
  );
}

export default Footer;
