import React from "react";
import "./styles/ErrorMessage.scss";

export const ErrorMessage = () => {
  return (
    <div className="error">
      <h1 className="error__title">Problemas al obtener los datos</h1>
      <h2 className="error__subtitle">
        Por favor vuelve a intentarlo mas tarde
      </h2>
    </div>
  );
};
