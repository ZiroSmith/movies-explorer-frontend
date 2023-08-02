import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <form className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <fieldset className="profile__form_fieldset">
          <label className="form__label">
            Имя
            <input
              className="form__input form__input_name"
              value="Виталий"
              type="text"
              name="name"
              minLength={2}
              maxLength={30}
              required
            />
          </label>

          <label className="form__label">
            E-mail
            <input
              className="form__input form__input_email"
              value="pochta@yandex.ru"
              type="email"
              name="email"
              minLength={2}
              maxLength={30}
              required
            />
          </label>
        </fieldset>
        <button className="profile__button_edit">Редактировать</button>
        <button className="profile__button_exit">Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;
