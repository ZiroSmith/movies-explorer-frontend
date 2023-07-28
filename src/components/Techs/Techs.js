import './Techs.css';
import React from "react";

function Techs() {
  return (
    <section className="techs">
    <div className='techs__container'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__info'>
        <h3 className="techs__info_title">7 технологий</h3>
        <p className="techs__info_text">На курсе веб-разработки мы освоили технологии,
         которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__list">
        <li className="techs__element">HTML</li>
        <li className="techs__element">CSS</li>
        <li className="techs__element">JS</li>
        <li className="techs__element">React</li>
        <li className="techs__element">Git</li>
        <li className="techs__element">Express.js</li>
        <li className="techs__element">MongoDB</li>
      </ul>
    </div>
    </section>
  );
}

export default Techs;
