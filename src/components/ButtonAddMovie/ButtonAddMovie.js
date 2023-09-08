import "./ButtonAddMovie.css";

function ButtonAddMovie({ loadMoreMovie, cards, isArrElement }) {
  return (
    <>
      {isArrElement > 99 ? null : (
        <button
          className="movies__button"
          type="button"
          onClick={loadMoreMovie}
        >
          Ещё
        </button>
      )}
    </>
  );
}

export default ButtonAddMovie;
