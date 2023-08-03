import "./Header.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../../images/logo.svg";
import accountLogo from "../../images//icon__account.svg";

function Header() {
  const location = useLocation();

  return (
    <header>
      {location.pathname === "/" && (
        <section className="header">
          <div className="header__container">
            <Link to="/">
              <img className="header__logo" src={headerLogo} alt="Логотип" />
            </Link>
            <div className="header__navbar">
              <Link to="/signup" className="header__link">
                Регистрация
              </Link>
              <Link to="/signin" className="header__sign-in">
                Войти
              </Link>
            </div>
          </div>
        </section>
      )}
      {(location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile") && (
        <section className="header_dark">
          <div className="header__container_dark">
            <Link to="/">
              <img className="header__logo" src={headerLogo} alt="Логотип" />
            </Link>
            <div className="header__navbar header__navbar_dark">
              <Link to="/movies" className={`${
                  location.pathname === "/movies"
                    ? "header__link header__link_dark header__link_active"
                    : "header__link header__link_dark"
                }`}>
                Фильмы
              </Link>
              <Link to="/saved-movies" className={`${
                  location.pathname === "/saved-movies"
                    ? "header__link header__link_active"
                    : "header__link"
                }`}>
                Сохранённые фильмы
              </Link>
            </div>
            <Link to="/profile" className="header__link header__link_container">
              <p className="header__link_text">Аккаунт</p>
              <div className="header__logo_container">
                <img
                  className="header__link_logo"
                  src={accountLogo}
                  alt="Логотип аккаунта"
                />
              </div>
            </Link>
          </div>
        </section>
      )}
    </header>
  );
}

export default Header;
