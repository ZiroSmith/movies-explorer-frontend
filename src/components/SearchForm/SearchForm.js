import "./SearchForm.css";
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <div className="search__input_container">
          <input
            className="search__input"
            id="search-input"
            type="text"
            name="name"
            placeholder="Фильм"
          />
          <button className="search__input_button"></button>
        </div>

        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
