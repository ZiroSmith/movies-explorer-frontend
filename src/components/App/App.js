import "./App.css";
import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import * as Auth from "../../utils/auth.js";
import mainApi from "../../utils/MainApi.js";
import moviesApi from "../../utils/MoviesApi.js";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const windowElement = document.getElementById("root");
  const [currentUser, setCurrentUser] = React.useState({ data: {} });
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [cards, setCards] = React.useState(() => {
    const ArrayAllMovie = JSON.parse(localStorage.getItem("ArrayAllMovie"));
    return ArrayAllMovie || [];
  });

  const [search, setSearch] = React.useState(() => {
    const requestText = localStorage.getItem("RequestText");
    return requestText || "";
  });

  const [isToggled, setIsToggled] = React.useState(() => {
    const ShortFilmToggle = JSON.parse(localStorage.getItem("ShortFilmToggle"));
    return ShortFilmToggle || false;
  });

  const [isToggledSaveMovie, setIsToggledSaveMovie] = React.useState(false);
  const [isSaveCards, setIsSaveCards] = React.useState([]);
  const [IsSearchInSaveMovies, setIsSearchInSaveMovies] = React.useState("");
  const [isErrorMovie, setIsErrorMovie] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const isOpenSaveMovie = location.pathname === "/saved-movies";

  //==============Блок функциональности профиля==================//

  //Выход из аккаунта
  function signOut() {
    localStorage.clear();
    setLoggedIn(false);
    setCards([]);
    setIsSaveCards([]);
    setSearch("");
    setIsToggled(false);
    setIsToggledSaveMovie(false);
    setIsSearchInSaveMovies("");
    setIsErrorMovie(false);
    navigate("/");
  }

  // Регистрация
  const handleRegister = (name, email, password) => {
    return Auth.register(name, email, password)
      .then(() => {
        console.log("Успешная регистрация");
        handleLogin(email, password);
      })
      .catch(() => {
        console.log("Регистрация не удалась");
      });
  };

  // Авторизация
  const handleLogin = (email, password) => {
    return Auth.authorize(email, password).then((data) => {
      localStorage.setItem("token", data.token);
      checkToken();
      navigate("/movies");
    });
  };

  //Редактирование данных профиля
  function handleEditProfile(name, email) {
    mainApi
      .editUserInfo(name, email)
      .then(() => {
        checkToken();
      })
      .then(() => {
        setIsUpdate(true);
        setSuccessMessage("Данные успешно обновлены");
        setTimeout(() => setSuccessMessage(""), 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Проверка токена
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      Auth.tokenCheck(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => console.log(`${err}`));
    }
  };

  React.useEffect(() => {
    checkToken();
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      getSaveMovies();
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (isLoggedIn) {
      if (location.pathname === "/signup" || location.pathname === "/signin") {
        navigate("/movies");
      }
    }
  }, [isLoggedIn, location.pathname]);

  //==============================================================//

  //=================Блок функциональности Фильмов================//

  // Запрос массива карточек сохраненных фильмов
  const getSaveMovies = () => {
    mainApi
      .getSaveMovies()
      .then((movies) => setIsSaveCards(movies))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    setIsSearchInSaveMovies("");
    setIsToggledSaveMovie(false);
  }, [isOpenSaveMovie]);

  // Добавить фильм в сохранённые
  const handleAddSaveMovie = (card) => {
    mainApi
      .addMovieInSave(card)
      .then((card) => {
        setIsSaveCards([...isSaveCards, card]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Убрать фильм из сохранённых
  const handleDeleteSaveMovie = (card) => {
    const movieForDelete = isSaveCards.find(
      (item) => item.movieId === card.id && item.owner === currentUser._id
    );
    mainApi
      .deleteMovieInSave(movieForDelete ? movieForDelete._id : card._id)
      .then(() => {
        setIsSaveCards(
          isSaveCards.filter((item) => {
            return movieForDelete
              ? item._id !== movieForDelete._id
              : item._id !== card._id;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  // Кол-во карточек фильмов на экране юзера (зависит от разрешения)
  const quantityElements = () => {
    if (windowElement.clientWidth >= 1280) {
      return 12;
    } else if (
      windowElement.clientWidth < 1280 &&
      windowElement.clientWidth >= 650
    ) {
      return 8;
    } else {
      return 12;
    }
  };

  const [isArrElement, setIsArrElement] = React.useState(quantityElements);

  React.useEffect(() => {
    setIsArrElement(quantityElements);
  }, [search]);

  // Запрос и фильтрация массива карточек всех фильмов
  const handleSearch = () => {
    if (!localStorage.getItem("ArrayAllMovie")) {
      setIsLoading(true);
      moviesApi
        .getArrayCards()
        .then((movies) => {
          setCards(movies);
          localStorage.setItem("ArrayAllMovie", JSON.stringify(movies));
        })
        .catch((err) => {
          console.log(err);
          setIsErrorMovie(true);
        })
        .finally(() => {
          setIsLoading(false);
          setIsArrElement(quantityElements);
        });
    }
  };

  const filterMovieInPage = (cards) => {
    let langConcatArr = [];
    return cards.filter((item) =>
      isToggled
        ? langConcatArr
            .concat(item.nameRU, item.nameEN)
            .toString()
            .toLowerCase()
            .includes(search.toLocaleLowerCase()) && item.duration <= 40
        : langConcatArr
            .concat(item.nameRU, item.nameEN)
            .toString()
            .toLowerCase()
            .includes(search.toLocaleLowerCase())
    );
  };

  // Поиск по сохраненным фильмам
  const handleSearchInSavedMovie = (isSaveCards) => {
    let savedCardsArr = [];
    return isSaveCards.filter((item) =>
      isToggledSaveMovie
        ? savedCardsArr
            .concat(item.nameRU, item.nameEN)
            .toString()
            .toLowerCase()
            .includes(IsSearchInSaveMovies.toLowerCase()) &&
          item.duration <= 40 &&
          item.owner === currentUser._id
        : savedCardsArr
            .concat(item.nameRU, item.nameEN)
            .toString()
            .toLowerCase()
            .includes(IsSearchInSaveMovies.toLowerCase()) &&
          item.owner === currentUser._id
    );
  };

  // "Сохранено" \ "Не сохранено" к фильмам
  const isLikedCard = (card) => {
    return handleSearchInSavedMovie(isSaveCards).some(
      (item) => item.movieId === card.id
    );
  };

  // Кнопка "Добавить ещё фильмов"
  const loadMoreMovie = () => {
    if (windowElement.clientWidth >= 1280) {
      setIsArrElement(isArrElement + 4);
    } else if (
      windowElement.clientWidth < 1280 &&
      windowElement.clientWidth >= 650
    ) {
      setIsArrElement(isArrElement + 2);
    } else {
      setIsArrElement(isArrElement + 2);
    }
  };

  //==============================================================//

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                isLoggedIn={isLoggedIn}
                cards={filterMovieInPage(cards).slice(0, isArrElement)}
                search={search}
                setSearch={setSearch}
                isErrorMovie={isErrorMovie}
                isLoading={isLoading}
                loadMoreMovie={loadMoreMovie}
                isArrElement={isArrElement}
                handleSearch={handleSearch}
                handleAddSaveMovie={handleAddSaveMovie}
                isLikedCard={isLikedCard}
                handleDeleteSaveMovie={handleDeleteSaveMovie}
                isToggled={isToggled}
                setIsToggled={setIsToggled}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                handleAddSaveMovie={handleAddSaveMovie}
                isLikedCard={isLikedCard}
                isSaveCards={handleSearchInSavedMovie(isSaveCards)}
                setIsSaveCards={setIsSaveCards}
                handleDeleteSaveMovie={handleDeleteSaveMovie}
                handleSearchInSavedMovie={handleSearchInSavedMovie}
                IsSearchInSaveMovies={IsSearchInSaveMovies}
                setIsSearchInSaveMovies={setIsSearchInSaveMovies}
                isToggledSaveMovie={isToggledSaveMovie}
                setIsToggledSaveMovie={setIsToggledSaveMovie}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={Profile}
                isLoggedIn={isLoggedIn}
                handleEditProfile={handleEditProfile}
                successMessage={successMessage}
                isUpdate={isUpdate}
                signOut={signOut}
              />
            }
          />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
