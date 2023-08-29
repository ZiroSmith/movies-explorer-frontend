import "./SearchForm.css";
import React from "react";
import { useLocation } from "react-router-dom";

function SearchForm({
  search,
  setSearch,
  isToggled,
  setIsToggled,
  isToggledSaveMovie,
  setIsToggledSaveMovie,
  handleSearch,
  handleSearchInSavedMovie,
  IsSearchInSaveMovies,
  setIsSearchInSaveMovies,
  isSaveCards,
}) {
  const location = useLocation();
  const MovieLocation = location.pathname === "/movies";
  const [isSearchFail, setIsSearchFail] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState("");

  const searchRef = React.useRef("");
  const searchSaveRef = React.useRef("");
  const toggleRef = React.useRef(false);
  const toggleSaveCardRef = React.useRef(false);

  const handleRequestSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    localStorage.setItem("RequestText", value);
    !value ? setIsSearchError("Введите ключевое слово") : setIsSearchError("");
  };

  const handleRequestSavedSearch = (e) => {
    setIsSearchInSaveMovies(e.target.value);
    !e.target.value ? setIsSearchError("Введите ключевое слово") : setIsSearchError("");
  };

  const searchRequestHandler = (e) => {
    MovieLocation ? handleRequestSearch(e) : handleRequestSavedSearch(e);
  };

  const searchMain = () => {
    handleSearch();
    localStorage.setItem("RequestText", searchRef.current.value);
  };

  const searchSaved = () => {
    handleSearchInSavedMovie(isSaveCards);
  };

  const handleSavedToggle = () => {
    setIsToggledSaveMovie((isToggledSaveMovie) => !isToggledSaveMovie);
  };

  const handleMainToggle = () => {
    setIsToggled((isToggled) => !isToggled);
    localStorage.setItem("ShortFilmToggle", toggleRef.current.checked);
  };

  const handleToggle = () => {
    MovieLocation ? handleMainToggle() : handleSavedToggle();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    MovieLocation ? searchMain() : searchSaved();
  };

  const onBlur = () => {
    setIsSearchFail(true);
  };

  return (
    <section className="search">
      <div className="search__container">
        <form
          className="search__input_container"
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            className="search__input"
            name="search"
            id="search"
            type="text"
            value={MovieLocation ? search : IsSearchInSaveMovies}
            onChange={(e) => searchRequestHandler(e)}
            onBlur={onBlur}
            ref={MovieLocation ? searchRef : searchSaveRef}
            placeholder="Фильм"
          />
          <button className="search__input_button"></button>
        </form>
        {isSearchFail && isSearchError && (
            <span className="search__input_error">{`${isSearchError}!`}</span>
        )}
        <div className="filtercheckbox">
          <div className="filtercheckbox__container">
            <label className="switch">
              <input
                type="checkbox"
                checked={MovieLocation ? isToggled : isToggledSaveMovie}
                onChange={handleToggle}
                ref={MovieLocation ? toggleRef : toggleSaveCardRef}
              />
              <span className="switch__slider switch__round"></span>
            </label>
            <h2 className="filtercheckbox__title">Короткометражки</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
