import './AboutProject.css';
import React from "react";

function AboutProject() {
  return (
    <section className="about">
      <div>
        <h2 className='about__title'>О проекте</h2>
        <div className='container1'>
          <div className='el1'>
            <h3>Заголовок</h3>
            <p>Text</p>
          </div>
          <div className='el2'>
            <h3>Заголовок</h3>
            <p>Text</p>
          </div>
        </div>
        <div className='container2'>
          <div className='el3'>
            <h3>1 неделя</h3>
            <p>Back-end</p>
          </div>
          <div className='el4'>
            <h3>4 недели</h3>
            <p>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;

