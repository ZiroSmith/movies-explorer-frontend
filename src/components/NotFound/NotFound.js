import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  function comeBack() {
    navigate(-1);
  }

  return (
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__text">Страница не найдена</p>
      <Link onClick={comeBack} className="notFound__link">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
