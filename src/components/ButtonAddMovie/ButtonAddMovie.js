import "./ButtonAddMovie.css";

function ButtonAddMovie({ loadMoreMovie, cards, isArrElement }) {
  return (
    <>
      {isArrElement > cards.length ? null : (
        <button
          className="movies__button"
          type="button"
          aria-label="Больше карточек"
          onClick={loadMoreMovie}
        >
          Ещё
        </button>
      )}
    </>
  );
}

export default ButtonAddMovie;
