import './SearchForm.css';
import React from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <div className='search__container'>
        <h2 className='search__title'>Фильм</h2>
        <div className='search__info'></div>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
