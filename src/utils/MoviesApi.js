export class Api {
  constructor({ address }) {
    this._address = address;
  }

  //обработка запроса
  _request(url, options) {
    const fetchAddress = `${url}`;

    return fetch(fetchAddress, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  //Метод для запроса массива всех карточек стороннего Api
  getArrayCards() {
    const token = localStorage.getItem("token");
    return this._request(this._address, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  }
}
const movieApi = new Api({
  address: "https://api.nomoreparties.co/beatfilm-movies",
});
export default movieApi;
