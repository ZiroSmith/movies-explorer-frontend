import "./Footer.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

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
              Учебный проект Яндекс.практикум x BeatFilm.
            </h2>
            <div className="footer__info">
              <p className="footer__info_date">&#169;2023</p>
              <div className="footer__info_links">
                <Link
                  className="footer__info_link"
                  to={"https://practicum.yandex.ru/"}
                  target="_blank"
                >
                  Яндекс.Практикум
                </Link>
                <Link
                  className="footer__info_link"
                  to={"https://github.com/ZiroSmith"}
                  target="_blank"
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </footer>
  );
}

export default Footer;
