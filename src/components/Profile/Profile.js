import React from "react";
import "./Profile.css";
import { useValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const { values, isValid, handleChange, setValues } = useValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [isSwitchButton, setSwitchButton] = React.useState(true);

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser]);

  function handleEdit() {
    setSwitchButton(!isSwitchButton);
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    props.handleEditProfile(values.name, values.email);
  }

  return (
    <section className="profile">
      <form className="profile__container" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <fieldset className="profile__form_fieldset">
          <label className="form__label">
            Имя
            <input
              className="form__input form__input_name"
              value={values.name || ""}
              onChange={handleChange}
              disabled={isSwitchButton}
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
              value={values.email || ""}
              onChange={handleChange}
              disabled={isSwitchButton}
              type="email"
              name="email"
              minLength={2}
              maxLength={30}
              required
            />
          </label>
        </fieldset>
        <button
          onClick={handleEdit}
          className={`${
            isSwitchButton
              ? "profile__button_edit"
              : "profile__button_edit profile__button_hide"
          }`}
        >
          Редактировать
        </button>
        <button
          onClick={props.signOut}
          to="/"
          className={`${
            isSwitchButton
              ? "profile__button_exit"
              : "profile__button_exit profile__button_hide"
          }`}
        >
          Выйти из аккаунта
        </button>
        <button
          onClick={handleEdit}
          type="submit"
          className={`${
            !isValid ||
            (values.name === currentUser.name &&
              values.email === currentUser.email)
              ? "profile__button_save profile__button_hide"
              : "profile__button_save"
          }`}
          disabled={
            !isValid ||
            (values.name === currentUser.name &&
              values.email === currentUser.email)
          }
        >
          Сохранить
        </button>
      </form>
    </section>
  );
}

export default Profile;
