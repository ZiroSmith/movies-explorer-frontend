import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";

function Login() {
  return (
    <section className="signin">
      <div className="signin__container">
        <Link to="/">
          <img className="signin__logo" src={headerLogo} alt="Логотип" />
        </Link>
        <p className="signin__welcome">Рады видеть!</p>
        <form className="signin__form">
          <label className="signin__form_label">E-mail</label>
          <input
            id="email"
            className="signin__form__input"
            name="email"
            type="email"
            value="pochta@yandex.ru"
            placeholder="Email"
            required
          />
          <span className="signin__form_error"></span>
          <label className="signin__form_label">Пароль</label>
          <input
            id="password"
            className="signin__form__input"
            name="password"
            type="password"
            value="password"
            placeholder="Пароль"
            required
          />
          <span className="signin__form_error">Что-то пошло не так...</span>
          <div className="signin__button">
            <button type="submit" className="signin__link">
              Войти
            </button>
          </div>
        </form>
        <div className="signin__clue">
          <p className="signin__text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="signin__login-link">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
