/* eslint-disable react-hooks/exhaustive-deps */
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
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = React.useState({ data: {} });
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //Регистрация
  const handleRegister = (name, email, password) => {
    return Auth.register(name, email, password)
      .then(() => {
        console.log("Регистрация заебись");
        navigate("/signin");
      })
      .catch(() => {
        console.log("Регистрация хуйня");
      });
  };

  //Авторизация
  const handleLogin = (email, password) => {
    return Auth.authorize(email, password).then((data) => {
      localStorage.setItem("token", data.token);
      setLoggedIn(true);
      navigate("/movies");
    });
  };

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      Auth.checkToken(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
          navigate(location.pathname);
        }
      })
      .catch((err) => console.log(`${err}`));
    }}

  //Редактирование данных профиля
  function handleEditProfile(name, email) {
    mainApi
      .editUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  //Выход из аккаунта
  function signOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement
                element={Movies}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
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
                signOut={signOut}
              />
            }
          />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route 
            path="/signin"
            element={<Login handleLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
