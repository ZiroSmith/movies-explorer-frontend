import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={headerLogo} alt="Логотип" />
        </Link>
        <p className="register__welcome">Добро пожаловать!</p>
        <form className="register__form">
          <input
            id="name"
            className="login__input"
            name="name"
            type="text"
            value="Виталий"
            placeholder="Имя"
          />
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
          <div className="register__button">
            <button type="submit" className="register__link">
              Зарегистрироваться
            </button>
          </div>
        </form>
        <div className="register__signin">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__login-link">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
