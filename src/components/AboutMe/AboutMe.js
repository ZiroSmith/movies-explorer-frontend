import "./AboutMe.css";
import React from "react";
import { Link } from "react-router-dom";
import photoImage from "../../images/photo-image.svg";

function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__container">
        <h2 className="aboutme__title">Студент</h2>
        <div className="aboutme__info">
          <div className="aboutme__info_container">
            <h3 className="aboutme__info_title">Виталий</h3>
            <p className="aboutme__info_subtitle">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="aboutme__info_text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <Link
              className="aboutme__info_link"
              to={"https://github.com/ZiroSmith"}
              target="_blank"
            >
              Github
            </Link>
          </div>
          <img className="aboutme__image" src={photoImage} alt="Фото" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
