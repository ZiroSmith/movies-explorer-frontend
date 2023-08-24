export class Api {
    constructor({ address }) {
      this._address = address;
    }
  
     //обработка запроса
     _request(url, options) {
      const fetchAddress = `${this._address}/${url}`
  
      return fetch(fetchAddress, options).then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
    }
  
    //Метод для редактирования информации в профиле
    editUserInfo(name, email) {
      const token = localStorage.getItem('token');
      return this._request(`users/me`, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email
      })
      })
    }
  }
  
  const mainApi = new Api({
    address: "http://localhost:3000",
  });

  export default mainApi;