import './Header.css';
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";

function Header({ loggedEmail, signOut }) {
  //const location = useLocation();
  //вернуть в импорт useLocation после Link

  return (
    <header className="header">
      <section className="header__container">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <div className='header__navbar'>
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
        <Link to="/sign-in" className="header__sign-in">
          Войти
        </Link>
      {/* {location.pathname === "/sign-in" && (
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
      )}
      {location.pathname === "/sign-up" && (
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      )}
      {location.pathname === "/" && (
        <div className="header__info">
          <p className="header__email">{loggedEmail}</p>
          <button onClick={signOut} className="header__button">
            Выйти
          </button>
        </div>
      )} */}
      </div>
    </section>
    </header>
    
  );
}

export default Header;
