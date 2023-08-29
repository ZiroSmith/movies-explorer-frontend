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
  const searchRef = React.useRef("");
  const searchSaveRef = React.useRef("");
  const toggleRef = React.useRef(false);
  const toggleSaveCardRef = React.useRef(false);
  const [isSearchFail, setIsSearchFail] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState("");
  const moviesPath = location.pathname === "/movies";

  const onBlur = () => {
    setIsSearchFail(true);
  };

  const handleMainSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    localStorage.setItem("RequestText", value);
    !value ? setIsSearchError("Введите ключевое слово") : setIsSearchError("");
  };

  const handleSavedSearch = (e) => {
    setIsSearchInSaveMovies(e.target.value);
    !e.target.value
      ? setIsSearchError("Введите ключевое слово")
      : setIsSearchError("");
  };

  const searchHandler = (e) => {
    moviesPath ? handleMainSearch(e) : handleSavedSearch(e);
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
    moviesPath ? handleMainToggle() : handleSavedToggle();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    moviesPath ? searchMain() : searchSaved();
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
            placeholder="Фильм"
            value={moviesPath ? search : IsSearchInSaveMovies}
            onChange={(e) => searchHandler(e)}
            onBlur={onBlur}
            ref={moviesPath ? searchRef : searchSaveRef}
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
                checked={moviesPath ? isToggled : isToggledSaveMovie}
                onChange={handleToggle}
                ref={moviesPath ? toggleRef : toggleSaveCardRef}
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
