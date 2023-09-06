import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useValidation } from "../../hooks/useFormAndValidation";
import headerLogo from "../../images/logo.svg";

const Login = (props) => {
  const { values, isValid, handleChange, errors } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    props.handleLogin(values.email, values.password);
  };

  return (
    <section className="signin">
      <div className="signin__container">
        <Link to="/">
          <img className="signin__logo" src={headerLogo} alt="Логотип" />
        </Link>
        <p className="signin__welcome">Рады видеть!</p>
        <form className="signin__form" onSubmit={handleSubmit}>
          <label className="signin__form_label">E-mail</label>
          <input
            id="email"
            className="signin__form__input"
            name="email"
            type="email"
            value={values.email || ""}
            onChange={handleChange}
            placeholder="Email"
            pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+"
            required
          />
          <span className="signin__form_error">{errors.email}</span>
          <label className="signin__form_label">Пароль</label>
          <input
            id="password"
            className="signin__form__input"
            name="password"
            type="password"
            value={values.password || ""}
            onChange={handleChange}
            placeholder="Пароль"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="signin__form_error">{errors.password}</span>
          <button
            type="submit"
            aria-label="Войти"
            className={`${
              isValid
                ? "signin__button"
                : "signin__button signin__button_disabled"
            }`}
          >
            Войти
          </button>
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
};

export default Login;
