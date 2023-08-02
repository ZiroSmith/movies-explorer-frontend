import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={headerLogo} alt="Логотип" />
        </Link>
        <p className="login__welcome">Рады видеть!</p>
        <form className="login__form">
          <input
            id="email"
            className="login__input"
            name="email"
            type="email"
            value="pochta@yandex.ru"
            placeholder="Email"
          />
          <input
            id="password"
            className="login__input"
            name="password"
            type="password"
            value="password"
            placeholder="Пароль"
          />
          <div className="login__button">
            <button type="submit" className="login__link">
              Войти
            </button>
          </div>
        </form>
        <div className="login__signin">
          <p className="login__text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__login-link">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
