import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox() {
  return (
    <section className="filtercheckbox">
      <div className="filtercheckbox__container">
        <label class="switch">
          <input type="checkbox" />
          <span class="switch__slider switch__round"></span>
        </label>
        <h2 className="filtercheckbox__title">Короткометражки</h2>
      </div>
    </section>
  );
}

export default FilterCheckbox;
