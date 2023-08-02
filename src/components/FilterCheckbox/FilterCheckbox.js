import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox() {
  return (
    <section className="filtercheckbox">
      <div className="filtercheckbox__container">
        <label class="filtercheckbox__switch">
          <input type="checkbox" />
          <span class="filtercheckbox__slider filtercheckbox__round"></span>
        </label>
        <h2 className="filtercheckbox__title">Короткометражки</h2>
      </div>
    </section>
  );
}

export default FilterCheckbox;
