import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useValidation } from "../../hooks/useFormAndValidation";
import headerLogo from "../../images/logo.svg";

const Register = (props) => {
  const { values, isValid, handleChange, errors } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegister(values.name, values.email, values.password);
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={headerLogo} alt="Логотип" />
        </Link>
        <p className="register__welcome">Добро пожаловать!</p>
        <form 
          onSubmit={handleSubmit}
          className="register__form">
          <label className="register__form_label">Имя</label>
          <input
            id="name"
            className="register__form__input"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            type="text"
            placeholder="Имя"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="register__form_error">{errors.name}</span>
          <label className="register__form_label">E-mail</label>
          <input
            id="email"
            className="register__form__input"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
          />
          <span className="register__form_error">{errors.email}</span>
          <label className="register__form_label">Пароль</label>
          <input
            id="password"
            className="register__form__input"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            type="password"
            placeholder="Пароль"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="register__form_error">{errors.password}</span>
          <div className={`${
                isValid
                  ? "register__button"
                  : "register__button register__button_disabled"
              }`}>
            <button 
              type="submit" 
              className="register__link"
              onSubmit={handleSubmit}>
              Зарегистрироваться
            </button>
          </div>
        </form>
        <div className="register__clue">
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
