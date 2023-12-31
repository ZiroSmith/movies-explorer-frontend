export const BASE_URL = "https://api.zeromovies.nomoreparties.sbs";

function request(url, options) {
  const fetchAddress = `${BASE_URL}/${url}`;

  return fetch(fetchAddress, options).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}

export const register = (name, email, password) => {
  return request(`signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
};

export const authorize = (email, password) => {
  return request(`signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const tokenCheck = () => {
  const token = localStorage.getItem("token");
  return request(`users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
