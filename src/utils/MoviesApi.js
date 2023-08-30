class Api {
  constructor({ address }) {
    this._address = address;
  }

  //обработка запроса
  _request(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  //Метод для запроса массива всех карточек стороннего Api
  getArrayCards() {
    return fetch(`${this._address}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then(this._request);
  }
}
const movieApi = new Api({
  address: "https://api.nomoreparties.co/beatfilm-movies",
});
export default movieApi;
