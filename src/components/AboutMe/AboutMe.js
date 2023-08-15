import "./AboutMe.css";
import React from "react";
import { Link } from "react-router-dom";
import photoImage from "../../images/photo-image.svg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__info_container">
            <h3 className="about-me__info_title">Виталий</h3>
            <p className="about-me__info_subtitle">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__info_text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <Link
              className="about-me__info_link"
              to={"https://github.com/ZiroSmith"}
              target="_blank"
            >
              Github
            </Link>
          </div>
          <img className="about-me__image" src={photoImage} alt="Фото" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
