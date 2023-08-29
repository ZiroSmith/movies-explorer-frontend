export class Api {
  constructor({ address }) {
    this._address = address;
  }

  //обработка запроса
  _request(url, options) {
    const fetchAddress = `${this._address}/${url}`;

    return fetch(fetchAddress, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  //Метод для редактирования информации в профиле
  editUserInfo(name, email) {
    const token = localStorage.getItem("token");
    return this._request(`users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }

  //Метод для запроса сохраненных фильмов
  getSaveMovies() {
    const token = localStorage.getItem("token");
    return this._request(`movies`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  //Метод для добавления фильма в сохраненные
  addMovieInSave(FilmInfo) {
    const token = localStorage.getItem("token");
    return this._request(`movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: FilmInfo.country,
        director: FilmInfo.director,
        duration: FilmInfo.duration,
        year: FilmInfo.year,
        description: FilmInfo.description,
        image: `https://api.nomoreparties.co/${FilmInfo.image.url}`,
        trailerLink: FilmInfo.trailerLink,
        nameRU: FilmInfo.nameRU,
        nameEN: FilmInfo.nameEN,
        thumbnail: `https://api.nomoreparties.co/${FilmInfo.image.formats.thumbnail.url}`,
        movieId: FilmInfo.id,
      }),
    });
  }

  //Метод для удаления фильма из сохраненных
  deleteMovieInSave(id) {
    const token = localStorage.getItem("token");
    return this._request(`movies/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
}

const mainApi = new Api({
  address: "http://localhost:3000",
});

export default mainApi;
