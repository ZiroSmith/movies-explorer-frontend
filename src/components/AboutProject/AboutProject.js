import "./AboutProject.css";
import React from "react";

function AboutProject() {
  return (
    <section className="about" title="about">
      <div className="about__container">
        <h2 className="about__title">О проекте</h2>
        <div className="about__info">
          <div className="about__info_container">
            <h3 className="about__info_title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__info_text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и&nbsp;финальные доработки.
            </p>
          </div>
          <div className="about__info_container">
            <h3 className="about__info_title">
              На&nbsp;выполнение диплома ушло 5 недель
            </h3>
            <p className="about__info_text">
              У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__time">
          <div className="about__backend">
            <h3 className="about__backend_title">1 неделя</h3>
            <p className="about__backend_text">Back-end</p>
          </div>
          <div className="about__frontend">
            <h3 className="about__frontend_title">4 недели</h3>
            <p className="about__frontend_text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
